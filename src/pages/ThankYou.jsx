import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Confetti from '../components/Confetti';
import PulsatingHeart from '../components/PulsatingHeart';
import { fadeIn, transition } from '../utils/animations';

const ThankYou = ({ companyName = "Neuradynamics.ai", yourName = "Intern" }) => {
  useEffect(() => {
    document.title = `Thank You | ${yourName}'s Internship Journey`;
    return () => {
      document.title = `${yourName}'s Internship Journey`;
    };
  }, [yourName]);

  const specialThanksData = [
    {
      id: 1,
      name: "Himanshu Sir, Ravi Sir, & Swati Ma'am",
      note: "For your invaluable mentorship, guidance, patience, and for always pushing me to learn and improve throughout my internship."
    },
    {
      id: 2,
      name: "Anuj Sir, Akarshya, Sakshyam, & Pushpraj",
      note: "For the fantastic collaboration on Service Point, your support, making late-night 'bridging' sessions productive, and to Pushpraja for his dedicated efforts on the project!"
    },
    {
      id: 3,
      name: "Sandeep, Ashutosh, Pushpraj & Yuvraj",
      note: "For your insights during the Pragya project, help with complex API debugging, sharing your technical expertise, and to Pushpraja for his valuable contributions here as well!"
    },
    {
      id: 4,
      name: "The Entire Neuradynamics Team",
      note: "For welcoming me so warmly, answering all my questions, and creating such a positive, supportive, and inspiring learning environment."
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
      transition={transition}
      className="min-h-screen w-full py-16 md:py-20 flex flex-col items-center justify-center text-white relative overflow-y-auto bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700"
    >
      <Confetti duration={8000} particleCount={150} />
      
      <div className="container-custom max-w-3xl relative z-10 w-full px-4 md:px-6">
        <motion.div 
          className="text-center p-8 md:p-12 bg-slate-800 bg-opacity-80 rounded-2xl shadow-2xl backdrop-blur-md border border-purple-600/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
        >
          

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Thank You, <span className="whitespace-nowrap">{companyName}</span>!
          </motion.h1>
          
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1}}
            transition={{ delay: 0.6, duration: 0.5, type: 'spring', stiffness: 100 }}
          >
            <PulsatingHeart size={72} color="text-pink-400" />
          </motion.div>
          
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            For an absolutely incredible and inspiring six-month internship journey. I've grown immensely, both as a developer and as a professional, all thanks to the wonderful guidance and opportunities at {companyName}.
          </motion.p>
          
          <motion.div
            className="text-left mb-12"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-purple-300 mb-6 text-center">A Special Thank You To:</h2>
            <div className="space-y-5">
              {specialThanksData.map((item, index) => (
                <motion.div 
                  key={item.id} 
                  className="bg-slate-700/60 p-4 rounded-lg shadow-lg border-l-4 border-pink-500"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.2, duration: 0.4 }}
                >
                  <h3 className="font-semibold text-lg text-purple-300 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-300 leading-normal">{item.note}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ThankYou;