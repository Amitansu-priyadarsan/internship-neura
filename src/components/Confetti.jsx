import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Confetti = ({ duration = 3000 }) => {
  const [particles, setParticles] = useState([]);
  const [isActive, setIsActive] = useState(true);
  
  useEffect(() => {
    // Generate random confetti particles
    const colors = ['#3B82F6', '#F97316', '#10B981', '#EF4444', '#F59E0B'];
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -20 - Math.random() * 30,
      size: 5 + Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
    }));
    
    setParticles(newParticles);
    
    // Hide confetti after duration
    const timer = setTimeout(() => {
      setIsActive(false);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration]);
  
  if (!isActive) return null;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
          }}
          initial={{ y: particle.y, x: particle.x, rotate: 0 }}
          animate={{
            y: `${100 + Math.random() * 50}%`,
            x: `${particle.x + (Math.random() * 40 - 20)}%`,
            rotate: particle.rotation + Math.random() * 720,
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;