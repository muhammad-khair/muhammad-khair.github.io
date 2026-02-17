export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  image?: string;
  badges: { name: string; colorScheme: string }[];
}

export const experiences: Experience[] = [
  {
    company: "UBS",
    position: "Software Engineer",
    duration: "Feb 2025 - Present",
    description: "Building high-availability financial data services that integrate multiple upstream sources for Wealth Management systems with sub-second response times and 99.999% availability.",
    image: "/images/ubs.png",
    badges: [
      { name: "Kotlin", colorScheme: "purple" },
    ],
  },
  {
    company: "UBS",
    position: "Graduate Software Engineer",
    duration: "Jun 2024 - Jan 2025",
    description: "Developed trading gateway simulation frameworks and test suites for APAC markets, improving reliability and reducing costs of in-house trading solutions.",
    image: "/images/ubs.png",
    badges: [
      { name: "Python", colorScheme: "blue" },
      { name: "Linux", colorScheme: "yellow" },
    ],
  },
  {
    company: "Credit Suisse",
    position: "Graduate Software Engineer",
    duration: "Feb 2023 - May 2024",
    description: "Re-engineered legacy product data pipelines into microservices and live-streaming systems, cutting licensing costs and boosting onboarding efficiency.",
    image: "/images/creditsuisse.png",
    badges: [
      { name: "Kotlin", colorScheme: "purple" },
      { name: "Python", colorScheme: "blue" },
    ],
  },
  {
    company: "Credit Suisse",
    position: "Software Engineer (Internship)",
    duration: "May 2022 - Jul 2022",
    description: "Automated dependency patching and monitoring with Ansible and Grafana, strengthening system stability across legacy applications.",
    image: "/images/creditsuisse.png",
    badges: [
      { name: "Python", colorScheme: "blue" },
      { name: "Java", colorScheme: "red" },
    ],
  },
  {
    company: "TAIGER",
    position: "Software Engineer (Internship)",
    duration: "May 2021 - Aug 2021",
    description: "Enhanced enterprise search by enabling AI-driven keyword customization and automating release workflows for client deployments.",
    image: "/images/taiger.png",
    badges: [
      { name: "Java", colorScheme: "red" },
      { name: "MySQL", colorScheme: "blue" },
      { name: "Python", colorScheme: "blue" },
    ],
  },
]
