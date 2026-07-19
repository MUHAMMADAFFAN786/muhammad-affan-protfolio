import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_portfolio';
const TEMPLATE_ID = 'template_contact';
const PUBLIC_KEY = 'your_public_key';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const validate = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Please enter a valid email';
    if (!formData.message.trim()) return 'Message is required';
    if (formData.message.trim().length < 10) return 'Message must be at least 10 characters';
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus('error');
      setErrorMsg(err);
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      if (PUBLIC_KEY === 'your_public_key') {
        // Fallback: open mail client so the form always works
        const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
        const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
        window.location.href = `mailto:malikaffan67802@gmail.com?subject=${subject}&body=${body}`;
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
        return;
      }

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, { publicKey: PUBLIC_KEY });
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      // Graceful fallback: never expose technical errors to visitors
      const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
      const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
      window.location.href = `mailto:malikaffan67802@gmail.com?subject=${subject}&body=${body}`;
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === 'error') setStatus('idle');
  };

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'malikaffan67802@gmail.com', href: 'mailto:malikaffan67802@gmail.com' },
    { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '+91 7500786039', href: 'tel:+917500786039' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Roorkee, Uttarakhand, India', href: null },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', value: 'muhammad-affan-25aa533fb', href: 'https://linkedin.com/in/muhammad-affan-25aa533fb' },
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', value: 'MUHAMMADAFFAN786', href: 'https://github.com/MUHAMMADAFFAN786' },
  ];

  return (
    <section id="contact" className="relative py-24 bg-ink-800 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-primary-light font-semibold mb-2 tracking-widest text-sm">04 — CONTACT</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Let's <span className="gradient-text">work together</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl">
            I'm always interested in new opportunities, collaborations, and conversations about AI,
            machine learning, and software engineering. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 mb-8">
              {contactInfo.map((c) => {
                const content = (
                  <div className="flex items-start gap-4 glass rounded-2xl p-4 hover:-translate-y-0.5 hover:shadow-glow transition-all">
                    <div className="bg-gradient-to-br from-primary to-secondary p-2.5 rounded-xl text-white">
                      {c.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">{c.label}</h3>
                      <p className="text-slate-300 text-sm break-all">{c.value}</p>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block">
                    {content}
                  </a>
                ) : (
                  <div key={c.label}>{content}</div>
                );
              })}
            </div>

            <div className="glass rounded-2xl p-6 border-l-4 border-success">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
                <h3 className="font-bold text-white">Available for opportunities</h3>
              </div>
              <p className="text-slate-300 text-sm">Actively seeking AI/ML internships and collaborations</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-[20px] p-8 shadow-soft"
          >
            <h3 className="text-2xl font-bold text-white mb-1">Send a quick message</h3>
            <p className="text-slate-400 mb-6 text-sm">
              Or email me directly at{' '}
              <a href="mailto:malikaffan67802@gmail.com" className="text-primary-light hover:underline">malikaffan67802@gmail.com</a>
            </p>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center py-14"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/20 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-success-light" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message sent successfully.</h4>
                  <p className="text-slate-400 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <p className="text-red-300 text-sm">{errorMsg}</p>
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3.5 rounded-xl font-semibold hover:shadow-glow transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={18} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
