import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ companyName, yourName }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About This Site</h3>
            <p className="text-gray-300 text-sm">
              This site documents my journey as a frontend intern at {companyName}.
              Created with React, Vite, Tailwind CSS, and Framer Motion.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About Me</a></li>
              <li><a href="/journey" className="hover:text-blue-400 transition-colors">My Journey</a></li>
              <li><a href="/projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="/thank-you" className="hover:text-blue-400 transition-colors">Thank You</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Me</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              {/* Replace with your email */}
              Email: <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition-colors">your.email@example.com</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} {yourName}. All rights reserved.</p>
          <p className="mt-2">Coded with 💙 during my internship at {companyName}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;