import { motion } from 'framer-motion';
import { fadeIn, transition } from '../utils/animations';
import servicePointLogo from '../assets/service-point.svg';
import pragyaLogo from '../assets/p.svg';
import neuradynamicsLogo from '../assets/neuradynamics_logo.jpeg';

const Challenges = () => {
  const challengeData = [
    {
      id: 'service-point',
      logo: servicePointLogo,
      altText: 'Service Point Logo',
      cardTitle: 'Service Point: UI Crunch Time',
      challengeDescription: "Redesigning the Service Point UI in just 4 days felt like running a coding marathon with a tight deadline! Balancing aesthetics, functionality, and team feedback was overwhelming as a first-time intern.",
      solutionDescription: "I broke the redesign into smaller tasks. I collaborated closely with Anuj, Akarshya, and Sakshyam, incorporating their feedback to refine the design. To hit the deadline, I prioritized key features and tested responsiveness early, ensuring the app shone on mobile in just 1 day!",
      growthDescription: "This challenge taught me time management, teamwork, and how to balance speed with quality. I gained confidence in UI design and learned to communicate effectively in a team, setting the stage for my frontend journey. A key takeaway was learning to accept mistakes as part of the process, everyone makes them, the important part is to correct them and learn."
    },
    {
      id: 'pragya',
      logo: pragyaLogo,
      altText: 'Pragya Logo',
      cardTitle: 'Pragya: The API Debugging Marathon',
      challengeDescription: "Debugging a complex API issue in Pragya was like solving a puzzle at 4 AM! The API kept throwing cryptic errors, and integrating it with Next.js while learning LangChain felt like juggling too many new tools at once.",
      solutionDescription: "I turned into a console.log detective, logging every API call to trace the issue (yes, that 4 AM marathon!). I used Postman to test endpoints, collaborated with Sandeep and Ashutosh for insights.For LangChain and LangSmith, I started with small experiments, building my understanding step-by-step.",
      growthDescription: "This taught me to stay calm under pressure and break down complex problems. I leveled up my debugging skills, deepened my Next.js and AI tool knowledge, and learned to think like a software developer, not just a frontend coder. This also taught me the importance of unit testing and end-to-end testing with Cypress, which helped ensure code quality and reliability, contributing significantly to my growth as a developer. "
    },
    {
      id: 'neuradynamics-growth',
      logo: neuradynamicsLogo,
      altText: 'Neuradynamics Logo',
      cardTitle: 'Neuradynamics: My Overall Growth',
      isGeneralLearning: true,
      learnings: [
        "Mastered the art of teamwork and late-night collaborative problem-solving (big shoutout to Anuj sir and the team for those 'bridging' sessions!).",
        "Learned to take full ownership and responsibility for my work.",
        "Became more meticulous, significantly reducing silly mistakes.",
        "Overcame the fear of making mistakes, understanding they're stepping stones to learning, and that it's fine as everyone makes them – the key is to correct and learn.",
        "Gained confidence in expressing my thoughts and ideas openly within the team."
      ]
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
      transition={transition}
      className="min-h-screen w-full flex flex-col items-center justify-start py-12 md:py-20 text-white relative overflow-y-auto bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900"
    >
      <div className="container-custom relative z-10 w-full px-4 md:px-8 max-w-4xl mx-auto">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-teal-400 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Bugs, Battles, and Breakthroughs: My Growth at Neuradynamics.ai!
        </motion.h1>
        
        <motion.p 
          className="text-center text-gray-300 text-md md:text-lg mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Every challenge was a chance to level up as a developer!
        </motion.p>

        <motion.p
          className="text-center text-gray-400 mb-12 md:mb-16 max-w-3xl mx-auto text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          From wrestling with tricky APIs to mastering new frameworks, my 6-month journey at Neuradynamics.ai taught me to tackle problems head-on and grow stronger with every bug squashed!
        </motion.p>
        
        <div className="space-y-10 md:space-y-12 mb-16 md:mb-20">
          {challengeData.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-slate-800 p-6 md:p-8 rounded-xl shadow-2xl border border-slate-700 hover:border-teal-500/70 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.25 }}
              whileHover={{ y: -6, boxShadow: "0 12px 20px -5px rgba(45, 212, 191, 0.35), 0 5px 8px -3px rgba(45, 212, 191, 0.25)" }}
            >
              {item.logo && (
                <div className="flex justify-center md:justify-start mb-4 md:mb-5">
                  <img src={item.logo} alt={item.altText} className="h-8 md:h-10" />
                </div>
              )}
              <h3 className={`text-xl md:text-2xl font-bold text-teal-300 mb-4 ${item.logo ? 'text-center md:text-left' : 'text-center'}`}>{item.cardTitle}</h3>
              
              {item.isGeneralLearning ? (
                <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base leading-relaxed pl-2">
                  {item.learnings.map((learning, i) => (
                    <li key={i}>{learning}</li>
                  ))}
                </ul>
              ) : (
                <>
                  <div>
                    <h4 className="text-lg font-semibold text-teal-400 mt-3 mb-1">Challenge:</h4>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item.challengeDescription}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-teal-400 mt-4 mb-1">Solution:</h4>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item.solutionDescription}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-teal-400 mt-4 mb-1">Growth:</h4>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item.growthDescription}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + challengeData.length * 0.25 }}
        >
          <p className="text-center text-gray-300 text-md md:text-lg mb-6 max-w-3xl mx-auto">
            Every challenge at Neuradynamics.ai was a stepping stone. By May 12, 2025, I'm not just coding—I'm solving problems with purpose, thanks to the whole team!
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Challenges;