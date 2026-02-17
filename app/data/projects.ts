export interface Project {
  name: string;
  description: string;
  image: string;
  badges: { text: string; colorScheme: string }[];
  buttons: { text: string; href: string }[];
}

export const projects: Project[] = [
  {
    name: "Software Interview Xchange",
    description: "Collaboration service for those in the technology domain to practice their technical and communication skills through practicing LeetCode questions.",
    image: "/images/six.png",
    badges: [
      { text: "JavaScript", colorScheme: "teal" },
      { text: "Express", colorScheme: "teal" },
      { text: "React", colorScheme: "teal" },
      { text: "Python", colorScheme: "teal" },
      { text: "FastAPI", colorScheme: "teal" },
      { text: "MongoDB", colorScheme: "green" },
      { text: "MySQL", colorScheme: "green" },
      { text: "Docker", colorScheme: "orange" },
    ],
    buttons: [
      { text: "Explore", href: "https://github.com/CS3219-AY2223S1/cs3219-project-ay2223s1-g4" },
    ],
  },
  {
    name: "Rendr",
    description: "Regional champion solution for Customisable Report Rendering Problem Statement in Goldman Sachs' ENGage 2021.",
    image: "/images/rendr.png",
    badges: [
      { text: "Java", colorScheme: "teal" },
      { text: "Springboot", colorScheme: "teal" },
      { text: "JavaScript", colorScheme: "teal" },
      { text: "React", colorScheme: "teal" },
      { text: "Python", colorScheme: "teal" },
      { text: "MySQL", colorScheme: "green" },
      { text: "Docker", colorScheme: "orange" },
    ],
    buttons: [
      { text: "Explore", href: "https://github.com/MJKR-Tech/Rendr" },
    ],
  },
  {
    name: "TuitiONE",
    description: "Tuition management application for customer service officers.",
    image: "/images/tuitione.png",
    badges: [
      { text: "Java", colorScheme: "teal" },
      { text: "JavaFX", colorScheme: "teal" },
    ],
    buttons: [
      { text: "Explore", href: "https://ay2122s1-cs2103t-f13-4.github.io/tp/" },
    ],
  },
]
