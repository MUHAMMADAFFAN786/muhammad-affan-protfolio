import { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { ADMIN_EMAIL } from '../lib/auth';

const AdminButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let mounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      if (data.session?.user?.email === ADMIN_EMAIL) setShow(true);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, sess) => {
      if (!mounted) return;
      setShow(!!sess?.user?.email && sess.user.email === ADMIN_EMAIL);
    });

    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  if (!show) return null;

  return (
    <motion.button
      onClick={() => {
        window.location.hash = '/admin';
      }}
      aria-label="Admin Panel"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.1, duration: 0.4, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full glass-strong flex items-center justify-center shadow-soft border border-white/10 hover:border-primary/40 transition-colors group"
    >
      <Shield className="w-5 h-5 text-slate-300 group-hover:text-primary-light transition-colors" />
    </motion.button>
  );
};

export default AdminButton;
