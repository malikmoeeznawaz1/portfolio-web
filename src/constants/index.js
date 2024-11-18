import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of experience, I have worked with a variety of technologies, including React, Node.js, MySQL, PostgreSQL, and MongoDB. I also done a internship in Machine Learning. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "June 2023 - July 2023",
    role: "Internee - Machine Learning",
    company: "UET Lahore New Campus.",
    description: `Understanding the fundamental concepts and principles of Machine Learning is essential, including the foundations of supervised and unsupervised learning. This involves exploring and implementing various classification algorithms such as K-Nearest Neighbors, Naïve Bayes, Support Vector Machines, and Decision Trees, as well as studying clustering techniques like K-means and hierarchical clustering. Additionally, applying data cleaning techniques enhances dataset quality, ensuring better analysis and model performance.`,
    technologies: ["Python", "ML Algorithms", "Pandas", "Numpy", "sklearn", "matplotlib"],
  },
  {
    role: "Freelancer",
    company: "Fiverr",
    description: `Developed and delivered web applications with a focus on JavaScript, React.js, and Node.js. Designed and optimized database solutions using MongoDB to ensure efficient data handling. Collaborated with clients to gather requirements, prioritize features, and deliver tailored solutions. Additionally working on cpp, python, java.`,
    technologies: ["JavaScript", "React.js", "Node.js", "MongoDB", "C++", "Python", "java"],  
    year: "2024 - Present",
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A visually appealing and responsive portfolio website showcasing personal projects and skills. Includes animations for enhanced user experience.",
    technologies: ["HTML", "Tailwind CSS", "React", "Framer Motion"],
  },  
  {
    title: "Fitness Blender Website - Clone",
    image: project2,
    description:
      "A responsive clone of the Fitness Blender website, featuring an intuitive design and interactive elements to mimic the original functionality.",
    technologies: ["HTML", "Bootstrap CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
