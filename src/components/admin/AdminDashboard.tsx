import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Mail, Trash2, CheckCircle2, Circle, LogOut, ArrowLeft,
  Inbox, MailOpen, Loader2, X, Calendar, AlertCircle, RefreshCw,
} from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
  is_read: boolean;
}

interface Props {
  onLogout: () => void;
  onBack: () => void;
}

const AdminDashboard = ({ onLogout, onBack }: Props) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Message | null>(null);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const fetchMessages = useCallback(async () => {
    setLoading(true);
    setError('');
    const { data, error: err } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (err) {
      setError('Failed to load messages. Please try again.');
    } else {
      setMessages((data ?? []) as Message[]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const markAsRead = async (id: string) => {
    const { error: err } = await supabase
      .from('contact_messages')
      .update({ is_read: true })
      .eq('id', id);
    if (err) return;
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, is_read: true } : m)));
    setSelected((prev) => (prev && prev.id === id ? { ...prev, is_read: true } : prev));
  };

  const deleteMessage = async (id: string) => {
    const { error: err } = await supabase.from('contact_messages').delete().eq('id', id);
    if (err) return;
    setMessages((prev) => prev.filter((m) => m.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLogout();
  };

  const filtered = messages.filter((m) => {
    if (filter === 'unread' && m.is_read) return false;
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      m.name.toLowerCase().includes(q) ||
      m.email.toLowerCase().includes(q) ||
      m.subject.toLowerCase().includes(q) ||
      m.message.toLowerCase().includes(q)
    );
  });

  const unreadCount = messages.filter((m) => !m.is_read).length;

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: 'numeric', minute: '2-digit',
    });

  return (
    <div className="min-h-screen bg-ink-900">
      {/* Header */}
      <header className="glass-strong sticky top-0 z-30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <Inbox className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <h1 className="text-lg font-bold text-white tracking-tight truncate">Admin Dashboard</h1>
                <p className="text-xs text-slate-400 truncate">Contact Messages</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onBack}
                className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-white text-sm px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <ArrowLeft size={16} />
                Portfolio
              </button>
              <button
                onClick={fetchMessages}
                className="flex items-center gap-1.5 text-slate-300 hover:text-white text-sm px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Refresh"
              >
                <RefreshCw size={16} />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/30 text-red-300 hover:bg-red-500/20 text-sm px-3 py-2 rounded-lg transition-colors"
              >
                <LogOut size={16} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-5 sm:p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-primary/20 p-2.5 rounded-xl">
                <Mail className="w-5 h-5 text-primary-light" />
              </div>
              <span className="text-sm text-slate-400 font-medium">Total Messages</span>
            </div>
            <p className="text-3xl sm:text-4xl font-bold text-white">{messages.length}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-5 sm:p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-success/20 p-2.5 rounded-xl">
                <MailOpen className="w-5 h-5 text-success-light" />
              </div>
              <span className="text-sm text-slate-400 font-medium">Unread</span>
            </div>
            <p className="text-3xl sm:text-4xl font-bold text-white">{unreadCount}</p>
          </motion.div>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, subject, or message..."
              className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'glass text-slate-300 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                filter === 'unread'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'glass text-slate-300 hover:text-white'
              }`}
            >
              Unread
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl mb-6">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        )}

        {/* List */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-primary-light animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="glass rounded-2xl p-12 text-center">
            <Inbox className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-400">No messages found.</p>
          </div>
        ) : (
          <div className="space-y-3">
            <AnimatePresence>
              {filtered.map((msg) => (
                <motion.div
                  key={msg.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className={`glass rounded-2xl p-4 sm:p-5 hover:shadow-soft transition-all cursor-pointer ${
                    !msg.is_read ? 'border-l-4 border-l-primary' : ''
                  }`}
                  onClick={() => {
                    setSelected(msg);
                    if (!msg.is_read) markAsRead(msg.id);
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {msg.is_read ? (
                          <CheckCircle2 className="w-4 h-4 text-slate-500 flex-shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 text-primary-light flex-shrink-0" />
                        )}
                        <h3 className="font-semibold text-white truncate">{msg.subject}</h3>
                      </div>
                      <p className="text-sm text-slate-300 truncate">
                        <span className="font-medium">{msg.name}</span>
                        <span className="text-slate-500"> · {msg.email}</span>
                      </p>
                      <p className="text-sm text-slate-400 mt-1.5 line-clamp-2">{msg.message}</p>
                      <p className="text-xs text-slate-500 mt-2">{formatDate(msg.created_at)}</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteMessage(msg.id);
                      }}
                      className="flex-shrink-0 p-2 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                      aria-label="Delete message"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>

      {/* Message Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="glass-strong rounded-[20px] p-6 sm:p-8 shadow-soft w-full max-w-lg max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-3 mb-5">
                <h2 className="text-xl font-bold text-white pr-2">{selected.subject}</h2>
                <button
                  onClick={() => setSelected(null)}
                  className="flex-shrink-0 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">From</p>
                    <p className="text-white font-medium">{selected.name}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">Email</p>
                    <a href={`mailto:${selected.email}`} className="text-primary-light hover:underline break-all">
                      {selected.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">Date</p>
                    <p className="text-slate-300 flex items-center gap-1.5">
                      <Calendar size={13} className="text-slate-500" />
                      {formatDate(selected.created_at)}
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-slate-500 text-xs mb-2">Message</p>
                  <p className="text-slate-200 whitespace-pre-wrap leading-relaxed">{selected.message}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <a
                    href={`mailto:${selected.email}?subject=Re: ${encodeURIComponent(selected.subject)}`}
                    className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:shadow-glow transition-all"
                  >
                    <Mail size={16} />
                    Reply
                  </a>
                  {!selected.is_read && (
                    <button
                      onClick={() => markAsRead(selected.id)}
                      className="flex items-center gap-2 glass text-slate-200 hover:text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
                    >
                      <CheckCircle2 size={16} />
                      Mark as Read
                    </button>
                  )}
                  <button
                    onClick={() => {
                      deleteMessage(selected.id);
                    }}
                    className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-300 hover:bg-red-500/20 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
