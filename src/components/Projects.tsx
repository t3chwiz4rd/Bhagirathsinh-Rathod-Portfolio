
import { ExternalLink, Github, Star, GitFork, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "AlgoPilot - Algorithmic Trading System",
      description:
        "Deployed a live algorithmic options trading bot with real-time data via WebSocket, order placement using Broker API, and multi-threaded execution. Planned features include a dashboard, ML strategy tuning, and failure recovery.",
      image: "https://img.icons8.com/ios-filled/200/camera--v1.png",
      technologies: ["Python", "Flask", "WebSockets", "Multi-threading", "Broker API", "Pandas", "NumPy", "Matplotlib"],
      githubUrl: "",
      liveUrl: "",
      stars: 0,
      forks: 0,
      command: "algopilot"
    },
    {
      title: "AudioVerse - Music Managing App",
      description:
        "Role-based music manager app with Flask backend and Vue.js frontend. Integrated JWT authentication, SQLAlchemy ORM, Celery for async tasks, and SQLite for data handling.",
      image: "https://img.icons8.com/ios-filled/200/camera--v1.png",
      technologies: ["Python", "Flask", "Vue.js", "SQLAlchemy", "JWT", "Celery", "HTML", "CSS"],
      githubUrl: "",
      liveUrl: "",
      stars: 0,
      forks: 0,
      command: "audioverse"
    },
    {
      title: "QRAttendance",
      description:
        "Android app for QR-based attendance. Utilized Firebase for real-time DB, ZXing for scanning, and implemented backend logic with secure cloud data management.",
      image: "https://img.icons8.com/ios-filled/200/camera--v1.png",
      technologies: ["Android", "Java", "Firebase", "ZXing", "XML"],
      githubUrl: "",
      liveUrl: "",
      stars: 0,
      forks: 0,
      command: "qr_attendance"
    },
    {
      title: "System Threat Forecaster",
      description:
        "ML-based system threat prediction tool. Performed EDA and modeling on system configs and antivirus data using Scikit-learn, Pandas, and Seaborn. Implemented baseline models for benchmark comparison.",
      image: "https://img.icons8.com/ios-filled/200/camera--v1.png",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      githubUrl: "",
      liveUrl: "",
      stars: 0,
      forks: 0,
      command: "system_threat_forecaster"
    }
  ];


  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProj = projects[currentProject];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Terminal header */}
        <div className="terminal-section mb-16">
          {/* <div className="terminal-command text-2xl mb-4">
            $ ls -la ~/projects/
          </div> */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 font-mono text-green-700 dark:text-green-400">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-mono">
              <span className="text-green-700"># </span>
              Recent work and contributions to the developer community
            </p>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-blue-500/20 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black font-mono"
            size="icon"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-blue-500/20 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black font-mono"
            size="icon"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Project Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="mx-16"
            >
              <Card className="overflow-hidden border-2 border-purple-500/30 bg-white/80 dark:bg-background/80 backdrop-blur-sm hover:border-purple-500 transition-all duration-300 glassmorphism">
                {/* Terminal prompt */}
                {/* <div className="p-4 border-b border-purple-500/30 font-mono text-purple-500 text-sm">
                  $ cat projects/{currentProj.command}.json
                </div> */}

                <div className="relative overflow-hidden">
                  <img 
                    src={currentProj.image} 
                    alt={currentProj.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    <Button
                      size="sm"
                      onClick={() => window.open(currentProj.githubUrl, '_blank')}
                      className="bg-green-500/20 border border-green-500 text-green-700 hover:bg-green-500 hover:text-black font-mono"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      source
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => window.open(currentProj.liveUrl, '_blank')}
                      className="bg-blue-500/20 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black font-mono"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      demo
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl font-mono text-purple-400">
                      {currentProj.title}
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 font-mono">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-400" />
                        {currentProj.stars}
                      </div>
                      <div className="flex items-center">
                        <GitFork className="w-4 h-4 mr-1 text-blue-400" />
                        {currentProj.forks}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 font-mono leading-relaxed">
                    {currentProj.description}
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-yellow-400 font-mono text-sm mb-2">tech_stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {currentProj.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          // className="bg-gray-100 dark:bg-gray-800/50 text-gray-500 dark:text-gray-300 border border-gray-400 dark:border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 font-mono"
                          className="inline-block px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800/50 dark:text-gray-500 border border-gray-300 dark:border-cyan-500/30 hover:text-cyan-600 hover:border-cyan-600 hover:bg-cyan-100 dark:hover:text-cyan-400 dark:hover:border-cyan-400 dark:hover:bg-cyan-500/10 font-mono transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  index === currentProject
                    ? 'bg-purple-500 border-purple-500'
                    : 'bg-transparent border-purple-500/30 hover:border-purple-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
