// Challenges data
// Replace with your own challenges and solutions

const challengesData = [
  {
    id: 1,
    title: "API Integration Issues",
    challenge: "Encountered numerous issues when integrating with a third-party API. The documentation was outdated, and the response format was inconsistent, causing unpredictable behavior in our application.",
    solution: "Created a robust adapter layer to handle the inconsistencies in the API responses. Implemented comprehensive error handling and fallback strategies. Documented the actual API behavior for the team."
  },
  {
    id: 2,
    title: "Cross-Browser Compatibility",
    challenge: "Discovered that our animations and layout were breaking on Safari and older versions of Edge. CSS grid implementations were inconsistent, and some JavaScript features weren't supported.",
    solution: "Set up a cross-browser testing strategy using BrowserStack. Created polyfills for unsupported features. Refactored CSS using a more compatible approach and added vendor prefixes where needed."
  },
  {
    id: 3,
    title: "Performance Optimization",
    challenge: "The application was becoming slow as we added more features. Initial load time exceeded our target, and interactions felt sluggish, especially on mobile devices.",
    solution: "Conducted a performance audit identifying key bottlenecks. Implemented code splitting, lazy loading of components, and memoization of expensive calculations. Optimized images and reduced bundle size."
  }
];

export default challengesData;