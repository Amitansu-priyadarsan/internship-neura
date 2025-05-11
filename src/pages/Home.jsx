import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn, transition } from '../utils/animations';
import companyLogo from '../assets/neuradynamics_logo.jpeg';

const Home = ({ companyName, yourName }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
      transition={transition}
      className="min-h-screen w-full flex flex-col items-center justify-center p-8 text-center relative bg-gradient-to-br from-slate-900 to-gray-800 text-white"
    >
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, ...transition }}
      >
        <motion.img
          src={companyLogo}
          alt={`${companyName} Logo`}
          className="h-16 sm:h-20 md:h-24 lg:h-28 mx-auto mb-8 md:mb-12 shadow-lg rounded-lg"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          My Internship Adventure at <span className="text-sky-400">{companyName}</span>
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          From Service Point to Pragya, here's how I coded my internship!
        </motion.h2>

        <motion.p
          className="text-md sm:text-lg md:text-xl text-gray-400 mb-10 max-w-xl lg:max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          Six months ago, I stepped into {companyName}, with big dreams and a love for code. 
          Join me as I share how I redesigned UIs, tamed APIs, and grew as a Software  Developer!
        </motion.p>

        {/* Removing the redundant "Click 'Next' to Continue" span */}
        {/* 
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="inline-block bg-sky-500 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md">
            Click 'Next' to Continue
          </span>
        </motion.div>
        */}

      </motion.div>
    </motion.div>
  );
};

export default Home;