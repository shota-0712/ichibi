/*
  # Fix posts table RLS policies

  1. Changes
    - Drop existing RLS policies
    - Create new, more permissive policies for authenticated users
    - Maintain public read access

  2. Security
    - Enable RLS on posts table
    - Allow authenticated users full CRUD access
    - Allow public read access
*/

-- First, drop existing policies
DROP POLICY IF EXISTS "Posts are viewable by everyone" ON posts;
DROP POLICY IF EXISTS "Authenticated users can create posts" ON posts;
DROP POLICY IF EXISTS "Authenticated users can update posts" ON posts;

-- Create new policies
CREATE POLICY "Enable read access for all users"
  ON posts FOR SELECT
  USING (true);

CREATE POLICY "Enable insert for authenticated users"
  ON posts FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users"
  ON posts FOR UPDATE
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable delete for authenticated users"
  ON posts FOR DELETE
  USING (auth.role() = 'authenticated');