import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projectsData';
import { fadeIn, staggerContainer, transition } from '../utils/animations';

const Projects = ({ companyName, yourName }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
      transition={transition}
      className="min-h-screen w-full flex flex-col items-center justify-start py-12 text-white relative overflow-y-auto bg-gradient-to-br from-gray-800 to-indigo-900"
    >
      <div className="container-custom relative z-10 w-full px-4 md:px-8">
        <motion.h1 
          className="section-title text-center text-indigo-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Projects & Contributions
        </motion.h1>
        
        <motion.p 
          className="text-center text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Explore the key projects I worked on during my internship and the contributions I made to each.
        </motion.p>
        
        {/* Projects Grid - Assuming ProjectCard and projectsData are styled for dark theme */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              skills={project.skills}
              rating={project.rating}
              // theme="dark" // If ProjectCard needs a theme prop
            />
          ))}
        </motion.div>
        
        {/* Technologies Used */}
        <section className="bg-slate-800 bg-opacity-70 rounded-2xl p-8 shadow-xl mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-indigo-300">Technologies I Worked With</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {["React", "Redux", "JavaScript", "TypeScript", "CSS/SCSS", "Styled Components", "Git", "Figma"].map((tech, index) => (
              <motion.div
                key={index}
                className="bg-slate-700 p-4 text-center rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -5, 
                  backgroundColor: "rgba(99, 102, 241, 0.4)" // indigo-500 with opacity
                }}
              >
                <p className="font-medium text-gray-100">{tech}</p>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Testimonial */}
        <motion.div
          className="bg-indigo-900 bg-opacity-60 border border-indigo-700 rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full overflow-hidden mb-4 shadow-lg border-2 border-indigo-400">
              <img 
                src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Mentor" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-200 italic mb-4">
                "{yourName} demonstrated remarkable growth during their internship. They approached challenges with enthusiasm and consistently delivered high-quality code. Their attention to detail and willingness to learn made them a valuable addition to our team."
              </p>
              <p className="font-medium text-indigo-300">- Your Mentor</p>
              <p className="text-sm text-gray-400">Senior Frontend Developer, {companyName}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;