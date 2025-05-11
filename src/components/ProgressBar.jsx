import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ProgressBar = ({ value = 60, label = "My Coding Journey", color = "blue" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"]
  });
  
  // Transform the scroll progress to the progress bar width
  const width = useTransform(scrollYProgress, [0, 1], [0, value]);
  
  return (
    <div ref={ref} className="w-full py-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <motion.span 
          className="text-sm font-semibold text-blue-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {value}% Complete
        </motion.span>
      </div>
      <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-${color}-500 rounded-full`}
          style={{ width: `${width}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;