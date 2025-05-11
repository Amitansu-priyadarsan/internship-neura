import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Confetti from '../components/Confetti';
import { fadeIn, transition } from '../utils/animations';
import { Heart } from 'lucide-react';

const ThankYou = ({ companyName, yourName }) => {
  useEffect(() => {
    document.title = `Thank You | ${yourName}'s Internship Journey`;
    return () => {
      document.title = `${yourName}'s Internship Journey`;
    };
  }, [yourName]);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
      transition={transition}
      className="min-h-screen w-full py-12 flex flex-col items-center justify-center text-white relative overflow-y-auto bg-gradient-to-br from-indigo-800 to-purple-900"
    >
      <Confetti duration={7000} />
      
      <div className="container-custom max-w-4xl relative z-10 w-full px-4 md:px-8">
        <motion.div
          className="bg-purple-600 text-white text-center py-3 px-8 rounded-full font-bold mb-10 mx-auto w-fit shadow-lg"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.3 }}
        >
          Mission Accomplished!
        </motion.div>
        
        <motion.div 
          className="text-center py-12 px-6 md:px-10 bg-slate-800 bg-opacity-70 rounded-3xl shadow-xl backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-300 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Thank you, <span className="text-purple-400">{companyName}</span>!
          </motion.h1>
          
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, -10, 10, -10, 0, 0] }}
            transition={{ delay: 0.5, duration: 0.7, type: 'spring' }}
          >
            <Heart className="h-20 w-20 text-purple-400 fill-current" />
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            For an amazing, inspiring, and educational six-month internship experience. I've grown immensely as a developer and as a professional, all thanks to the wonderful team at {companyName}.
          </motion.p>
          
          <motion.div
            className="text-left max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-purple-300 mb-6 text-center">Special Thanks To:</h2>
            <ul className="space-y-4">
              {[
                { id: 1, role: "My Mentor", note: "For your guidance, patience, and always pushing me to improve." },
                { id: 2, role: "The Dev Team", note: "For welcoming me, answering my questions, and making me feel part of the team." },
                { id: 3, role: "HR & Management", note: "For creating such a supportive learning environment." }
              ].map((item, index) => (
                <motion.li 
                  key={item.id} 
                  className="flex items-start bg-slate-700 bg-opacity-50 p-4 rounded-lg shadow"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.15 }}
                >
                  <span className="h-7 w-7 rounded-full bg-purple-500 text-white flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 font-semibold">{item.id}</span>
                  <p className="text-lg text-gray-300">
                    <span className="font-bold text-purple-200">{item.role}</span> - {item.note}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            className="border-t border-slate-700 pt-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-purple-300 mb-4">Let's Stay Connected!</h3>
            <p className="mb-4 text-gray-300">Email: <a href="mailto:your.email@example.com" className="text-purple-400 hover:underline">[Your Email Address]</a></p>
            <div className="flex justify-center space-x-4">
              <motion.a
                href="#"
                className="btn-primary bg-purple-500 hover:bg-purple-600 text-white"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="#"
                className="btn-secondary bg-slate-600 hover:bg-slate-700 text-white"
                whileHover={{ scale: 1.05, y: -2 }}
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