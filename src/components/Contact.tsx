import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Valid email is required';
    if (!formData.message.trim()) return 'Message is required';
    if (formData.message.trim().length < 10) return 'Message must be at least 10 characters';
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);

    try {
      const { error: insertError } = await supabase.from('contacts').insert([
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
      ]);

      if (insertError) throw insertError;

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-cyan-600 font-semibold mb-2">04 — CONTACT</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Let's work together
          </h2>
          <p className="text-lg text-gray-600">
            I'm always interested in new opportunities, collaborations, and conversations about technology,
            AI, and software engineering. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <a
                    href="mailto:malikaffan67802@gmail.com"
                    className="text-gray-600 hover:text-cyan-600 transition-colors"
                  >
                    malikaffan67802@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <a
                    href="tel:+917500786039"
                    className="text-gray-600 hover:text-cyan-600 transition-colors"
                  >
                    +91 7500786039
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">Roorkee, Uttarakhand, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 p-3 rounded-lg">
                  <Linkedin className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/muhammad-affan-25aa533fb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-cyan-600 transition-colors"
                  >
                    muhammad-affan-25aa533fb
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 p-3 rounded-lg">
                  <Github className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">GitHub</h3>
                  <a
                    href="https://github.com/MUHAMMADAFFAN786"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-cyan-600 transition-colors"
                  >
                    MUHAMMADAFFAN786
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200">
              <h3 className="font-bold text-gray-900 mb-2">Available for opportunities</h3>
              <p className="text-gray-700">Actively seeking internships and collaborations</p>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send a quick message</h3>
              <p className="text-gray-600 mb-6">
                Or email me directly at{' '}
                <a
                  href="mailto:malikaffan67802@gmail.com"
                  className="text-cyan-600 hover:underline"
                >
                  malikaffan67802@gmail.com
                </a>
              </p>

              {isSubmitted ? (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                    <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <Send size={20} />
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
