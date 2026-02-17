export interface Project {
  name: string;
  description: string;
  image: string;
  badges: { text: string; colorScheme: string }[];
  buttons: { text: string; href: string }[];
}

export const projects: Project[] = [
  {
    name: "TuitionE",
    description: "A platform connecting students with tutors for personalized learning.",
    image: "/images/tuitione.png",
    badges: [
      { text: "React", colorScheme: "blue" },
      { text: "Node.js", colorScheme: "green" },
    ],
    buttons: [
      { text: "View", href: "#" },
    ],
  },
  {
    name: "Rendr",
    description: "A modern rendering engine for real-time graphics applications.",
    image: "/images/rendr.png",
    badges: [
      { text: "WebGL", colorScheme: "pink" },
      { text: "TypeScript", colorScheme: "blue" },
    ],
    buttons: [
      { text: "View", href: "#" },
    ],
  },
  {
    name: "Taiger",
    description: "AI-powered document processing and extraction platform.",
    image: "/images/taiger.png",
    badges: [
      { text: "Python", colorScheme: "yellow" },
      { text: "ML", colorScheme: "purple" },
    ],
    buttons: [
      { text: "View", href: "#" },
    ],
  },
]
