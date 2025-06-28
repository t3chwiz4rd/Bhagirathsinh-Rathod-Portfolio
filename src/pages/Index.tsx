
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // const savedTheme = localStorage.getItem('theme');
    const savedTheme = 'dark'
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  // const toggleTheme = () => {
  //   const newTheme = !isDark;
  //   setIsDark(newTheme);
  //   localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  //   document.documentElement.classList.toggle('dark', newTheme);
  // };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'dark' : 'light'}`}>
      {/* Theme Toggle - Terminal Style */}
      {/* <div className="fixed top-6 right-6 z-50">
        <Button
          onClick={toggleTheme}
          className="font-mono bg-background/80 backdrop-blur-sm border-2 border-green-500/30 text-green-700 hover:bg-green-500 hover:text-black hover:border-green-500 transition-all duration-300 rounded-lg"
          size="icon"
        >
          {isDark ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div> */}

      {/* Main Content */}
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
