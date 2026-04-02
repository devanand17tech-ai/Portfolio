import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-text/80 leading-relaxed mb-6">
              I am a passionate <strong>Java Full Stack Developer</strong> currently pursuing my Bachelor of Technology in Computer Science and Engineering at Lovely Professional University. I have a strong foundation in building scalable, secure, and intuitive web applications.
            </p>
            <p className="text-lg text-text/80 leading-relaxed">
              With expertise in both frontend and backend technologies—particularly Spring Boot, React.js, and SQL databases—I enjoy tackling complex architectural problems. I am driven by competitive programming, continuous learning, and crafting seamless user experiences from concept to deployment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-surface p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
              <Code2 className="text-primary mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Backend Development</h3>
              <p className="text-sm text-text/70">Building robust REST APIs and scalable architectures using Java and Spring Boot.</p>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
              <Layout className="text-primary mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Frontend Development</h3>
              <p className="text-sm text-text/70">Creating responsive and dynamic user interfaces with React.js and Tailwind CSS.</p>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-colors sm:col-span-2">
              <Database className="text-primary mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Database & Security</h3>
              <p className="text-sm text-text/70">Implementing secure RBAC systems, JWT authentication, and efficient database designs with Hibernate/JPA.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
