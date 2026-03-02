/*
  # Fix contacts table RLS policies

  1. Security
    - Drop overly permissive policies
    - Add restrictive INSERT policy that validates input
    - Disable SELECT access for public/anonymous users
    - Allow only authenticated users to view contacts
*/

DROP POLICY IF EXISTS "Anyone can insert contact messages" ON contacts;
DROP POLICY IF EXISTS "Only authenticated users can view contacts" ON contacts;

CREATE POLICY "Public can insert contact messages"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    name IS NOT NULL AND
    name != '' AND
    email IS NOT NULL AND
    email != '' AND
    message IS NOT NULL AND
    message != ''
  );

CREATE POLICY "Authenticated users can view contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);
