'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      alert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/yourgithub',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/omparth-c-582b89245/',
    },
  ];

  return (
    <section id="contact" className="relative py-24 lg:pt-40 lg:pb-32 bg-transparent overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/20 backdrop-blur-md mb-4">
                <span className="text-xs font-mono tracking-widest text-purple-300 uppercase">
                  04 // Get In Touch
                </span>
              </div>

              <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-8">
                Let&apos;s build <br />
                <span className="text-gray-500 italic font-light">something.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-md">
                Currently open to new opportunities and interesting projects. Feel free to reach out for a collaboration or just a friendly hello.
              </p>
            </motion.div>

            <div className="space-y-6">
              <a 
                href="mailto:omparthc@gmail.com"
                className="group flex items-center gap-4 text-white text-xl font-medium hover:text-purple-300 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500 group-hover:border-purple-400 transition-all">
                  <Mail size={20} className="text-purple-300 group-hover:text-white transition-colors" />
                </div>
                omparthc@gmail.com
                <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-purple-400" />
              </a>

              <div className="flex gap-4 pt-4">
                {socials.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      whileHover={{ y: -5 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md flex items-center justify-center text-gray-400 hover:text-purple-300 hover:border-purple-500/40 hover:bg-white/[0.05] transition-all shadow-xl"
                    >
                      <Icon size={22} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side: Modern Glassmorphic Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-purple-300/70 ml-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/15 py-4 px-1 text-white focus:outline-none focus:border-purple-400 transition-colors placeholder:text-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-purple-300/70 ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/15 py-4 px-1 text-white focus:outline-none focus:border-purple-400 transition-colors placeholder:text-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-purple-300/70 ml-1">Your Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/15 py-4 px-1 text-white focus:outline-none focus:border-purple-400 transition-colors resize-none placeholder:text-gray-600"
                  placeholder="What's on your mind?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-2xl font-bold overflow-hidden transition-all active:scale-95 disabled:opacity-50 shadow-lg hover:shadow-purple-500/20"
              >
                <span className="relative z-10 flex items-center gap-3 text-base">
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-purple-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}