import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Confetti from '../components/Confetti';
import { fadeIn, transition } from '../utils/animations';
import { Heart } from 'lucide-react';

const ThankYou = ({ companyName }) => {
  useEffect(() => {
    // Change the page title when component mounts
    document.title = `Thank You | Internship Journey`;
    
    // Reset the title when component unmounts
    return () => {
      document.title = 'Internship Journey';
    };
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
      transition={transition}
      className="min-h-screen py-12 flex flex-col justify-center"
    >
      {/* Confetti Effect */}
      <Confetti duration={5000} />
      
      <div className="container-custom max-w-4xl">
        {/* Mission Accomplished Banner */}
        <motion.div
          className="bg-secondary-500 text-white text-center py-3 px-6 rounded-full font-bold mb-8 mx-auto w-fit"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ 
            type: 'spring',
            stiffness: 120,
            damping: 20,
            delay: 0.5
          }}
        >
          Mission Accomplished!
        </motion.div>
        
        <motion.div 
          className="text-center py-16 px-8 bg-white rounded-3xl shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Thank you, {companyName}!
          </motion.h1>
          
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 10, -10, 10, 0] }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Heart className="h-20 w-20 text-secondary-500 fill-current" />
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            For an amazing, inspiring, and educational six-month internship experience. I've grown immensely as a developer and as a professional.
          </motion.p>
          
          {/* Gratitude Points */}
          <motion.div
            className="text-left max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Special Thanks To:</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                <p className="text-lg text-gray-700">
                  <span className="font-bold">My Mentor</span> - For your guidance, patience, and always pushing me to improve.
                </p>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                <p className="text-lg text-gray-700">
                  <span className="font-bold">The Dev Team</span> - For welcoming me, answering my questions, and making me feel part of the team.
                </p>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                <p className="text-lg text-gray-700">
                  <span className="font-bold">HR & Management</span> - For creating such a supportive learning environment.
                </p>
              </li>
            </ul>
          </motion.div>
          
          {/* Contact Details */}
          <motion.div
            className="border-t border-gray-200 pt-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Let's Stay Connected!</h3>
            <p className="mb-4 text-gray-700">Email: <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">your.email@example.com</a></p>
            <div className="flex justify-center space-x-4">
              <motion.a
                href="#"
                className="btn-primary"
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ThankYou;