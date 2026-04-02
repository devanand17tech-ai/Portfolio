import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'NextHire Job Portal',
      date: "Jan '26",
      description: 'A scalable full-stack job portal connecting job seekers and recruiters with a seamless end-to-end workflow.',
      features: [
        'Implemented Role-Based Access Control (RBAC) securely for distinct Admin and User workflows.',
        'Developed robust RESTful APIs to handle job posting, application, and tracking efficiently.',
        'Engineered the full-stack architecture coupling a Spring Boot backend with a React frontend.',
        'Optimized backend performance using Hibernate/JPA for complex queries and database design.'
      ],
      techStack: ['Java', 'Spring Boot', 'Spring Security', 'React.js', 'PostgreSQL', 'Tailwind CSS'],
      github: 'https://github.com/devanand17tech-ai',
      highlight: true
    },
    {
      title: 'University Event Management System',
      date: "Mar '26",
      description: 'A full-stack web application designed for managing university events, featuring distinct admin and student portals.',
      features: [
        'Designed comprehensive event registration system, including capacity tracking and "My Events" dashboards.',
        'Orchestrated advanced CRUD operations heavily depending on Many-to-Many relationships using JPA.',
        'Integrated responsive front-end components with secure backend services via REST APIs.',
        'Enforced secure role-based operations and dynamic UI feedback leveraging Spring Security and Tailwind.'
      ],
      techStack: ['Java', 'Spring Boot', 'Hibernate/JPA', 'React.js', 'MySQL', 'Tailwind CSS'],
      github: 'https://github.com/devanand17tech-ai',
      highlight: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group bg-surface rounded-2xl border border-white/5 overflow-hidden flex flex-col hover:border-primary/50 transition-colors"
            >
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm font-medium text-text/60 bg-background px-3 py-1 rounded-full">
                    {project.date}
                  </span>
                </div>
                
                <p className="text-text/80 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-text/70 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-xs font-medium text-text/90 bg-background border border-white/10 px-3 py-1.5 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-8 py-5 bg-background/50 border-t border-white/5 flex gap-4">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-sm font-medium text-white bg-surface hover:bg-primary hover:text-white border border-white/10 px-4 py-2 rounded-lg transition-all"
                >
                  <FaGithub size={16} />
                  Code Repository
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
