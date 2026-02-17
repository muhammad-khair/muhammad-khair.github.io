export interface Profile {
  name: string;
  headerName: string;
  headerRole: string;
  headerDesc: string;
  about: string;
  skills: string[];
  linkedin: string;
  github: string;
  email: string;
}

export const profile: Profile = {
  name: "Muhammad Khair",
  headerName: "Hi, I'm Khair",
  headerRole: "Software Engineer",
  headerDesc: "Building robust software solutions in the financial sector",
  about: "Experienced Technology Analyst with a passion for building robust software solutions in the financial sector. Driven by a desire to continuously learn and adapt to new challenges, thrives in innovative and collaborative environments.",
  skills: [
    "Java", "TypeScript", "Python", "React", "Node.js",
    "AWS", "Docker", "Kubernetes", "SQL", "Git"
  ],
  linkedin: "https://www.linkedin.com/in/muhammadkhair-binabdulrashid/",
  github: "https://github.com/muhammad-khair",
  email: "muhammad_khair@outlook.com",
}
