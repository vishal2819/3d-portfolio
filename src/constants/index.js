import {
  backend,
  carrent,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  jobit,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  simpact,
  skillync,
  threejs,
  tripguide,
  typescript,
  vishal_studio,
  web,
  yoom,
} from '../assets/media';

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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "https://img.icons8.com/color/344/html-5--v1.png",
  },
  {
    name: "CSS 3",
    icon: "https://img.icons8.com/color/344/css3.png",
  },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/344/javascript--v1.png",
  },
  {
    name: "TypeScript",
    icon: "https://img.icons8.com/color/344/typescript.png",
  },
  {
    name: "React JS",
    icon: "https://image.shutterstock.com/image-vector/react-native-icon-vector-atom-260nw-789136450.jpg",
  },
  {
    name: "Redux Toolkit",
    icon: "https://img.icons8.com/color/344/redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "https://img.icons8.com/color/344/tailwindcss.png",
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Riverhouse Technologies",
    icon: "https://riverhousetechnologies.com/wp-content/uploads/2021/09/cropped-Riverhouse-Logo-Icon-Light-1.png",
    iconBg: "#383E56",
    date: "April 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Sr. Frontend Developer(Web & Mobile)",
    company_name: "Simpact Online Services",
    icon: simpact,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - March 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Skill-lync",
    icon: skillync,
    iconBg: "#383E56",
    date: "Nov 2021 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Vishal proved me wrong.",
    name: "Ambarish Sharma",
    designation: "Backend Developer",
    company: "Simpact Online Services",
    image: "https://site.simpact.co.in/assets/home/img/team/ambrish.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Vishal does.",
    name: "Khilendra Lilhare",
    designation: "Senior Software Engineer",
    company: "Aanandi Software Pvt. Ltd.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Vishal optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Ashutosh Kumar Dewangan",
    designation: "CEO",
    company: "Simpact Online Services",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Yoom",
    description:
      "Built with the latest Next.js and TypeScript, this project replicates Zoom, a widely used video conferencing tool. It enables users to securely log in, create meetings and access various meeting functionalities such as recording, screen sharing, and managing participants.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: yoom,
    source_code_link: "https://github.com/vishal2819/vs-zoom_clone",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
