// Enter all your details in this file


// Profile Image
import profile from "./assets/profile.jpg";

// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";

// Backend technologies
import express from "./assets/techstack/express.png";
import nodejs from "./assets/techstack/nodejs.png";        
import mongodb from "./assets/techstack/mongodb.png";
import firebase from "./assets/techstack/firebase.png";

// Project Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";


// PERSONAL DETAILS
export const personalDetails = {
  name: "Suganya",
  tagline: "I build things for the web",
  img: profile,
  about:
    "I am Suganya, a passionate Full Stack Web Developer skilled in building modern, responsive, and user-friendly web applications. I work with HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB to create clean and functional solutions. I enjoy learning new technologies, solving problems, and I am currently looking for remote job opportunities to grow and contribute.",
};

// SOCIAL MEDIA
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// WORK EXPERIENCE
export const workDetails = [
  {
    Position: "Internship",
    Company: `In-Plant Training on Networking at BSNL RGMTTC`,
    Location: "Meenambakkam, Chennai",
    Type: "Hands-on training (software and hardware networking fundamentals)",
    Duration: "Aug 2016 - Oct 2016",
  },
  {
    Position: "Documentation in Quality Analyst - Trainee",
    Company: `Axles India Pvt Ltd`,
    Location: "Sriperumbudur, Kanchipuram (DT)",
    Type: "Full Time",
    Duration: "March 2017 - July 2018",
  },
];

// EDUCATION DETAILS
export const eduDetails = [
  {
    Position: "Full Stack Web Development",
    Company: "Error Makes Clever",
    Location: "Online",
    Type: "Full Time",
    Duration: "Aug 2025 - Present",
  },
  {
    Position: "Bachelor in Computer Science",
    Company: `Jeppiaar Maamallan Institute of Technology`,
    Location: "Sriperumbudur, Kanchipuram (DT)",
    Type: "Full Time",
    Duration: "Aug 2012 - May 2016",
  },
];

// TECH STACK
export const techStackDetails = {
  // Frontend
  html,
  css,
  js,
  react,
  redux,
  tailwind,
  

  // Backend
  express,
  nodejs,       
  mongodb,
  firebase,

  // Tools
  vscode,
  npm,
  git,
  github,
};

// PROJECTS
export const projectDetails = [
  
  {
    title: "Udemy Clone Project",
    image: projectImage1,
    description: `A fully responsive Udemy Clone built with HTML and CSS. It replicates the core UI sections of Udemy, including course cards, category listings, and a modern landing page. Designed to showcase frontend layout and styling skills without using any frameworks.`,
    techstack: "HTML/CSS",
    previewLink: " https://suganyakannan12.github.io/udemy-clone/",
    githubLink: "https://github.com/Suganyakannan12",

  },
  {
    title: "Greenden",
    image: projectImage2,
    description: `A stylish plant store website (Greenden) created with HTML and Tailwind CSS. It showcases Tailwind’s utility-first design approach with responsive layouts and neatly styled components.`,
    techstack: "HTML/CSS, Tailwind CSS",
    previewLink: "https://suganyakannan12.github.io/greenden/",
    githubLink: "https://github.com/Suganyakannan12",
  },
  {
    title: "Nostra",
    image: projectImage3,
    description: `Nostra is a fully responsive e-commerce fashion landing page developed with HTML, CSS, and JavaScript. It includes interactive UI components, product sections, and a modern layout suitable for online stores.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://suganyakannan12.github.io/Nostra/index.html",
    githubLink: "https://github.com/Suganyakannan12",
  },
  {
    title: "Weather Report",
    image: projectImage4,
    description: `A weather report application built with React, fetching real-time weather data from an API. It features a clean UI, search functionality, and displays current weather conditions for any location.`,
    techstack: "HTML/CSS, JavaScript, React, API",
    previewLink: "https://weather-report-gamma-sooty.vercel.app/",
    githubLink: "https://github.com/Suganyakannan12",
  },
  {
    title: "Movie Hub",
    image: projectImage5,
    description: `A movie discovery app built using React + TMDB API, with search, pagination, and favorite-movie support through local storage.`,
    techstack: "HTML/CSS, JavaScript, React, TMDB API",
    previewLink: "https://movie-hub-c6j5-git-main-suganyas-projects-4daaa91b.vercel.app/",
    githubLink: "https://github.com/Suganyakannan12",
  },
  {
    title: "Project-hub",
    image: projectImage6,
    description: `A full-stack project management application built with React, Redux, Firebase, Node.js, and Express. It allows users to create, manage, and collaborate on projects with real-time updates and authentication.`,
    techstack: "HTML/CSS, JavaScript, React, Redux, Firebase, nodejs , express",
    previewLink: "https://project-hub-frontend-khaki.vercel.app/home",
    githubLink: "https://github.com/Suganyakannan12",
  },
];

// CONTACT DETAILS
export const contactDetails = {
  email: "suganyakannan12@gmail.com",

};
