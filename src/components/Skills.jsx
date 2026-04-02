import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'JavaScript', 'SQL']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Spring Boot', 'Spring Security', 'Hibernate/JPA', 'React.js', 'Tailwind CSS']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Postman', 'Linux']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-surface p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
            >
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-4">
                {category.title}
              </h3>
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, index) => {
                  return (
                    <motion.span
                      key={index}
                      variants={itemVariants}
                      className="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-primary/20 text-white border border-primary/30 hover:bg-primary/30"
                    >
                      {skill}
                    </motion.span>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
