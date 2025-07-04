/*
  # Remove blog type from posts table

  1. Changes
    - Remove 'type' column from posts table since we only need news announcements
    - Update existing data to remove blog posts
    - Keep RLS policies unchanged

  2. Security
    - RLS policies remain in place
    - Public read access maintained
    - Authenticated users can still manage posts
*/

-- First, delete all blog posts as we're moving to news-only
DELETE FROM posts WHERE type = 'blog';

-- Then remove the type column and its check constraint
ALTER TABLE posts DROP COLUMN type;

-- Note: Existing RLS policies are still valid and don't need modification
-- since they weren't dependent on the type column