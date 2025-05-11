import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const ProjectCard = ({ title, image, description, skills, rating = 5 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="card overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="h-48 bg-gray-200 rounded-lg overflow-hidden mb-4 relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          style={{ 
            transform: isHovered ? 'scale(1.05)' : 'scale(1)' 
          }}
        />
      </div>
      
      {/* Project Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
          >
            {skill}
          </span>
        ))}
      </div>
      
      {/* Rating */}
      <motion.div 
        className="flex items-center mt-4"
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ rotate: isHovered && i < rating ? [0, 15, -15, 15, 0] : 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Star 
                size={18} 
                className={`${i < rating ? 'text-secondary-500 fill-secondary-500' : 'text-gray-300'}`} 
              />
            </motion.div>
          ))}
        </div>
        <span className="ml-2 text-sm font-medium text-gray-600">{rating}/5 for Fun!</span>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;