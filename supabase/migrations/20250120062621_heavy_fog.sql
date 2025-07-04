/*
  # Create staff user role and permissions

  1. Changes
    - Create a custom role for staff users
    - Grant necessary permissions for staff role
*/

-- Create a custom role for staff users
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT FROM pg_catalog.pg_roles WHERE rolname = 'staff'
  ) THEN
    CREATE ROLE staff;
  END IF;
END $$;

-- Grant necessary permissions to staff role
GRANT USAGE ON SCHEMA public TO staff;
GRANT ALL ON TABLE posts TO staff;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO staff;

-- Ensure RLS is enabled
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Update RLS policies to include staff role
CREATE POLICY "Staff can manage all posts"
  ON posts
  FOR ALL
  TO staff
  USING (true)
  WITH CHECK (true);