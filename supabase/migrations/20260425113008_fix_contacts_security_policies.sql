/*
  # Fix contacts table RLS security issues

  1. Security Updates
    - Remove anonymous access from INSERT policy
    - Add user_id tracking to contacts table
    - Restrict INSERT to authenticated users only
    - Restrict SELECT to authenticated users viewing their own records
    - Remove overly permissive SELECT policy using USING (true)

  2. Tables Modified
    - `contacts` table: Add user_id column to track record ownership

  3. RLS Policies
    - Only authenticated users can insert contact records
    - Only authenticated users can view their own contact records
    - No anonymous access allowed
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contacts' AND column_name = 'user_id'
  ) THEN
    ALTER TABLE contacts ADD COLUMN user_id uuid;
  END IF;
END $$;

DROP POLICY IF EXISTS "Public can insert contact messages" ON contacts;
DROP POLICY IF EXISTS "Authenticated users can view contacts" ON contacts;

CREATE POLICY "Authenticated users can insert contact messages"
  ON contacts
  FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() = user_id AND
    name IS NOT NULL AND
    name != '' AND
    email IS NOT NULL AND
    email != '' AND
    message IS NOT NULL AND
    message != ''
  );

CREATE POLICY "Authenticated users can view own contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);
