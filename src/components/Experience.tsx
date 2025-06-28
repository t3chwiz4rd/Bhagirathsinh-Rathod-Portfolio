
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: "NetWeb Software",
      role: "Software Engineer",
      duration: "July 2024 - Present",
      location: "Vadodara, Gujarat",
      responsibilities: [
        "Working on a UK-based healthcare application for bed management, referrals, invoices, and reporting.",
        "Contributing to both frontend (React) and backend (.NET) development.",
        "Creating APIs, developing stored procedures, and integrating APIs into the frontend interface."
      ]
    },
    {
      company: "NetWeb Software",
      role: "Software Engineer Trainee - Intern",
      duration: "January 2024 - June 2024",
      location: "Vadodara, Gujarat",
      responsibilities: [
        "Trained in .NET Core, FastAPI (Python), Next.js, Angular, and Power Automate.",
        "Developed a Proof of Concept (POC) for a hospital management system using FastAPI and Next.js with two other interns."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Terminal header */}
        <div className="terminal-section mb-16">
          {/* <div className="terminal-command text-2xl mb-4">
            $ history | grep "work_experience"
          </div> */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 font-mono text-green-400">
              Work Experience
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-mono">
              <span className="text-green-700"># </span>
              Professional journey and achievements
            </p>
          </motion.div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Terminal line indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
              
              <div className="ml-8 p-6 bg-white/80 dark:bg-background/80 backdrop-blur-sm border border-blue-500/30 rounded-lg glassmorphism hover:border-blue-500 transition-all duration-300">
                {/* Terminal prompt */}
                {/* <div className="font-mono text-blue-500 text-sm mb-3">
                  $ cat work/{exp.company.toLowerCase().replace(/[^a-z0-9]/g, '_')}.json
                </div> */}
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Briefcase className="w-6 h-6 text-blue-500 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold font-mono text-blue-400">
                        {exp.company}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 font-mono">{exp.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-green-400 font-mono mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center text-purple-400 font-mono">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-gray-500 font-mono text-sm mb-3">
                    <span className="text-yellow-400">achievements:</span>
                  </p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start text-gray-700 dark:text-gray-300 font-mono text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + (idx * 0.1), duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <ChevronRight className="w-4 h-4 text-green-700 mr-2 mt-0.5 shrink-0" />
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
