import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Trophy } from 'lucide-react';

const Certifications = () => {
  const sections = [
    {
      title: "Training",
      icon: <BookOpen className="text-primary mb-4" size={28} />,
      items: [
        {
          name: "Java Developer Core to Advance",
          issuer: "Board-Infinity",
          date: "Jun '25 - Jul '25",
          desc: "Intensive training covering OOPs, multi-threading, Spring Boot RESTful design, MongoDB, and secure JWT authentication."
        }
      ]
    },
    {
      title: "Certifications",
      icon: <Award className="text-primary mb-4" size={28} />,
      items: [
        {
          name: "Master Generative AI & Generative AI tools",
          issuer: "Udemy",
          date: "Aug '25",
          desc: "Comprehensive coursework on modern Generative AI tooling and ChatGPT applications."
        },
        {
          name: "Build Generative AI Apps with No Code Tools",
          issuer: "Udemy",
          date: "Aug '25",
          desc: "Creation of AI-driven solutions without traditional coding methodologies."
        }
      ]
    },
    {
      title: "Achievements",
      icon: <Trophy className="text-primary mb-4" size={28} />,
      items: [
        {
          name: "100 Days Badge 2025 - Competitive Programming",
          issuer: "Coding Practice",
          date: "Jul '25",
          desc: "Consistency excellence: solved algorithmic and data structure challenges for 100+ consecutive days."
        },
        {
          name: "6th Position - Build Thon Hackathon",
          issuer: "Apna College LPU",
          date: "Apr '24",
          desc: "Collaborated on team design and implemented an innovative tech solution in a competitive environment."
        }
      ]
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Training & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-surface p-8 rounded-2xl border border-white/5"
            >
              {section.icon}
              <h3 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-white/10">{section.title}</h3>
              
              <div className="space-y-8">
                {section.items.map((item, i) => (
                  <div key={i} className="relative pl-4 border-l-2 border-primary/30">
                    <div className="absolute w-2 h-2 bg-primary rounded-full -left-[5px] top-2"></div>
                    <h4 className="text-lg font-semibold text-white leading-tight mb-1">{item.name}</h4>
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className="text-primary font-medium">{item.issuer}</span>
                      <span className="text-text/50">{item.date}</span>
                    </div>
                    <p className="text-sm text-text/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
