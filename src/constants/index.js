import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    java,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    aws,
    successor,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Cloud",
      icon: mobile,
    },
    {
      title: "Java Development",
      icon: backend,
    },
    {
      title: "Content Creation",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
   
    {
      name: "React JS",
      icon: reactjs,
    },
   
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
   
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "react.js",
      icon: reactjs,
      iconBg: "#383E56",
      date: "March 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Intermediate Java ",
      company_name: "Java",
      icon: java,
      iconBg: "#E6DEDD",
      date: "july 2022 - present",
      points: [
        "A Intermediate java developer with hand on experience.with java swing ",
        "Java Awt ,Java FX Made a Sudoku desktop application.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Successor",
      icon: html,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
          "Developed personal Portfolio with basic html,css,js",
          "This project too comes under my Web Devlopment using TailwindCss,Three.js & Vite js building tool",
          
          "Hosted a WordPress Website On Temporary Domain and hosting",

      ],
    },
    {
      title: "Cloud services",
      company_name: "Amazon",
      icon: aws,
      iconBg: "#E6DEDD",
      date: "August 2023 - Present",
      points: [
"Cloud is a New Topic For Me Trying to Get through Basic Services Like Storage & Databse",
"Improving Day by Day And I Hope in the next few month I'll have a good knowledge on this growing technology",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Arif",
      designation: "",
      company: " ",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Vishal",
      designation: "",
      company: "",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Zuber",
      designation: "",
      company: "",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Laxman",
      designation: "",
      company: "",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Personal Portfolio",
      description:
        "Successor my first personal portfolio to showcase my skills on webdev using basic:Html,CSS,JS May be in future I will add some more",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "text-stone-600",
        },
        {
          name: "CSS",
          color: "pink-text-gradient ",
        },
      ],
      image: successor,
      source_code_link: "https://github.com/aqibmohammed/Successor",
    },
    
    
  ];

  
  export { services, technologies, experiences, testimonials, projects };