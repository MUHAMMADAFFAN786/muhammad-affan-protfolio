import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, Loader2, ArrowLeft, ShieldCheck, AlertCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { ADMIN_EMAIL } from '../../lib/auth';

interface Props {
  onSuccess: () => void;
  onBack: () => void;
  denied: boolean;
}

const AdminLogin = ({ onSuccess, onBack, denied }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;

      if (email !== ADMIN_EMAIL) {
        await supabase.auth.signOut();
        setError('Access denied. This admin panel is restricted.');
        setLoading(false);
        return;
      }

      onSuccess();
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Login failed';
      setError(msg.includes('Invalid login') ? 'Invalid email or password.' : msg);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-ink-900 flex items-center justify-center px-4 py-12">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-strong rounded-[20px] p-8 sm:p-10 shadow-soft w-full max-w-md relative z-10"
      >
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm mb-6 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </button>

        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-blue mb-4">
            <ShieldCheck className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Admin Access</h1>
          <p className="text-slate-400 text-sm mt-1.5">Sign in to manage contact messages</p>
        </div>

        {(error || denied) && (
          <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl mb-5">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-red-300 text-sm">{denied ? 'Access Denied' : error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
                className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="admin@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3.5 rounded-xl font-semibold hover:shadow-glow transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <><Loader2 size={18} className="animate-spin" /> Signing in...</>
            ) : (
              <>Sign In</>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
