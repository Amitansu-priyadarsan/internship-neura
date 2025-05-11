import { motion } from 'framer-motion';
import TimelineCard from '../components/TimelineCard';
import journeyData from '../data/journeyData';
import { fadeIn, transition } from '../utils/animations';

const Journey = () => {
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
          transition={{ delay: 0.1 }}
        >
          My Internship Journey
        </motion.h1>
        
        <motion.p 
          className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
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
          className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Key Learnings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <h3 className="text-xl font-bold mb-3">Technical Skills</h3>
              <p className="text-blue-100">
                Gained hands-on experience with modern frontend technologies and improved my coding practices.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-blue-100">
                Learned to work effectively in a team, communicate ideas, and handle code reviews.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <h3 className="text-xl font-bold mb-3">Problem Solving</h3>
              <p className="text-blue-100">
                Developed critical thinking skills to tackle complex frontend challenges and debug issues.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <h3 className="text-xl font-bold mb-3">Project Management</h3>
              <p className="text-blue-100">
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