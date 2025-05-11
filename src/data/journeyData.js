// Journey data with milestones
// You can customize this with your own journey details

const journeyData = [
  {
    id: 1,
    title: "Internship Start",
    date: "November 25, 2024",
    description: "Began my software developer internship. Met the team, set up my development environment, and learned about the company's tech stack and coding standards.",
    image: null, // No specific image for the start day
    experienceDetails: {
      summary: "This marked the beginning of my exciting journey as a software developer intern.",
      proudWork: [],
      specialThanks: ""
    }
  },
  {
    id: 2,
    title: "Service Point Project",
    date: "Late November 2024 - January 2025",
    description: "My first project assignment. Focused on frontend development and team collaboration.",
    image: "src/assets/servie_point.svg", // User mentioned this path, will need to confirm if it works
    experienceDetails: {
      summary: "Contributed to the Service Point project with a focus on redesign and responsiveness.",
      proudWork: [
        "Redesigned the application in 4 days.",
        "Made the application fully mobile responsive in 1 day.",
        "Learned how to work effectively in a team."
      ],
      specialThanks: "Special thanks to Anuj, Akarshya, Sakshyam, and Pushparaj who encouraged me."
    }
  },
  {
    id: 3,
    title: "Pragya Project",
    date: "February 8, 2025 - Mid May 2025", // Adjusted end date to be before final presentation
    description: "Joined the Pragya team. My role evolved towards full-stack problem solving and learning new technologies.",
    image: "src/assets/p.svg", // User mentioned this path
    experienceDetails: {
      summary: "Evolved as a software developer, focusing on holistic issue resolution and expanding my skillset.",
      proudWork: [
        "Learned Next.js for server-side rendering and static site generation.",
        "Gained a lot of knowledge in UI/UX principles to contribute better to design discussions.",
        "Started learning Langchain and Langsmith for AI-powered application development."
      ],
      specialThanks: "Special thanks to Sandeep, Ashutosh, Pushparaj, and Yuvraj for their mentorship and support."
    }
  },
  {
    id: 4, // ID updated due to new first entry
    title: "Final Presentation",
    date: "May 12, 2025",
    description: "Prepared and delivered my final internship presentation, showcasing my growth, contributions, and key learnings.",
    image: null, // No specific image for the presentation itself, unless provided
    experienceDetails: {
      summary: "This presentation marked the culmination of my internship. I shared my journey, achievements, and the valuable lessons learned over the past months.",
      proudWork: [],
      specialThanks: "A very special thanks to Himanshu sir, Ravi sir, and Swati mam for their invaluable guidance and support throughout my internship."
    }
  }
];

export default journeyData;