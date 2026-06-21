import { useCallback, useEffect, useState } from 'react';
import { LEARNING_PATHS } from '../data/lessons';
import { supabase } from './supabase';

type LessonProgress = Record<string, string[]>; // pathId -> lessonIds

const STORAGE_KEY = 'cosmic-atlas:progress';

function readLocal(): LessonProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as LessonProgress) : {};
  } catch {
    return {};
  }
}

function writeLocal(data: LessonProgress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* ignore */
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<LessonProgress>(() => readLocal());

  useEffect(() => {
    writeLocal(progress);
  }, [progress]);

  const isComplete = useCallback(
    (pathId: string, lessonId: string) =>
      Boolean(progress[pathId]?.includes(lessonId)),
    [progress]
  );

  const completeLesson = useCallback((pathId: string, lessonId: string) => {
    setProgress((prev) => {
      const existing = prev[pathId] ?? [];
      if (existing.includes(lessonId)) return prev;
      return { ...prev, [pathId]: [...existing, lessonId] };
    });
    void syncToSupabase(pathId, lessonId);
  }, []);

  const completedCount = Object.values(progress).reduce((acc, arr) => acc + arr.length, 0);
  const totalLessons = LEARNING_PATHS.reduce((acc, p) => acc + p.lessons.length, 0);

  return { progress, isComplete, completeLesson, completedCount, totalLessons };
}

async function syncToSupabase(pathId: string, lessonId: string) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    await supabase.from('lesson_progress').upsert(
      { user_id: user.id, path_id: pathId, lesson_id: lessonId },
      { onConflict: 'user_id,path_id,lesson_id' }
    );
  } catch {
    /* silent: local storage is source of truth for anonymous */
  }
}
