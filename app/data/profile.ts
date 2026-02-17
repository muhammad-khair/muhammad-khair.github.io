export interface Education {
  institution: string;
  degree: string;
  duration: string;
  description: string;
  achievements: string[];
}

export interface SkillCategory {
  name: string;
  type: 'language' | 'database' | 'infrastructure';
}

export interface Profile {
  name: string;
  headerName: string;
  headerRole: string;
  about: string;
  skills: SkillCategory[];
  education: Education[];
  linkedin: string;
  github: string;
  email: string;
}

export const profile: Profile = {
  name: "Muhammad Khair",
  headerName: "Hi, I'm Khair",
  headerRole: "Software Engineer",
  about: "Engineer with experience developing distributed, low-latency systems that process financial data with precision and reliability. Enjoys learning from every challenge and collaborating to find smarter, more impactful solutions. Believes that strong systems (and teams) are built through curiosity, iteration, and shared understanding.",
  skills: [
    // Languages
    { name: "Kotlin", type: "language" },
    { name: "Java", type: "language" },
    { name: "Python", type: "language" },
    { name: "JavaScript", type: "language" },
    // Databases
    { name: "MongoDB", type: "database" },
    { name: "MySQL", type: "database" },
    // Infrastructure
    { name: "Docker", type: "infrastructure" },
    { name: "Linux", type: "infrastructure" },
    { name: "React", type: "infrastructure" },
    { name: "FastAPI", type: "infrastructure" },
    { name: "Springboot", type: "infrastructure" },
  ],
  education: [
    {
      institution: "National University of Singapore",
      degree: "Bachelor (Honours) of Computing, Computer Science",
      duration: "Graduated in 2023",
      description: "Specialised in Security, Software Engineering, and Distributed Systems.",
      achievements: [
        "NUS Merit Scholar",
        "Taught Python and Java to 200+ students",
        "Honour List of Student Tutors"
      ]
    }
  ],
  linkedin: "https://www.linkedin.com/in/muhammadkhair-binabdulrashid/",
  github: "https://github.com/muhammad-khair",
  email: "muhammad_khair@outlook.com",
}
