/*
  # Create posts table for news and blog entries

  1. New Tables
    - `posts`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `title` (text)
      - `content` (text)
      - `type` (text) - either 'news' or 'blog'
      - `slug` (text) - URL-friendly version of the title
  2. Security
    - Enable RLS on `posts` table
    - Add policies for:
      - Public read access
      - Authenticated users can create/update posts
*/

CREATE TABLE IF NOT EXISTS posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  title text NOT NULL,
  content text NOT NULL,
  type text NOT NULL CHECK (type IN ('news', 'blog')),
  slug text UNIQUE NOT NULL
);

ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Posts are viewable by everyone"
  ON posts
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to create posts
CREATE POLICY "Authenticated users can create posts"
  ON posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to update posts
CREATE POLICY "Authenticated users can update posts"
  ON posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);