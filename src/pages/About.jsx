import { motion } from 'framer-motion';
import { fadeIn, slideInLeft, slideInRight, transition } from '../utils/animations';
import PulsatingHeart from '../components/PulsatingHeart';
import { Code, Database, Layout, Palette, Server, Terminal } from 'lucide-react';

const About = ({ yourName }) => {
  const skillsData = [
    { name: "HTML & CSS", icon: <Layout size={24} />, level: 85 },
    { name: "JavaScript", icon: <Code size={24} />, level: 80 },
    { name: "React", icon: <Code size={24} />, level: 75 },
    { name: "UI/UX Design", icon: <Palette size={24} />, level: 70 },
    { name: "Backend Basics", icon: <Server size={24} />, level: 50 },
    { name: "Database", icon: <Database size={24} />, level: 45 },
    { name: "Terminal & Git", icon: <Terminal size={24} />, level: 65 },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
      transition={transition}
      className="py-12"
    >
      <div className="container-custom">
        <h1 className="section-title text-center mb-12">About Me</h1>
        
        {/* Profile Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <motion.div
              variants={slideInLeft}
              transition={{ delay: 0.2, ...transition }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-lg">
                {/* Replace with your image */}
                <img
                  src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Profile"
                  className="w-full h-auto object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-5 -right-5 bg-white rounded-full shadow-lg p-4"
                animate={{ 
                  rotate: [0, 10, -10, 10, 0],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "loop" 
                }}
              >
                <span className="text-blue-600 font-bold">Frontend Developer!</span>
              </motion.div>
            </motion.div>
            
            {/* Bio */}
            <motion.div
              variants={slideInRight}
              transition={{ delay: 0.4, ...transition }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                Hi, I'm {yourName} <PulsatingHeart className="ml-2" />
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                A passionate frontend developer intern at [Company Name], dedicated to creating engaging user experiences and learning new technologies.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                During my internship, I've had the opportunity to work on real-world projects, collaborate with talented developers, and grow my skills in React, JavaScript, and UI/UX design.
              </p>
              
              {/* Fun Fact */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mb-6">
                <h3 className="text-lg font-medium text-blue-800 mb-2">Fun Fact</h3>
                <p className="text-gray-700">
                  When I'm not coding, I love to [your hobby here]! I also make the best [food item] according to my friends and family.
                </p>
              </div>
              
              {/* Contact Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="mailto:your.email@example.com"
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
                <motion.a
                  href="#"
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LinkedIn
                </motion.a>
                <motion.a
                  href="#"
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="section-title text-center mb-8">My Skills</h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                className="card"
                variants={{
                  initial: { y: 20, opacity: 0 },
                  animate: { y: 0, opacity: 1 }
                }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-bold">{skill.name}</h3>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <motion.div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  ></motion.div>
                </div>
                <p className="text-sm text-right text-gray-600">{skill.level}%</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
        
        {/* Education & Certification */}
        <section>
          <h2 className="section-title text-center mb-8">Education & Certification</h2>
          
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl p-8 shadow-inner">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-blue-600 font-medium">2020 - 2024</p>
                    <h4 className="text-lg font-semibold text-gray-900">Bachelor of Computer Science</h4>
                    <p className="text-gray-600">[Your University Name]</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-blue-600 font-medium">2018 - 2020</p>
                    <h4 className="text-lg font-semibold text-gray-900">High School Diploma</h4>
                    <p className="text-gray-600">[Your High School Name]</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-blue-600 font-medium">2023</p>
                    <h4 className="text-lg font-semibold text-gray-900">React Developer Certification</h4>
                    <p className="text-gray-600">Meta (formerly Facebook)</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-blue-600 font-medium">2022</p>
                    <h4 className="text-lg font-semibold text-gray-900">UI/UX Design Fundamentals</h4>
                    <p className="text-gray-600">Google</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;