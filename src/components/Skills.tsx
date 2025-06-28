
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiVuedotjs,
  SiNodedotjs, SiPython, SiExpress, SiFastapi, SiPostgresql,
  SiMongodb, SiRedis, SiFirebase, SiMysql,
  SiDocker, SiGithubactions, SiKubernetes, SiTerraform,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFlask,
  SiDotnet,
  SiC,
  SiCplusplus,
} from 'react-icons/si';
import { LiaAws } from "react-icons/lia";
import { TbBrandCSharp } from "react-icons/tb";

const Skills = () => {
  const skillCategories = [
  {
      title: "Frontend",
      icon: <Globe className="w-8 h-8" />,
      command: "frontend",
      skills: [
        { name: "Angular.js", icon: <SiAngular /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Next.js", icon: <SiNodedotjs /> }, // Note: likely meant SiNextdotjs
        { name: "React", icon: <SiReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Vue.js", icon: <SiVuedotjs /> }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-8 h-8" />,
      command: "backend",
      skills: [
        // { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Python", icon: <SiPython /> },
        // { name: "Express", icon: <SiExpress /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "Flask", icon: <SiFlask />},
        { name: ".Net Core", icon: <SiDotnet />},
        { name: "C#", icon: <TbBrandCSharp />},
        { name: "C++", icon: <SiCplusplus />},
        { name: "C Programming", icon: <SiC />},
        // { name: "PostgreSQL", icon: <SiPostgresql /> }
      ]
    },
    {
      title: "Database",
      icon: <Database className="w-8 h-8" />,
      command: "database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "MySql", icon: <SiMysql /> }
      ]
    },
    {
      title: "DevOps",
      icon: <Code className="w-8 h-8" />,
      command: "devops",
      skills: [
        { name: "Docker", icon: <SiDocker /> },
        { name: "AWS", icon: <LiaAws /> },
        { name: "CI/CD", icon: <SiGithubactions /> },
        // { name: "Kubernetes", icon: <SiKubernetes /> },
        // { name: "Terraform", icon: <SiTerraform /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Terminal header */}
        <div className="terminal-section mb-16">
          {/* <div className="terminal-command text-2xl mb-4">
            $ cat skills.json | jq '.'
          </div> */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 font-mono text-green-700 dark:text-green-400">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-mono">
              <span className="text-green-700"># </span>
              A comprehensive toolkit for building modern applications
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full border-2 border-green-500/30 bg-white/80 dark:bg-background/80 backdrop-blur-sm hover:border-green-500 transition-all duration-300 glassmorphism">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  {/* Terminal command */}
                  {/* <div className="font-mono text-green-700 text-sm mb-4 text-left">
                    $ ls {category.command}/
                  </div> */}
                  
                  <div className="flex-1 flex flex-col items-center">
                    <div className="p-4 rounded-lg bg-green-500/10 mb-6 group-hover:bg-green-500/20 transition-colors duration-300">
                      <div className="text-green-700 group-hover:text-green-400 transition-colors duration-300">
                        {category.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 font-mono text-green-700 dark:text-green-400 group-hover:text-green-400 dark:group-hover:text-green-300 transition-colors duration-300">
                      {category.title}
                    </h3>
                    
                    <div className="space-y-2 flex-1">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-500 rounded font-mono text-m mr-2 mb-2 border border-green-500/30 hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 cursor-pointer"
                        >
                          {skill.icon} {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
