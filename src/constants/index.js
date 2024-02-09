import {
  cmscookbook,
  contact,
  css,
  cookbook,
  express,
  git,
  github,
  html,
  sql,
  javascript,
  linkedin,
  mongodb,
  nodejs,
  intern,
  barknbath,
  react,
  todolist,
  student,
  programer,
 
  tailwindcss,
  pokefight,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: sql,
    name: "Sql",
    type: "Databases",
  },

  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "BACHELOR (B.A.) in Economy and Informatics",
    company_name: "University of Tirana",
    icon: student,
    iconBg: "#accbe1",
    date: "October 2018 - October 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Financial and Audit intern",
    company_name: "Megal",
icon: intern,
    iconBg: "#fbc3bc",
    date: "May 2021 - July 2021",
    points: [
      "        Assisted with the preparation of financial statements and related reports.",
      "        Attended client meetings and participated in audit fieldwork.",
      "        Researched accounting and auditing standards.",
      "        Maintained accurate and organized documentation.",
    ],
  },

  {
    title: "WEB & APP DEVELOPMENT BOOTCAMP",
    company_name: "WBS CODING SCHOOL, Berlin",
    icon : programer,
    iconBg: "#a2d2ff",
    date: "September 2023 - January 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",

    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/xhenigega",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/xheni-g-94b2a7231",
  },
];

export const projects = [
  {
    iconUrl: barknbath,
    theme: "btn-back-red",
    name: "Dog Mobile-Spa App",
    description:
      "Me and Nawfal Senntisi developed a dog mobile spa app using Express.js for backend, MongoDB for database management, and Tailwind CSS for sleek styling. On the frontend, React.js brings interactivity and smooth user experience.  Let's keep innovating in the world of pet care!",
    link: "https://barknbath.onrender.com/",
  },
  {
    iconUrl: pokefight,
    theme: "btn-back-green",
    name: "Full Stack PokeFight game",
    description:
      'Full Stack PokeFight game" is a  Pokémon battle game, offering players to choose their pokemon and fight a random one. Built with Node.js, Express.js, MongoDB, and React.js, it integrates backend and frontend technologies for a simple fight adventure.',
    link: "https://github.com/xhenigega/Poke_Fight/tree/error/debug",
  },
  {
    iconUrl: cmscookbook,
    theme: "btn-back-blue",
    name: "Recipe Book",
    description:
      "Recipe Book: Powered by Contentful, this platform offers a  recipe management system. Seamlessly integrating with Contentful's API, it efficiently stores and delivers recipes, ensuring a smooth and dynamic user experience. From recipe creation to browsing and sharing, it provides a seamless culinary journey.",
    link: "https://github.com/xhenigega",
  },
  {
    iconUrl: cookbook,
    theme: "btn-back-black",
    name: "Cook Book",
    description:
      "At the start of our journey in web development, we embarked on a simple  project: a Cookbook . This beginner-level project served as our introduction to web development, focusing on basic functionalities for organizing and sharing recipes. Despite its simplicity, it provided a solid starting point for our coding journey, helping us grasp essential concepts and build a strong foundation.",
    link: "https://github.com/xhenigega",
  },
  {
    iconUrl: todolist,
    theme: "btn-back-pink",
    name: "To Do List",
    description:
      "We also built a basic To-Do List application. This project introduced us to essential concepts such as task creation, editing, and deletion. While straightforward, it provided hands-on experience in implementing key functionalities and understanding core web development principles.",
    link: "https://github.com/xhenigega",
  },
 
  
];
