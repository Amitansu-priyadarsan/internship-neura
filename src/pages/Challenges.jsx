import { motion } from 'framer-motion';
import ChallengeCard from '../components/ChallengeCard';
import challengesData from '../data/challengesData';
import { fadeIn, transition } from '../utils/animations';

const Challenges = ({ companyName, yourName }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
      transition={transition}
      className="min-h-screen w-full flex flex-col items-center justify-start py-12 text-white relative overflow-y-auto bg-gradient-to-br from-slate-800 to-teal-900"
    >
      <div className="container-custom relative z-10 w-full px-4 md:px-8">
        <motion.h1 
          className="section-title text-center text-teal-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Challenges & Growth
        </motion.h1>
        
        <motion.p 
          className="text-center text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Not everything was smooth sailing! Here are some challenges I faced and how I overcame them.
        </motion.p>
        
        {/* Challenges - Assuming ChallengeCard is styled for dark theme */}
        <div className="space-y-10 mb-16">
          {challengesData.map((challenge) => (
            <ChallengeCard
              key={challenge.id}
              title={challenge.title}
              challenge={challenge.challenge}
              solution={challenge.solution}
              // theme="dark" // If ChallengeCard needs theme prop
            />
          ))}
        </div>
        
        {/* Growth Graph */}
        <section className="bg-slate-800 bg-opacity-70 rounded-2xl p-8 shadow-xl mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-teal-300">My Growth Journey</h2>
          
          <div className="relative h-64 md:h-80">
            {/* X-axis (Time) */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-600"></div> {/* Darker axis line */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between">
              <span className="text-sm text-gray-400">Month 1</span>
              <span className="text-sm text-gray-400">Month 3</span>
              <span className="text-sm text-gray-400">Month 6</span>
            </div>
            
            {/* Y-axis (Skills) */}
            <div className="absolute top-0 bottom-0 left-0 w-px bg-gray-600"></div> {/* Darker axis line */}
            <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between items-start">
              <span className="text-sm text-gray-400 -ml-2">Expert</span>
              <span className="text-sm text-gray-400 -ml-2">Advanced</span>
              <span className="text-sm text-gray-400 -ml-2">Intermediate</span>
              <span className="text-sm text-gray-400 -ml-2">Beginner</span>
            </div>
            
            {/* Growth Line */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <motion.path
                // Adjusted d attribute for a common SVG viewport (e.g., 0 0 1000 250 if graph is ~250px high)
                // Assuming graph height roughly maps to 250 units, and width to 1000 units.
                // Original: d="M 50,200 Q 200,150 400,80 T 800,50" -> This implies a specific large viewport.
                // For a responsive SVG, path coordinates are often relative or scaled.
                // For simplicity, let's assume viewport scaling makes these values work or they are placeholders.
                // A more robust solution would use percentage-based coordinates or a viewBox.
                d="M 50,200 Q 250,150 500,80 T 950,50" // Slightly adjusted for a typical 1000-width viewport
                fill="none"
                stroke="#2DD4BF" // teal-400
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              
              {/* Points on the curve */}
              <motion.circle cx="50" cy="200" r="6" fill="#2DD4BF" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
              <motion.circle cx="500" cy="80" r="6" fill="#2DD4BF" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} />
              <motion.circle cx="950" cy="50" r="6" fill="#2DD4BF" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} />
            </svg>
          </div>
        </section>
        
        {/* Key Lessons */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8 text-teal-300">Key Lessons Learned</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-slate-700 bg-opacity-80 p-6 rounded-lg border-l-4 border-teal-500 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-teal-200 mb-3">Technical Lessons</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>The importance of clean, maintainable code</li>
                <li>How to optimize frontend performance</li>
                <li>Effective debugging techniques</li>
                <li>Writing tests for components</li>
                <li>The value of consistent code style</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-slate-700 bg-opacity-80 p-6 rounded-lg border-l-4 border-teal-500 shadow-lg" // Changed to teal for consistency
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-teal-200 mb-3">Professional Lessons</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
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