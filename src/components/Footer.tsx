
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-green-500/30 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        {/* Terminal prompt */}
        <div className="terminal-command text-center mb-8">
          $ echo "Thanks for visiting my portfolio!"
        </div>
        
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-4 md:mb-0">
            <Terminal className="w-6 h-6 text-green-700 mr-3" />
            <span className="font-mono text-gray-500 dark:text-gray-300">
              © 2025 Bhagirathsinh Rathod. All rights reserved.
            </span>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-700 transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:john@example.com"
              className="text-gray-500 hover:text-purple-600 transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
        
        {/* <div className="mt-8 text-center">
          <p className="font-mono text-gray-500 text-sm">
            <span className="text-green-700">$ </span>
            Built with React, Three.js, Framer Motion & lots of ☕
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
