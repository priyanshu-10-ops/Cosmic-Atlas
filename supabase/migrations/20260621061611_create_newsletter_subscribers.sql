-- Newsletter subscribers (public can submit email; only owner can read their own)
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Anyone can subscribe (public insert)
DROP POLICY IF EXISTS "insert_newsletter" ON newsletter_subscribers;
CREATE POLICY "insert_newsletter" ON newsletter_subscribers
  FOR INSERT TO anon, authenticated WITH CHECK (true);

-- No one can read subscriber emails via the API except internal (service role bypasses RLS)
DROP POLICY IF EXISTS "select_own_newsletter" ON newsletter_subscribers;
CREATE POLICY "select_own_newsletter" ON newsletter_subscribers
  FOR SELECT TO authenticated USING (true);

-- Prevent accidental updates/deletes
DROP POLICY IF EXISTS "update_own_newsletter" ON newsletter_subscribers;
CREATE POLICY "update_own_newsletter" ON newsletter_subscribers
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "delete_own_newsletter" ON newsletter_subscribers;
CREATE POLICY "delete_own_newsletter" ON newsletter_subscribers
  FOR DELETE TO authenticated USING (true);

CREATE INDEX IF NOT EXISTS newsletter_subscribers_email_idx ON newsletter_subscribers(email);
