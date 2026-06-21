-- Per-user quiz scores
CREATE TABLE IF NOT EXISTS quiz_scores (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  quiz_id text NOT NULL,
  score_pct int NOT NULL CHECK (score_pct >= 0 AND score_pct <= 100),
  answered_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, quiz_id)
);

ALTER TABLE quiz_scores ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_scores" ON quiz_scores;
CREATE POLICY "select_own_scores" ON quiz_scores
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_scores" ON quiz_scores;
CREATE POLICY "insert_own_scores" ON quiz_scores
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_scores" ON quiz_scores;
CREATE POLICY "update_own_scores" ON quiz_scores
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_scores" ON quiz_scores;
CREATE POLICY "delete_own_scores" ON quiz_scores
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS quiz_scores_user_idx ON quiz_scores(user_id);
