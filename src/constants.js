// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/dgLogo.png";

// Education Section Logo's
import aktuLogo from "./assets/education_logo/aktu.png";
import bteupLogo from "./assets/education_logo/polytechnic-logo.jpg";
import UPBoardLogo from "./assets/education_logo/UPBoard.png";

// Project Section Logo's
import EcommerceLogo from "./assets/work_logo/Ecommerce.png";
import imageGeneratorAiLogo from "./assets/work_logo/imageGeneratorAi.png";
import RestaurantReservationLogo from "./assets/work_logo/RestaurantReservation.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: `Java Script`, logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tail wind", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Materi al UI", logo: materialuiLogo },
      { name: "Boots trap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "Mongo DB", logo: mongodbLogo },
      { name: "Fire base", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "Java Script", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "MERN-Stack Developer",
    company: "Digicoders technology Pvt Ltd",
    date: "April 2024 - September 2024",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Express JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: aktuLogo,
    school: "Azad Group of Education institutions",
    date: "July 2025 - Pursuing",
    grade: "NA",
    desc: "I am currently pursuing in B.Tech from Azad Group of Education institutions. This program is designed to deepen my understanding of computer science and software development, equipping me with advanced skills in programming, database management, and application development. The curriculum includes a blend of theoretical knowledge and practical experience, preparing me for a successful career in the tech industry.",
    degree: "Bachelor of Technology - B.Tech",
  },
  {
    id: 1,
    img: bteupLogo,
    school: "Diploma in Computer Science from Government Plytechnic Rampur",
    date: "Aug 2022 - July 2025",
    grade: "72%",
    desc: "I completed my Diploma in Computer Science from Government Polytechnic Rampur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Government Polytechnic Rampur allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Diploma in Computer Science",
  },
  {
    id: 2,
    img: UPBoardLogo,
    school: "Sunni inter College",
    date: "Apr 2019 - March 2021",
    grade: "68%",
    desc: "I completed my class 12 education from Sunni Inter College, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "UPBoard(XII) - PCM",
  },
  {
    id: 3,
    img: UPBoardLogo,
    school: "Child Care Inter College",
    date: "Apr 2018 - March 2019",
    grade: "73%",
    desc: "I completed my class 10 education from Child Care Inter College, under the UP board, where I studied Science with Computer.",
    degree: "UPBoard(X), Science with Maths",
  },
];

export const projects = [
  {
    id: 0,
    title: "Ecommerce Website With Payment Gateway",
    description:
      "A powerful and user-friendly React.js application designed to provide a seamless shopping experience. Users can browse products, add them to their cart, and securely checkout using various payment methods. The app features a modern design and is optimized for performance.",
    image: EcommerceLogo,
    tags: ["React JS", "Tailwind CSS", "Node.js", "Express", "MongoDB", "API"],
    github: "https://github.com/Tanveer-Al/Mern_Ecommerce_with_payment",
    webapp: "https://mern-ecommerce-with-payment.netlify.app/",
  },
  {
    id: 1,
    title: "Image Generator AI",
    description:
      "A full-stack application that uses advanced AI techniques to generate images based on user inputs. The platform allows users to create unique visuals for various purposes, from art to marketing.",
    image: imageGeneratorAiLogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/Tanveer-Al/Image_Generater_AI_",
    webapp: "https://imagegeneraterai.netlify.app/",
  },
  {
    id: 2,
    title: "Restaurant Reservation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: RestaurantReservationLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://restaurantreservationbytanveer.netlify.app/",
  },
];
