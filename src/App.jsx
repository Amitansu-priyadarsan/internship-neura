import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Journey from './pages/Journey'; // Import Journey slide
import Challenges from './pages/Challenges'; // Import Challenges slide
import ThankYou from './pages/ThankYou'; // Import ThankYou slide

// Define your slides here. Each element is a component.
// We will pass companyName and yourName to them.
const slideComponents = [Home, About, Journey, Challenges, ThankYou]; // Removed Projects from the array
const slidePaths = ['home', 'about', 'journey', 'challenges', 'thank-you']; // For more readable URLs

// Helper to get slide index from path, e.g., "home" -> 0
const getSlideIndexFromPath = (pathSegment) => slidePaths.indexOf(pathSegment);
// Helper to get path from slide index, e.g., 0 -> "home"
const getPathFromSlideIndex = (index) => slidePaths[index];

function App() {
  const [companyName] = useState('NeuraDynamics.ai'); // Updated company name
  const [yourName] = useState('Amitansu Priyadarsan'); // Updated your name
  // currentSlideIndex will now be primarily driven by the URL
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    let slideIdentifier = 'home'; // Default to home
    if (pathSegments.length > 0) {
      slideIdentifier = pathSegments[pathSegments.length - 1];
    }
    
    const indexFromPath = getSlideIndexFromPath(slideIdentifier);

    if (indexFromPath !== -1) {
      setCurrentSlideIndex(indexFromPath);
    } else {
      // If path is not recognized, navigate to the first slide's path
      navigate(`/${getPathFromSlideIndex(0)}`, { replace: true });
    }
  }, [location.pathname, navigate]);

  const goToNextSlide = () => {
    const nextIndex = (currentSlideIndex + 1) % slideComponents.length;
    navigate(`/${getPathFromSlideIndex(nextIndex)}`);
  };

  const goToPreviousSlide = () => {
    const prevIndex = (currentSlideIndex - 1 + slideComponents.length) % slideComponents.length;
    navigate(`/${getPathFromSlideIndex(prevIndex)}`);
  };

  // Wrapper component to render the correct slide with props
  const SlideRenderer = () => {
    const { slideIdentifier } = useParams();
    // Ensure currentSlideIndex is up-to-date before rendering
    // This effect might be redundant given the one in App, but good for direct URL hits
    useEffect(() => {
        const indexFromPath = getSlideIndexFromPath(slideIdentifier);
        if (indexFromPath !== -1 && indexFromPath !== currentSlideIndex) {
            setCurrentSlideIndex(indexFromPath);
        }
    }, [slideIdentifier]);

    const ActualSlideComponent = slideComponents[currentSlideIndex];
    if (!ActualSlideComponent) return <div>Slide not found</div>; // Or a proper 404 component
    return <ActualSlideComponent companyName={companyName} yourName={yourName} />;
  };

  return (
    <div className="relative flex flex-col min-h-screen w-screen overflow-hidden bg-gray-900 text-white">
      <Routes>
        {/* Redirect base path to the first slide */}
        <Route path="/" element={<NavigateToFirstSlide />} />
        <Route path="/:slideIdentifier" element={<SlideRenderer />} />
      </Routes>

      {/* Navigation Buttons - Conditionally render based on if a slide is active */}
      {location.pathname !== '/' && ( // Only show buttons if not on the base path redirect
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          {currentSlideIndex > 0 && ( // Show previous unless it's the first slide
            <button
              onClick={goToPreviousSlide}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-300"
            >
              Previous
            </button>
          )}
          {currentSlideIndex < slideComponents.length - 1 && (
            <button
              onClick={goToNextSlide}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-300"
            >
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// Helper component to handle initial redirection
const NavigateToFirstSlide = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/${getPathFromSlideIndex(0)}`, { replace: true });
  }, [navigate]);
  return null; // Render nothing, just redirect
};

export default App;