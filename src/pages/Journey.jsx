import { motion } from 'framer-motion';
import TimelineCard from '../components/TimelineCard';
import journeyData from '../data/journeyData';
import { fadeIn, transition } from '../utils/animations';

const Journey = ({ companyName, yourName }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
      transition={transition}
      className="min-h-screen w-full flex flex-col items-center justify-start py-12 text-white relative overflow-y-auto bg-gradient-to-br from-slate-800 to-slate-900"
    >
      <div className="container-custom relative z-10 w-full px-4 md:px-8">
        <motion.h1 
          className="section-title text-center text-sky-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          My Internship Journey
        </motion.h1>
        
        <motion.p 
          className="text-center text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Follow my six-month adventure as a frontend developer intern, from my first day to my final presentation.
        </motion.p>
        
        {/* Journey Timeline */}
        <div className="relative py-8">
          {journeyData.map((milestone, index) => (
            <TimelineCard
              key={milestone.id}
              title={milestone.title}
              date={milestone.date}
              description={milestone.description}
              index={index}
              isLast={index === journeyData.length - 1}
            />
          ))}
        </div>
        
        {/* Learning Outcomes */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-sky-700 to-sky-900 rounded-2xl p-8 text-white shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">Key Learnings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="bg-slate-800 bg-opacity-70 backdrop-blur-sm p-6 rounded-xl shadow-lg"
              whileHover={{ y: -5, backgroundColor: "rgba(14, 165, 233, 0.3)" }}
            >
              <h3 className="text-xl font-bold mb-3 text-sky-300">Technical Skills</h3>
              <p className="text-gray-200">
                Gained hands-on experience with modern frontend technologies and improved my coding practices.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-slate-800 bg-opacity-70 backdrop-blur-sm p-6 rounded-xl shadow-lg"
              whileHover={{ y: -5, backgroundColor: "rgba(14, 165, 233, 0.3)" }}
            >
              <h3 className="text-xl font-bold mb-3 text-sky-300">Collaboration</h3>
              <p className="text-gray-200">
                Learned to work effectively in a team, communicate ideas, and handle code reviews.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-slate-800 bg-opacity-70 backdrop-blur-sm p-6 rounded-xl shadow-lg"
              whileHover={{ y: -5, backgroundColor: "rgba(14, 165, 233, 0.3)" }}
            >
              <h3 className="text-xl font-bold mb-3 text-sky-300">Problem Solving</h3>
              <p className="text-gray-200">
                Developed critical thinking skills to tackle complex frontend challenges and debug issues.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-slate-800 bg-opacity-70 backdrop-blur-sm p-6 rounded-xl shadow-lg"
              whileHover={{ y: -5, backgroundColor: "rgba(14, 165, 233, 0.3)" }}
            >
              <h3 className="text-xl font-bold mb-3 text-sky-300">Project Management</h3>
              <p className="text-gray-200">
                Understood the software development lifecycle and Agile methodologies used in real projects.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Journey;