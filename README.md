# Internship Presentation Website

A responsive, modern website to showcase your 6-month internship journey as a frontend developer. Built with React, Vite, Framer Motion for animations, and styled with Tailwind CSS.

## Features

- Fully responsive design that works on all devices
- Interactive animations using Framer Motion
- 6 main pages: Home, About Me, Journey, Projects, Challenges, and Thank You
- Easy to customize with placeholder content

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone this repository or download the code
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Customization Guide

### Basic Information

Edit the App.jsx file to update your name and company name - these will be used throughout the site:

```jsx
// In src/App.jsx
const [companyName, setCompanyName] = useState('[Company Name]');
const [yourName, setYourName] = useState('[Your Name]');
```

### Content Customization

1. **Journey Timeline**: Edit the data in `src/data/journeyData.js`
2. **Projects**: Update the project details in `src/data/projectsData.js`
3. **Challenges**: Modify the challenges in `src/data/challengesData.js`

### Images

Replace the placeholder images with your own:

1. Replace image URLs in the data files
2. Update the profile image URL in the About page
3. Add your company logo if needed

### Styling

1. **Colors**: The primary colors can be adjusted in the `tailwind.config.js` file
2. **Fonts**: Change the fonts by updating the Google Fonts import in `src/index.css` and the font family settings in `tailwind.config.js`

## Deployment

### Deploying to Netlify

1. Create an account on [Netlify](https://www.netlify.com/)
2. Build your project:

```bash
npm run build
```

3. Drag and drop the `dist` folder to Netlify's upload area or connect your GitHub repository for continuous deployment

### Deploying to Vercel

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Run the deployment command:

```bash
vercel
```

3. Follow the prompts to deploy your project

## Built With

- [React](https://reactjs.org/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Router](https://reactrouter.com/) - Routing library
- [Lucide React](https://lucide.dev/) - Icon library

## License

This project is licensed under the MIT License