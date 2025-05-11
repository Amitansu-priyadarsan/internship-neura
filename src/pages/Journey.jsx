import { motion } from 'framer-motion';
import { useState } from 'react';
import TimelineCard from '../components/TimelineCard';
import journeyData from '../data/journeyData';
import { fadeIn, transition } from '../utils/animations';

const Journey = ({ companyName, yourName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const openModal = (milestone) => {
    setSelectedMilestone(milestone);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMilestone(null);
  };

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
          Follow my six-month adventure as a software developer intern, from my first day to my final presentation.
        </motion.p>
        
        {/* Journey Timeline */}
        <div className="relative py-8">
          {journeyData.map((milestone, index) => (
            <div key={milestone.id} onClick={() => openModal(milestone)} className="cursor-pointer group mb-2">
              <TimelineCard
                title={milestone.title}
                date={milestone.date}
                description={milestone.description}
                index={index}
                isLast={index === journeyData.length - 1}
              />
            </div>
          ))}
        </div>
        
        {/* Key Learnings Section is now fully removed */}
      </div>

      {isModalOpen && selectedMilestone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="bg-slate-800 rounded-xl shadow-2xl p-6 md:p-8 max-w-xl w-full text-gray-100 relative flex flex-col max-h-[90vh] border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-sky-400">{selectedMilestone.title}</h2>
                <p className="text-sm text-sky-200 opacity-80">{selectedMilestone.date}</p>
              </div>
              <button 
                onClick={closeModal} 
                className="text-gray-400 hover:text-sky-300 text-3xl leading-none p-1 rounded-full hover:bg-slate-700 transition-colors duration-150"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <div className="overflow-y-auto pr-2 flex-grow scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-700/50">
              {selectedMilestone.image && (
                <div className="mb-6 w-full flex justify-center">
                  <img 
                    src={selectedMilestone.image} 
                    alt={`${selectedMilestone.title} logo`} 
                    className="my-2 rounded-lg max-h-48 md:max-h-56 object-contain bg-slate-700 p-2 shadow-md" 
                  />
                </div>
              )}
              
              {selectedMilestone.experienceDetails?.summary && (
                <p className="text-gray-300 mb-5 text-base leading-relaxed">
                  {selectedMilestone.experienceDetails.summary}
                </p>
              )}
              
              {selectedMilestone.experienceDetails?.proudWork && selectedMilestone.experienceDetails.proudWork.length > 0 && (
                <div className="mb-5">
                  <h3 className="text-lg font-semibold text-sky-300 mb-3">My Proud Work:</h3>
                  <ul className="list-disc list-inside pl-2 space-y-1.5 text-gray-300">
                    {selectedMilestone.experienceDetails.proudWork.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {selectedMilestone.experienceDetails?.specialThanks && (
                <p className="text-sm text-gray-400 mt-6 pt-4 border-t border-slate-700 italic">
                  {selectedMilestone.experienceDetails.specialThanks}
                </p>
              )}
            </div>

          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Journey;