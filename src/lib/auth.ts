import { useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from './supabase';

export const ADMIN_EMAIL = 'malikaffan67802@gmail.com';

export function useAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    let mounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      const sess = data.session;
      if (sess?.user?.email && sess.user.email !== ADMIN_EMAIL) {
        supabase.auth.signOut();
        setDenied(true);
      } else {
        setSession(sess);
      }
      setLoading(false);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, sess) => {
      if (!mounted) return;
      if (sess?.user?.email && sess.user.email !== ADMIN_EMAIL) {
        supabase.auth.signOut();
        setDenied(true);
        setSession(null);
      } else {
        setDenied(false);
        setSession(sess);
      }
    });

    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  const isAdmin = !!session?.user?.email && session.user.email === ADMIN_EMAIL;

  return { session, loading, isAdmin, denied };
}
