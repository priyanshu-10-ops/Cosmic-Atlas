import { useCallback, useEffect, useState } from 'react';
import { supabase } from './supabase';

const STORAGE_KEY = 'cosmic-atlas:quiz-scores';

function readLocal(): Record<string, number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, number>) : {};
  } catch {
    return {};
  }
}

export function useQuizScores() {
  const [scores, setScores] = useState<Record<string, number>>(() => readLocal());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
    } catch {
      /* ignore */
    }
  }, [scores]);

  const recordScore = useCallback((quizId: string, scorePct: number) => {
    setScores((prev) => {
      const existing = prev[quizId] ?? 0;
      const best = Math.max(existing, scorePct);
      if (best === existing && existing > 0) return prev;
      return { ...prev, [quizId]: best };
    });
    void syncScoreToSupabase(quizId, scorePct);
  }, []);

  return { scores, recordScore };
}

async function syncScoreToSupabase(quizId: string, scorePct: number) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    await supabase.from('quiz_scores').upsert(
      { user_id: user.id, quiz_id: quizId, score_pct: scorePct },
      { onConflict: 'user_id,quiz_id' }
    );
  } catch {
    /* silent */
  }
}
