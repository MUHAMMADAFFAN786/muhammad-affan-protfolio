/*
  # Fix contacts table RLS and remove anonymous access

  1. Security Updates
    - Add user_id column to contacts table for ownership tracking
    - Drop overly permissive INSERT policy ("Public can insert contact messages")
      that uses WITH CHECK (true), bypassing RLS entirely
    - Drop overly permissive SELECT policy ("Authenticated users can view contacts")
      that uses USING (true), allowing any authenticated user to see all records
    - Create restrictive INSERT policy: only authenticated users, must own the record
    - Create restrictive SELECT policy: authenticated users can only view their own records
    - Remove all anonymous (anon) access to the contacts table

  2. Tables Modified
    - `contacts`: added `user_id` uuid column for ownership tracking

  3. RLS Policies (replacing old ones)
    - "Authenticated users can insert contact messages":
        INSERT only, authenticated role, WITH CHECK enforces auth.uid() = user_id
        and validates all required fields are non-empty
    - "Authenticated users can view own contacts":
        SELECT only, authenticated role, USING enforces auth.uid() = user_id

  4. Important Notes
    - Anonymous users can no longer directly INSERT into contacts
    - Contact form submissions are handled via the submit_contact Edge Function
      which uses the service_role key to insert on behalf of visitors
    - Each Edge Function insert assigns a random UUID as user_id
    - This ensures no direct table access from untrusted clients
*/

-- Add user_id column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contacts' AND column_name = 'user_id'
  ) THEN
    ALTER TABLE contacts ADD COLUMN user_id uuid;
  END IF;
END $$;

-- Drop the existing overly permissive policies
DROP POLICY IF EXISTS "Public can insert contact messages" ON contacts;
DROP POLICY IF EXISTS "Authenticated users can view contacts" ON contacts;

-- Restrictive INSERT policy: only authenticated users who own the record
CREATE POLICY "Authenticated users can insert contact messages"
  ON contacts
  FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() = user_id
    AND name IS NOT NULL AND name != ''
    AND email IS NOT NULL AND email != ''
    AND message IS NOT NULL AND message != ''
  );

-- Restrictive SELECT policy: authenticated users can only see their own records
CREATE POLICY "Authenticated users can view own contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);
