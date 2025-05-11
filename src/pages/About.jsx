import { motion } from 'framer-motion';
import { fadeIn, slideInLeft, slideInRight, transition } from '../utils/animations';
import PulsatingHeart from '../components/PulsatingHeart';
import { Code, Database, Layout, Palette, Server, Terminal } from 'lucide-react';
import yourImage from '../assets/amitansu.png';

const About = ({ yourName, companyName }) => {
  const skillsData = [
    { name: "HTML & CSS", icon: <Layout size={24} className="text-white" />, level: 85 },
    { name: "JavaScript", icon: <Code size={24} className="text-white" />, level: 80 },
    { name: "React", icon: <Code size={24} className="text-white" />, level: 75 },
    { name: "UI/UX Design", icon: <Palette size={24} className="text-white" />, level: 70 },
    { name: "Backend Basics", icon: <Server size={24} className="text-white" />, level: 50 },
    { name: "Database", icon: <Database size={24} className="text-white" />, level: 45 },
    { name: "Terminal & Git", icon: <Terminal size={24} className="text-white" />, level: 65 },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
      transition={transition}
      className="min-h-screen w-full flex flex-col items-center justify-start py-12 text-white relative overflow-y-auto bg-gradient-to-br from-slate-900 to-gray-800"
    >
      <div className="container-custom relative z-10 w-full px-4 md:px-8">
        <h1 className="section-title text-center mb-12 text-sky-400">About Me</h1>
        
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <motion.div
              variants={slideInLeft}
              transition={{ delay: 0.1, ...transition }}
              className="md:col-span-1 flex justify-center md:justify-start"
            >
              <img 
                src={yourImage} 
                alt={yourName}
                className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-sky-500 shadow-xl"
              />
            </motion.div>
            
            <motion.div
              variants={slideInRight}
              transition={{ delay: 0.3, ...transition }}
              className="md:col-span-2 bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-xl"
            >
              <h2 className="text-3xl font-bold text-sky-300 mb-4 flex items-center">
                Hi, I'm {yourName} <PulsatingHeart className="ml-2" />
              </h2>
              <p className="text-lg text-gray-200 mb-4">
                A passionate Software developer intern at <span className="font-semibold text-sky-400">{companyName}</span>, dedicated to creating engaging user experiences and learning new technologies.
              </p>
              <p className="text-lg text-gray-200 mb-6">
                During my internship, I've had the opportunity to work on real-world projects, collaborate with talented developers, and grow my skills in React, JavaScript, and UI/UX design.
              </p>
              
              <div className="bg-sky-900 bg-opacity-80 border-l-4 border-sky-500 p-4 rounded-r mb-6">
                <h3 className="text-lg font-medium text-sky-300 mb-2">Fun Fact</h3>
                <p className="text-gray-300">
                  When I'm not coding, I love to [Your Hobby/Interest]! I also make the best [Favorite Food/Drink] according to my friends and family.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        
        <section className="bg-gray-800 bg-opacity-70 p-6 md:p-8 rounded-lg shadow-xl mb-16">
          <h2 className="section-title text-center mb-8 text-sky-400">My Skills</h2>
          <div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-center"
          >
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                className="card bg-slate-700 p-4 rounded-lg shadow-md flex flex-col items-center justify-center aspect-square"
                variants={{
                  initial: { y: 20, opacity: 0 },
                  animate: { y: 0, opacity: 1 }
                }}
                transition={{delay: 0.1 + index * 0.05}}
                whileHover={{ y: -5, backgroundColor: '#0ea5e9' }}
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-sky-600 text-white mb-3">
                  {skill.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-100 text-center">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;