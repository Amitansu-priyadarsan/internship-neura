import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const ChallengeCard = ({ title, challenge, solution }) => {
  return (
    <motion.div
      className="card mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <motion.div
          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary-100 text-secondary-800"
          whileHover={{ 
            scale: 1.05, 
            backgroundColor: '#FDBA74', // secondary-300
            transition: { duration: 0.2 }
          }}
        >
          <Zap className="h-4 w-4 mr-1" />
          Bug Squashed!
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">The Challenge</h4>
          <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
            <p className="text-gray-800">{challenge}</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">My Solution</h4>
          <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
            <p className="text-gray-800">{solution}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChallengeCard;