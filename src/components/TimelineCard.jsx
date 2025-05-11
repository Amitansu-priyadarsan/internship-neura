import { motion } from 'framer-motion';
import { Award, ArrowUp } from 'lucide-react';

const TimelineCard = ({ title, date, description, index, isLast = false }) => {
  const isEven = index % 2 === 0;
  
  const cardVariants = {
    hidden: { opacity: 0, x: isEven ? -50 : 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, delay: index * 0.1 }
    }
  };
  
  const badgeVariants = {
    initial: { scale: 0.8 },
    hover: { 
      scale: 1.1,
      transition: { duration: 0.2, yoyo: Infinity }
    }
  };
  
  return (
    <div className="relative">
      {/* Line */}
      {!isLast && (
        <div className="absolute top-8 left-1/2 w-px h-full -ml-px bg-blue-200 z-0"></div>
      )}
      
      {/* Timeline Node */}
      <div className="absolute top-8 left-1/2 -ml-3 h-6 w-6 rounded-full bg-blue-500 z-10 shadow-md"></div>
      
      {/* Card */}
      <motion.div
        className={`relative mt-6 mb-12 ${isEven ? 'md:mr-auto md:ml-12' : 'md:ml-auto md:mr-12'} md:w-5/12 z-10`}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="card hover:border-blue-200 border border-transparent">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <motion.div
              className="flex items-center justify-center p-2 bg-blue-100 text-blue-600 rounded-full"
              variants={badgeVariants}
              initial="initial"
              whileHover="hover"
            >
              <Award className="h-5 w-5" />
            </motion.div>
          </div>
          
          <p className="text-sm text-blue-600 font-medium mb-3">{date}</p>
          <p className="text-gray-700">{description}</p>
          
          {/* Level Up Badge */}
          <motion.div 
            className="flex items-center mt-4 text-xs font-semibold text-gray-600"
            whileHover={{ y: -2 }}
          >
            <span className="inline-flex items-center justify-center px-2 py-1 bg-secondary-100 text-secondary-700 rounded">
              <ArrowUp className="h-3 w-3 mr-1" />
              Level Up!
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineCard;