import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import covidSambarImg from "@/public/covidsambar.jpg";
import projectArinImg from "@/public/projectArin.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated college",
    location: "London, UK",
    description:
      "I studied Computer Science, Math, and Further Math at A-Levels.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Full Stack Developer Intern",
    location: "Watford, UK",
    description:
      "I worked as a full-stack developer for 1 year at Starleaf, a cloud video conference company.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Software Developer Apprentice",
    location: "London, UK",
    description:
      "I worked 2 years while studying a software development course at Softwire. I worked with clients such as Channel 5, Royal Pharmaceutical Society, and Air Charter Service",
    icon: React.createElement(FaReact),
    date: "2021 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Covid Sambar",
    description:
      "I created a dashboard tracking live data about the COVID pandemic in Mongolia from an API",
    tags: ["React", "MongoDB", "HTML", "CSS"],
    imageUrl: covidSambarImg,
  },
  {
    title: "Project Arin",
    description:
      "Landing page developed for an indie game release. It features a responsive design and form collection.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: projectArinImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Git",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Prisma",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Flask",
  "Ruby on Rails",
] as const;
