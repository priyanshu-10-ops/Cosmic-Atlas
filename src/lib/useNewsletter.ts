import { useCallback, useEffect, useState } from 'react';
import { supabase } from './supabase';

const STORAGE_KEY = 'cosmic-atlas:newsletter';

function readLocal(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

export function useNewsletter() {
  const [subscribed, setSubscribed] = useState<boolean>(() => readLocal());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(subscribed));
    } catch {
      /* ignore */
    }
  }, [subscribed]);

  const subscribe = useCallback(async (email: string) => {
    setLoading(true);
    try {
      await supabase.from('newsletter_subscribers').insert({ email });
    } catch {
      /* local state is source of truth for anonymous users */
    } finally {
      setSubscribed(true);
      setLoading(false);
    }
  }, []);

  return { subscribed, subscribe, loading };
}
