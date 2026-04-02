import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50 -z-10"></div>
      
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
            Welcome to my portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Devanand</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-medium text-text/90 mb-6">
            Java Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-text/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Java Full Stack Developer focused on building scalable and secure web applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors"
          >
            View Projects
            <ArrowRight size={18} />
          </a>
          <a
            href="/Devanand_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-surface text-white border border-white/10 px-8 py-3 rounded-full font-medium hover:bg-surface/80 transition-colors"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          <a href="https://github.com/devanand17tech-ai" target="_blank" rel="noopener noreferrer" className="text-text/60 hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <FaGithub size={24} />
          </a>
          <a href="www.linkedin.com/in/devanand-cse" target="_blank" rel="noopener noreferrer" className="text-text/60 hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
