import cricImg from "@/assets/projects/Cricscorers.png";

import trafficImg from "@/assets/projects/TrafficSign.png";
import BharatImg from "@/assets/projects/ExploreBharat.jpeg";
import todoImg from "@/assets/projects/todo.png";
import quizImg from "@/assets/projects/Quizapp.webp";
import restroimg from "@/assets/projects/JALPAN.jpg"
export const completedProjects = [
  {
    title: "CricScorers",

    image: cricImg,

    description:
      "A full stack cricket scoring application supporting live scoring, scorecards, player stats and PDF export.",

    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],

    status: "LIVE",

    live: "https://cricscorers.in/",

    github: "https://github.com/ImrishiMittal/cricscores",

    featured: true,
  },
  {
    title: "Bharat Exploration",

    image: BharatImg,

    description:
      "Developed a responsive and interactive web application using HTML, CSS, and JavaScript to present the cultural diversity of Indian states through their festivals and traditions. Emphasized clean UI, intuitive navigation, and structured content delivery for enhanced user engagement.",

    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],

    status: "LIVE",

    live: "https://bharatexploration.netlify.app",

    github: "https://github.com/ImrishiMittal/cricscores",

    featured: true,
  },

  {
    title: "Traffic Sign Detection",

    image: trafficImg,

    description:
      "AI-powered traffic sign detection system using YOLOv8 for identifying and classifying road signs.",

    tech: ["Python", "YOLOv8", "OpenCV", "Machine Learning"],

    status: "COMPLETED",

    featured: false,
  },
  {
    title: "To Do",

    image: todoImg,

    description:
      "Developed a responsive task management application with CRUD operations, allowing users to efficiently organize and track their daily tasks.",

    tech: ["HTML", "CSS", "JavaScript"],

    github: "https://github.com/ImrishiMittal/PROJECTS/tree/main/ToDo/Todo_App",

    live: "https://rishi-todo.netlify.app/",

    status: "COMPLETED",

    featured: false,
  },
  {
    title: "Quiz App",

    image: quizImg,

    description:
      "Built an interactive quiz application featuring multiple-choice questions, real-time score tracking, and an intuitive user interface for an engaging learning experience.",

    tech: ["HTML", "CSS", "JavaScript"],

    github: "https://github.com/ImrishiMittal/PROJECTS/tree/main/QUIZ%20APP",

    status: "COMPLETED",

    featured: false,
  },
  {
    title: "Resturant Landing Page",

    image: restroimg,

    description:
      "Built a attractive demo landing page for a resto",

    tech: ["HTML", "CSS", "JavaScript"],

    live: "https://jalpaan.netlify.app/",

    status: "COMPLETED",

    featured: false,
  },
];

export const upcomingProjects = [
  {
    title: "#Project 1",

    description:
      "Homemade pure vegetarian food platform connecting customers with fresh and healthy meals.",

    status: "Research & MVP",
  },

  {
    title: "#Project 2",

    description:
      "Building a platform focused on making travel experiences safer, smarter, and more connected for modern explorers.",

    status: "Idea & Research",
  },
  {
    title: "#Project 3",

    description:
      "An application for an aashram to track all kind of donations, all the announcements, books, bhajans will available on the site.",

    status: "Idea & Research",
  },
];
