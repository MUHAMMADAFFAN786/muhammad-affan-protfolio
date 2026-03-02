/*
  # Create contacts table

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key, auto-generated)
      - `name` (text, contact person's name)
      - `email` (text, contact email address)
      - `message` (text, contact message)
      - `created_at` (timestamp, record creation time)

  2. Security
    - Enable RLS on `contacts` table
    - Add policy to allow anyone to insert contact messages
    - Add policy to restrict read access to authenticated users only
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact messages"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);
