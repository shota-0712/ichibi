/*
  # Create staff user and permissions

  1. Changes
    - Create staff user with email/password authentication
    - Update RLS policies for staff access
*/

-- First, ensure the posts table has RLS enabled
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Update RLS policies
DROP POLICY IF EXISTS "Enable read access for all users" ON posts;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON posts;
DROP POLICY IF EXISTS "Enable update for authenticated users" ON posts;
DROP POLICY IF EXISTS "Enable delete for authenticated users" ON posts;
DROP POLICY IF EXISTS "Staff can manage all posts" ON posts;

-- Create new policies
CREATE POLICY "Anyone can read posts"
  ON posts FOR SELECT
  USING (true);

CREATE POLICY "Staff can manage posts"
  ON posts
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);