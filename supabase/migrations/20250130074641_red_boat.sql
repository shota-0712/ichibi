/*
  # Initial Schema Setup for Ichimi Website

  1. New Tables
    - `reservations`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `date` (date)
      - `time` (time)
      - `name` (text)
      - `phone` (text)
      - `email` (text)
      - `guests` (integer)
      - `notes` (text)
      - `status` (text)
      - `user_id` (uuid, foreign key)

    - `menu_items`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `name` (text)
      - `description` (text)
      - `price` (integer)
      - `category` (text)
      - `allergens` (text[])
      - `available` (boolean)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users and public access
*/

-- Reservations Table
CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  date date NOT NULL,
  time time NOT NULL,
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  guests integer NOT NULL,
  notes text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  user_id uuid REFERENCES auth.users(id)
);

-- Menu Items Table
CREATE TABLE IF NOT EXISTS menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  description text,
  price integer NOT NULL,
  category text NOT NULL CHECK (category IN ('soba', 'set_meal', 'appetizer', 'sashimi', 'grilled', 'crepe', 'drink')),
  allergens text[],
  available boolean DEFAULT true
);

-- Enable RLS
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

-- Policies for reservations
CREATE POLICY "Users can view their own reservations"
  ON reservations
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create reservations"
  ON reservations
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own reservations"
  ON reservations
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Policies for menu items
CREATE POLICY "Anyone can view available menu items"
  ON menu_items
  FOR SELECT
  TO public
  USING (available = true);

CREATE POLICY "Staff can manage menu items"
  ON menu_items
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);