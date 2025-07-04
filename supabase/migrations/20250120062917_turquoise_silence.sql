/*
  # Fix staff authentication and policies

  1. Changes
    - Update RLS policies for posts table
    - Add policies for authenticated staff access
*/

-- First, ensure the posts table has RLS enabled
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Anyone can read posts" ON posts;
DROP POLICY IF EXISTS "Staff can manage posts" ON posts;

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

-- Note: Staff user creation is handled through the Supabase dashboard
-- or the Auth API, not through SQL migrations