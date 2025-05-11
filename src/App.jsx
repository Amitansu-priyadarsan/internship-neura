import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Journey from './pages/Journey'; // Import Journey slide

import Challenges from './pages/Challenges'; // Import Challenges slide
import ThankYou from './pages/ThankYou'; // Import ThankYou slide

// Define your slides here. Each element is a component.
// We will pass companyName and yourName to them.
const slides = [Home, About, Journey, Challenges, ThankYou]; // Removed Projects from the array

function App() {
  const [companyName] = useState('NeuraDynamics.ai'); // Updated company name
  const [yourName] = useState('Amitansu Priyadarsan'); // Updated your name
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const CurrentSlideComponent = slides[currentSlideIndex];

  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative flex flex-col min-h-screen w-screen overflow-hidden bg-gray-900 text-white">
      {/* Render the current slide */}
      {CurrentSlideComponent && <CurrentSlideComponent companyName={companyName} yourName={yourName} />}

      {/* Navigation Buttons */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        <button
          onClick={goToPreviousSlide}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-300"
        >
          Previous
        </button>
        {currentSlideIndex < slides.length - 1 && (
          <button
            onClick={goToNextSlide}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-300"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default App;