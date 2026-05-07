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
  
        setFormData({
          name: '',
          email: '',
          message: '',
        });
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
    <section id="contact" className="relative py-24 lg:pt-40 lg:pb-32 bg-[#030712] overflow-hidden">
      {/* Background Gradient Blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-indigo-500 font-mono text-sm uppercase tracking-[0.3em] mb-4 block">Get in touch</span>
              <h2 className="text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-8">
                Let&apos;s build <br />
                <span className="text-gray-600">something.</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed max-w-md">
                Currently open to new opportunities and interesting projects. Feel free to reach out for a collaboration or just a friendly hello.
              </p>
            </motion.div>

            <div className="space-y-6">
              <a 
href="mailto:omparthc@gmail.com"
                className="group flex items-center gap-4 text-white text-xl font-medium hover:text-indigo-400 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/10 transition-colors border border-white/10 group-hover:border-indigo-500/30">
                  <Mail size={20} className="text-gray-400 group-hover:text-indigo-400" />
                </div>
                omparthc@gmail.com
                <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>

              <div className="flex gap-4 pt-4">
                {socials.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      whileHover={{ y: -5 }}
                      href={social.href}
                      className="w-14 h-14 rounded-2xl border border-gray-800 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-all"
                    >
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side: Modern Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#0a0f1d] border border-gray-800 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden"
          >
            {/* Subtle Noise Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-gray-500 ml-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-800 py-4 px-1 text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-700"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-800 py-4 px-1 text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-700"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-gray-500 ml-1">Your Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-gray-800 py-4 px-1 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none placeholder:text-gray-700"
                  placeholder="What's on your mind?"
                />
              </div>

              <button
  type="submit"
  disabled={loading}
  className="group relative flex items-center gap-3 px-10 py-5 bg-white text-black rounded-2xl font-bold overflow-hidden transition-all active:scale-95 disabled:opacity-50"
>
  <span className="relative z-10 flex items-center gap-3 text-lg">
    {loading ? 'Sending...' : 'Send Message'}

    <Send
      size={20}
      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
    />
  </span>

  <div className="absolute inset-0 bg-indigo-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}