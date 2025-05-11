import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projectsData';
import { fadeIn, staggerContainer, transition } from '../utils/animations';

const Projects = () => {
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
        >
          Projects & Contributions
        </motion.h1>
        
        <motion.p 
          className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Explore the key projects I worked on during my internship and the contributions I made to each.
        </motion.p>
        
        {/* Projects Grid */}
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
            />
          ))}
        </motion.div>
        
        {/* Technologies Used */}
        <section className="bg-gray-50 rounded-2xl p-8 shadow-inner">
          <h2 className="text-2xl font-bold text-center mb-8">Technologies I Worked With</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["React", "Redux", "JavaScript", "TypeScript", "CSS/SCSS", "Styled Components", "Git", "Figma"].map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 text-center rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
                }}
              >
                <p className="font-medium">{tech}</p>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Testimonial */}
        <motion.div
          className="mt-16 bg-blue-50 border border-blue-100 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full overflow-hidden mb-4">
              <img 
                src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Mentor" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-700 italic mb-4">
                "[Your Name] demonstrated remarkable growth during their internship. They approached challenges with enthusiasm and consistently delivered high-quality code. Their attention to detail and willingness to learn made them a valuable addition to our team."
              </p>
              <p className="font-medium text-gray-900">- Your Mentor</p>
              <p className="text-sm text-gray-600">Senior Frontend Developer, [Company Name]</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;