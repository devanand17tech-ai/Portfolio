import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <footer id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 center w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-lg text-text/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            I am currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=devanand17.tech@gmail.com&su=Contact+from+Portfolio&body=Hi+Devanand,+I+saw+your+portfolio+and+would+like+to+connect+with+you." 
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-blue-600 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 mb-16 text-lg"
          >
            <Mail size={20} />
            Say Hello
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 bg-surface p-6 rounded-2xl border border-white/5"
          >
            <div className="bg-primary/20 p-3 rounded-full text-primary">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm text-text/60">Email</p>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=devanand17.tech@gmail.com&su=Contact+from+Portfolio&body=Hi+Devanand,+I+saw+your+portfolio+and+would+like+to+connect+with+you." target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary font-medium transition-colors text-sm sm:text-base break-all">devanand17.tech@gmail.com</a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4 bg-surface p-6 rounded-2xl border border-white/5"
          >
            <div className="bg-primary/20 p-3 rounded-full text-primary">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-sm text-text/60">Phone</p>
              <a href="tel:+918829824398" className="text-white hover:text-primary font-medium transition-colors">+91 8829824398</a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 bg-surface p-6 rounded-2xl border border-white/5"
          >
            <div className="bg-primary/20 p-3 rounded-full text-primary">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-sm text-text/60">Location</p>
              <p className="text-white font-medium">India</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col items-center border-t border-white/10 pt-8"
        >
          <div className="flex gap-6 mb-6">
            <a href="https://github.com/devanand17tech-ai" target="_blank" rel="noopener noreferrer" className="text-text/60 hover:text-white transition-colors p-2 hover:bg-surface rounded-full">
              <span className="sr-only">GitHub</span>
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/devanand-cse" target="_blank" rel="noopener noreferrer" className="text-text/60 hover:text-white transition-colors p-2 hover:bg-surface rounded-full">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className="text-sm text-text/50">
            © {new Date().getFullYear()} Devanand. Designed and Built with React & Tailwind.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;
