/*
# Admin Panel: add is_read column + tighten contact_messages RLS to admin-only

1. Schema Changes
- Add `is_read boolean NOT NULL DEFAULT false` to `contact_messages`.
  Used by the Admin Dashboard to track unread messages.

2. Security Changes (RLS)
- INSERT stays open to anon + authenticated (the public contact form still works).
- SELECT, UPDATE, DELETE are now restricted to the single authorized admin email
  (malikaffan67802@gmail.com). Any other authenticated user is denied.

3. Important Notes
- The email check uses auth.jwt() ->> 'email' so it reflects the signed-in user.
- Existing SELECT policy (authenticated, USING true) is dropped and replaced.
*/

ALTER TABLE contact_messages
  ADD COLUMN IF NOT EXISTS is_read boolean NOT NULL DEFAULT false;

-- INSERT: keep public (contact form)
DROP POLICY IF EXISTS "Anyone can insert contact messages" ON contact_messages;
CREATE POLICY "Anyone can insert contact messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- SELECT: admin only
DROP POLICY IF EXISTS "Only authenticated users can view contact messages" ON contact_messages;
DROP POLICY IF EXISTS "Admin can view contact messages" ON contact_messages;
CREATE POLICY "Admin can view contact messages"
  ON contact_messages FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'malikaffan67802@gmail.com');

-- UPDATE: admin only (mark as read)
DROP POLICY IF EXISTS "Admin can update contact messages" ON contact_messages;
CREATE POLICY "Admin can update contact messages"
  ON contact_messages FOR UPDATE
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'malikaffan67802@gmail.com')
  WITH CHECK (auth.jwt() ->> 'email' = 'malikaffan67802@gmail.com');

-- DELETE: admin only
DROP POLICY IF EXISTS "Admin can delete contact messages" ON contact_messages;
CREATE POLICY "Admin can delete contact messages"
  ON contact_messages FOR DELETE
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'malikaffan67802@gmail.com');
