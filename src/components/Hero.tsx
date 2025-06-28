
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import TypingAnimation from '@/components/TypingAnimation';
import SkillsGlobe from '@/components/SkillsGlobe';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const roles = [
    "Student",
    "Full Stack Developer"
    // "Quant Developer"
  ];

  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'JavaScript', 'CSS', 'HTML', 
    'PostgreSQL', 'Docker', 'AWS', 'Git', 'Next.js', 'Vue.js', 'Tailwind', 'Redis', 'FastAPI', 'Flask',
    'Pandas', 'Numpy', 'MySql','Bootstrap', 'C', 'C++', 'Android', 'Java', '.Net Core', 'Angular'
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Terminal-style background */}
      <div className="absolute inset-0 bg-background transition-colors duration-500">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              hsl(var(--foreground)) 2px,
              hsl(var(--foreground)) 4px
            )`
          }}></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Left side - Terminal content */}
        <motion.div 
          className="text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Terminal prompt */}
          <div className="mb-8 font-mono text-green-700">
            <span className="text-blue-400">user@portfolio</span>
            <span className="text-gray-800 dark:text-white">:</span>
            <span className="text-purple-400">~</span>
            <span className="text-gray-800 dark:text-white">$ whoami</span>
          </div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold font-mono mb-6 text-green-700 dark:text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Bhagirathsinh Rathod
          </motion.h1>

          {/* Dynamic typing animation */}
          <div className="mb-8 font-mono">
            <span className="text-blue-400">user@portfolio</span>
            <span className="text-gray-800 dark:text-white">:</span>
            <span className="text-purple-400">~</span>
            <span className="text-gray-800 dark:text-white">$ echo "</span>
            <span className="text-xl md:text-2xl text-yellow-500 dark:text-yellow-400">
              I am a <TypingAnimation texts={roles} />
            </span>
            <span className="text-gray-800 dark:text-white">"</span>
          </div>

          <motion.p 
            className="text-lg text-gray-700 dark:text-gray-500 mb-12 max-w-2xl font-mono leading-relaxed whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="text-green-700"># </span>
            Passionate about creating innovative solutions with modern technologies.
            <br />
            <span className="text-green-700"># </span>
            Building scalable applications that make a difference.
          </motion.p>

          {/* Terminal-style social links */}
          <motion.div 
            className="flex flex-wrap gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="font-mono border-green-500 text-green-700 hover:bg-green-500 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
              onClick={() => window.open('https://github.com/t3chwiz4rd', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              ./github
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-mono border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              onClick={() => window.open('https://www.linkedin.com/in/bhagirathsinh-rathod-646810203/', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              ./linkedin
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-mono border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              onClick={() => window.open('mailto:developwithbhagirathsinh@gmail.com', '_blank')}
            >
              <Mail className="w-5 h-5 mr-2" />
              ./contact
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Button
              variant="ghost"
              onClick={() => scrollToSection('skills')}
              className="font-mono text-green-700 hover:bg-green-500/10 rounded-none border border-green-500/30"
            >
              <ArrowDown className="w-6 h-6 mr-2" />
              scroll --down
            </Button>
          </motion.div>
        </motion.div>

        {/* Right side - 3D Skills Globe */}
        <motion.div 
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative">
            <div className="terminal-section">
              {/* <div className="terminal-command mb-4 text-green-700">
                $ ls skills/
              </div> */}
              <SkillsGlobe skills={skills} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
