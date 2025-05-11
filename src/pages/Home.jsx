import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProgressBar from '../components/ProgressBar';
import { fadeIn, slideInLeft, slideInRight, transition } from '../utils/animations';

const Home = ({ companyName, yourName }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
      transition={transition}
      className="min-h-screen"
    >
      {/* Progress Bar */}
      <div className="container-custom pt-4">
        <ProgressBar value={60} label="My Coding Journey" color="blue" />
      </div>
      
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div 
              variants={slideInLeft}
              transition={{ delay: 0.1, ...transition }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                My Internship Adventure at{' '}
                <span className="text-blue-600">{companyName}</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                A Frontend Journey! Exploring the world of web development one commit at a time.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/journey" className="btn-primary">
                  Explore My Journey
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={slideInRight}
              transition={{ delay: 0.3, ...transition }}
              className="relative"
            >
              {/* Placeholder for a hero image */}
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Coding setup" 
                  className="w-full h-full object-cover"
                />
                
                {/* Badges floating on the image */}
                <motion.div 
                  className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-medium text-blue-600 shadow-md"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  6 Months of Learning!
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Quick Overview Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Internship Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              className="card"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="h-12 w-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Service Point</h3>
              <p className="text-gray-600">
                Contributed to the customer service dashboard, improving UI/UX and implementing new features.
              </p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              className="card"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="h-12 w-12 flex items-center justify-center bg-secondary-100 text-secondary-600 rounded-full mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pragya</h3>
              <p className="text-gray-600">
                Developed key features for the mobile app, focusing on user authentication and profile management.
              </p>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div 
              className="card"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="h-12 w-12 flex items-center justify-center bg-green-100 text-green-600 rounded-full mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Component Library</h3>
              <p className="text-gray-600">
                Created new UI components and improved documentation for the company's internal component library.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container-custom text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Want to know more about my journey?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Discover how I grew as a developer during my time at {companyName} and the projects I worked on.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/about" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-600 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-300">
              About Me
            </Link>
            <Link to="/projects" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-300">
              View Projects
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;