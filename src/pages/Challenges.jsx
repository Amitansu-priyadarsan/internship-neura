import { motion } from 'framer-motion';
import ChallengeCard from '../components/ChallengeCard';
import challengesData from '../data/challengesData';
import { fadeIn, transition } from '../utils/animations';

const Challenges = () => {
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
        <motion.h1 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Challenges & Growth
        </motion.h1>
        
        <motion.p 
          className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Not everything was smooth sailing! Here are some challenges I faced and how I overcame them.
        </motion.p>
        
        {/* Challenges */}
        <div className="space-y-10 mb-16">
          {challengesData.map((challenge) => (
            <ChallengeCard
              key={challenge.id}
              title={challenge.title}
              challenge={challenge.challenge}
              solution={challenge.solution}
            />
          ))}
        </div>
        
        {/* Growth Graph */}
        <section className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">My Growth Journey</h2>
          
          <div className="relative h-64 md:h-80">
            {/* X-axis (Time) */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between">
              <span className="text-sm text-gray-600">Month 1</span>
              <span className="text-sm text-gray-600">Month 3</span>
              <span className="text-sm text-gray-600">Month 6</span>
            </div>
            
            {/* Y-axis (Skills) */}
            <div className="absolute top-0 bottom-0 left-0 w-px bg-gray-300"></div>
            <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between items-start">
              <span className="text-sm text-gray-600 -ml-2">Expert</span>
              <span className="text-sm text-gray-600 -ml-2">Advanced</span>
              <span className="text-sm text-gray-600 -ml-2">Intermediate</span>
              <span className="text-sm text-gray-600 -ml-2">Beginner</span>
            </div>
            
            {/* Growth Line */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <motion.path
                d="M 50,200 Q 200,150 400,80 T 800,50"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              
              {/* Points on the curve */}
              <motion.circle 
                cx="50" cy="200" r="6" 
                fill="#3B82F6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
              <motion.circle 
                cx="400" cy="80" r="6" 
                fill="#3B82F6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              />
              <motion.circle 
                cx="800" cy="50" r="6" 
                fill="#3B82F6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              />
            </svg>
          </div>
        </section>
        
        {/* Key Lessons */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8">Key Lessons Learned</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Lessons</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>The importance of clean, maintainable code</li>
                <li>How to optimize frontend performance</li>
                <li>Effective debugging techniques</li>
                <li>Writing tests for components</li>
                <li>The value of consistent code style</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-secondary-50 p-6 rounded-lg border-l-4 border-secondary-500"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Lessons</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Effective communication in a tech team</li>
                <li>Taking and applying feedback constructively</li>
                <li>Time management and prioritization</li>
                <li>Balancing learning with productivity</li>
                <li>The importance of asking questions</li>
              </ul>
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Challenges;