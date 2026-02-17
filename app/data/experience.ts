export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  badges: { name: string; colorScheme: string }[];
}

export const experiences: Experience[] = [
  {
    company: "Credit Suisse",
    position: "Technology Analyst",
    duration: "2022 - Present",
    description: "Leading development of enterprise trading applications with a focus on performance and reliability.",
    badges: [
      { name: "Java", colorScheme: "red" },
      { name: "Spring Boot", colorScheme: "green" },
      { name: "Kubernetes", colorScheme: "blue" },
    ],
  },
  {
    company: "NUS",
    position: "Teaching Assistant",
    duration: "2019 - 2021",
    description: "Teaching assistant for undergraduate computer science courses.",
    badges: [
      { name: "Java", colorScheme: "red" },
      { name: "Data Structures", colorScheme: "purple" },
    ],
  },
]
