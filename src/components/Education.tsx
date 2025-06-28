
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      institution: "Navrachana University, Vadodara",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "October 2020 - June 2024",
      cgpa: "8.7/10",
      coursework: [
        "Linear Algebra and Calculus",
        "Discrete Mathematics",
        "Engineering Mathematics",
        "Computer Programming",
        "Problem Solving Using Python",
        "Web Design and Development",
        "Object-Oriented Programming",
        "Mobile Application Development",
        "Software Engineering",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Cloud Computing"
      ]
    },
    {
      institution: "Indian Institute of Technology Madras (Online)",
      degree: "Diploma in Programming and Data Science",
      duration: "January 2021 - Present",
      cgpa: "6.64/10",
      coursework: [  "Mathematics for Data Science",
                    "Statistics for Data Science",
                    "Computational Thinking",
                    "English",
                    "Programming in Python",
                    "Database Management Systems",
                    "Programming, Data Structures and Algorithms using Python",
                    "Modern Application Development",
                    "Programming Concepts using Java",
                    "System Commands"
                  ]
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        {/* Terminal header */}
        <div className="terminal-section mb-16">
          {/* <div className="terminal-command text-2xl mb-4">
            $ grep -r "education" ~/profile/
          </div> */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 font-mono text-green-400">
              Education & Certifications
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-mono">
              <span className="text-green-700"># </span>
              Academic journey and continuous learning
            </p>
          </motion.div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Terminal line indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
              
              <div className="ml-8 p-6 bg-white/80 dark:bg-background/80 backdrop-blur-sm border border-green-500/30 rounded-lg glassmorphism hover:border-green-500 transition-all duration-300">
                {/* Terminal prompt */}
                {/* <div className="font-mono text-green-700 text-sm mb-3">
                  $ cat education/{edu.institution.toLowerCase().replace(/[^a-z0-9]/g, '_')}.txt
                </div> */}
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <GraduationCap className="w-6 h-6 text-green-700 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold font-mono text-green-400">
                        {edu.institution}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 font-mono">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-blue-400 font-mono mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center text-purple-400 font-mono">
                      <Award className="w-4 h-4 mr-2" />
                      {edu.cgpa}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-gray-500 font-mono text-sm mb-2">
                    <span className="text-yellow-400">coursework:</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800/50 dark:text-gray-500 border border-blue-500/30 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 dark:hover:border-blue-400 dark:hover:bg-blue-500/10 rounded font-mono text-sm transition-all duration-300">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
