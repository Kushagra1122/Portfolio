import { BsFiletypeHtml, BsFiletypeCss } from "react-icons/bs";
import { FaNodeJs, FaPython, FaGitAlt, FaBolt, FaCog } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiJavascript,
  SiReact,
  SiMongodb,
  SiTypescript,
  SiExpress,
  SiCplusplus,
  SiPostgresql,
  SiWebrtc,
  SiSolidity,
  SiDjango,
  SiDocker,
  SiRedis,
  SiNginx,
  SiAmazonaws,
  SiFirebase,
  SiGooglecloud,
} from "react-icons/si";
import { MdApi, MdPsychology } from "react-icons/md";

const CATEGORIES = [
  "Languages",
  "Frontend",
  "Backend & APIs",
  "AI / ML",
  "Databases & Cloud",
  "DevOps & Testing",
];

// Generic icons for items without a direct brand icon
const SiGeneric = FaBolt;
const SiGeneric2 = FaCog;
const SiGeneric3 = MdPsychology;

export const List = [
  // Languages
  { _id: 1, name: "JavaScript", icon: SiJavascript, category: "Languages" },
  { _id: 2, name: "TypeScript", icon: SiTypescript, category: "Languages" },
  { _id: 3, name: "Python", icon: FaPython, category: "Languages" },
  { _id: 4, name: "C++", icon: SiCplusplus, category: "Languages" },
  { _id: 5, name: "SQL", icon: SiPostgresql, category: "Languages" },
  { _id: 6, name: "Solidity", icon: SiSolidity, category: "Languages" },
  // Frontend
  { _id: 7, name: "React", icon: SiReact, category: "Frontend" },
  { _id: 8, name: "Next.js", icon: TbBrandNextjs, category: "Frontend" },
  { _id: 9, name: "HTML", icon: BsFiletypeHtml, category: "Frontend" },
  { _id: 10, name: "CSS", icon: BsFiletypeCss, category: "Frontend" },
  // Backend & APIs
  { _id: 11, name: "Node.js", icon: FaNodeJs, category: "Backend & APIs" },
  { _id: 12, name: "Express", icon: SiExpress, category: "Backend & APIs" },
  { _id: 13, name: "Django", icon: SiDjango, category: "Backend & APIs" },
  { _id: 14, name: "FastAPI", icon: FaBolt, category: "Backend & APIs" },
  { _id: 15, name: "REST", icon: MdApi, category: "Backend & APIs" },
  { _id: 16, name: "WebSockets", icon: SiGeneric, category: "Backend & APIs" },
  { _id: 17, name: "WebRTC", icon: SiWebrtc, category: "Backend & APIs" },
  // AI / ML
  { _id: 18, name: "LangChain", icon: SiGeneric3, category: "AI / ML" },
  { _id: 19, name: "LangGraph", icon: SiGeneric3, category: "AI / ML" },
  { _id: 20, name: "RAG", icon: SiGeneric3, category: "AI / ML" },
  { _id: 21, name: "LLM APIs", icon: SiGeneric3, category: "AI / ML" },
  { _id: 22, name: "Whisper", icon: SiGeneric3, category: "AI / ML" },
  { _id: 23, name: "Embeddings", icon: SiGeneric3, category: "AI / ML" },
  // Databases & Cloud
  { _id: 24, name: "MongoDB", icon: SiMongodb, category: "Databases & Cloud" },
  { _id: 25, name: "PostgreSQL", icon: SiPostgresql, category: "Databases & Cloud" },
  { _id: 26, name: "Redis", icon: SiRedis, category: "Databases & Cloud" },
  { _id: 27, name: "Firebase", icon: SiFirebase, category: "Databases & Cloud" },
  { _id: 28, name: "GCS", icon: SiGooglecloud, category: "Databases & Cloud" },
  // DevOps & Testing
  { _id: 29, name: "Docker", icon: SiDocker, category: "DevOps & Testing" },
  { _id: 30, name: "CI/CD", icon: SiGeneric2, category: "DevOps & Testing" },
  { _id: 31, name: "Nginx", icon: SiNginx, category: "DevOps & Testing" },
  { _id: 32, name: "Git", icon: FaGitAlt, category: "DevOps & Testing" },
  { _id: 33, name: "AWS EC2", icon: SiAmazonaws, category: "DevOps & Testing" },
  { _id: 34, name: "System Design", icon: SiGeneric2, category: "DevOps & Testing" },
];

export const categoryOrder = CATEGORIES;
