import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const PulsatingHeart = ({ size = 24, color = "text-secondary-500" }) => {
  return (
    <motion.div
      animate={{ 
        scale: [1, 1.2, 1],
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        repeatType: "loop"
      }}
      className="inline-flex"
    >
      <Heart 
        size={size} 
        className={`${color} fill-current`} 
      />
    </motion.div>
  );
};

export default PulsatingHeart;