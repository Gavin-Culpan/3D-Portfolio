import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
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
  culpan,
  bitcrunch,
  culpantech,
  empire,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js & Web Developer",
    company_name: "Culpantech",
    icon: culpantech,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Demonstrated proficiency in developing and maintaining robust web applications utilizing cutting-edge technologies such as React.js and other related platforms.",
      "Collaborated closely with cross-functional teams, including designers, product managers, and fellow developers, to create and deliver high-quality digital products and experiences.",
      "Implemented responsive design techniques to ensure optimal user experiences across a range of devices and platforms, while also ensuring cross-browser compatibility to maximize accessibility and reach.",
      "Actively participated in code reviews, offering constructive feedback and guidance to other developers, and continuously improving overall code quality and performance.",
    ],
  },
  {
    title: "Technical Recruiter",
    company_name: "Culpan",
    icon: culpan,
    iconBg: "#383E56",
    date: "March 2020 - Present",
    points: [
      "Achieved a record of success in recruiting high-caliber senior-level professionals, having successfully filled positions for Senior C#, Java, PHP, Senior Project Managers, and Delivery Managers within a six-month timeframe.",
      "Fostered strong and enduring relationships with both clients and candidates, leveraging exceptional communication and interpersonal skills to establish trust and mutual understanding.",
      "Employed a customized Customer Relationship Management (CRM) software solution to meticulously collect and analyze data, effectively optimizing the hiring process and streamlining operations.",
    ],
  },

  {
    title: "Verifications Officer",
    company_name: "Empire State Software",
    icon: empire,
    iconBg: "#383E56",
    date: "Jan 2021 - June 2022",
    points: [
      "Demonstrated expertise in verifying and managing complex international client data, utilizing rigorous data validation procedures and quality control measures to ensure accuracy and completeness.",
      "Maintained regular and effective communication with clients on a daily basis, providing timely updates, addressing queries and concerns, and ensuring a high level of customer satisfaction and engagement.",
      "Adhered to stringent KYC (Know Your Customer) procedures and regulatory requirements, ensuring compliance with relevant laws and standards, and mitigating potential risks and fraud.",
      "Utilized proprietary software solutions to generate and manage unique links for document submission, streamlining the documentation process and ensuring a high degree of security and confidentiality.",
    ],
  },
  {
    title: "Producer",
    company_name: "Bit Crunch Audio",
    icon: bitcrunch,
    iconBg: "#E6DEDD",
    date: "Jan 2012 - Present",
    points: [
      "Demonstrated strong management and audio production skills, overseeing all aspects of production, including website design and maintenance, audio sample sales, and mixing and mastering services.",
      "Provided expert audio production services, leveraging a broad range of creative and technical skills to help independent game developers achieve their full potential.",
      "Utilized expertise as a creative designer to provide clients with high-quality audio and video content, including audio mixing and mastering, and video editing for YouTube channels.",
      "Demonstrated excellent time-management skills and prioritization, taking periodic breaks while maintaining a high level of productivity and delivering exceptional results for clients.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Gavin proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Gavin does.",
    name: "Vlad Brykin",
    designation: "Data Analyst",
    company: "Some Company",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Gavin optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Netflix",
    description:
      "An updated version of Netflix with features such as Google login authentication, interface, and Stripe Payments integration for easy subscription management.",
    tags: [
      {
        name: "react",

        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Gavin-Culpan",
  },
  {
    name: "Recruiter Dashboard",
    description:
      "Enables recruiters to search for candidate openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    source_code_link: "https://github.com/Gavin-Culpan",
  },
  {
    name: "The News",
    description:
      "News website using Next.js 13, dynamic and static data updates, API search function, and a GraphQL interface with Typescript. Deployed on Vercel.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "graphQL",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Gavin-Culpan/news",
  },
];

export { services, technologies, experiences, testimonials, projects };
