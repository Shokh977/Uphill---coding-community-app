import React from 'react';
import { Code, Database, PenTool, Layout, Server, Cloud, Globe, Terminal } from 'lucide-react';

const skills = [
  {
    id: 1,
    name: 'Frontend Development',
    icon: <Layout className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-400',
    level: 95,
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux']
  },
  {
    id: 2,
    name: 'Backend Development',
    icon: <Server className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-400',
    level: 90,
    technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL']
  },
  {
    id: 3,
    name: 'UI/UX Design',
    icon: <PenTool className="w-6 h-6" />,
    color: 'from-purple-500 to-indigo-400',
    level: 85,
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator']
  },
  {
    id: 4,
    name: 'Database Management',
    icon: <Database className="w-6 h-6" />,
    color: 'from-orange-500 to-amber-400',
    level: 88,
    technologies: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Redis']
  },
  {
    id: 5,
    name: 'DevOps',
    icon: <Cloud className="w-6 h-6" />,
    color: 'from-red-500 to-rose-400',
    level: 80,
    technologies: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Terraform']
  },
  {
    id: 6,
    name: 'Web Performance',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-yellow-500 to-amber-400',
    level: 92,
    technologies: ['Lighthouse', 'WebVitals', 'PWA', 'Service Workers', 'Caching']
  },
  {
    id: 7,
    name: 'Programming Languages',
    icon: <Code className="w-6 h-6" />,
    color: 'from-teal-500 to-cyan-400',
    level: 95,
    technologies: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Go']
  },
  {
    id: 8,
    name: 'Command Line',
    icon: <Terminal className="w-6 h-6" />,
    color: 'from-violet-500 to-purple-400',
    level: 88,
    technologies: ['Bash', 'Git', 'npm', 'yarn', 'CLI Tools']
  }
];

const SkillsSection = () => {
  return (
    <div className="skills-section py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">My Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I specialize in creating modern, high-performance web applications using the latest technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div 
              key={skill.id}
              className="skill-card bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${skill.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} text-white mr-4`}>
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-lg dark:text-white">{skill.name}</h3>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} animate-pulse-slow rounded-full`} 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {skill.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gray-50 dark:bg-gray-900 px-4 text-lg text-gray-500 dark:text-gray-400">Additional Skills</span>
            </div>
          </div>
          
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Responsive Design', 'SEO Optimization', 'Web Accessibility', 'REST API', 'Authentication', 'Internationalization', 'State Management', 'Testing'].map((skill, index) => (
              <div 
                key={index}
                className="py-3 px-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-gray-800 dark:text-gray-200 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;