
import React from 'react';
import { Project, SkillCategory, EducationItem, ExperienceItem } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Java', 'Python'],
  },
  {
    title: 'Database',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Tools',
    skills: ['Git & GitHub', 'VS Code', 'Postman', 'Vercel'],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Academic Management System',
    description: 'A comprehensive web application designed to manage student records, course enrollments, and grading systems for educational institutions.',
    technologies: ['React', 'Node.js', 'Express', 'MySQL'],
  },
  {
    title: 'Personal Finance Tracker',
    description: 'A responsive dashboard for tracking daily expenses and income with visual data representations using charts.',
    technologies: ['JavaScript', 'Chart.js', 'HTML5', 'CSS3'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Current University Name',
    period: '2023 - Present',
    description: 'Focusing on advanced software development, algorithm design, and modern web technologies.',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Previous College Name',
    period: '2020 - 2023',
    description: 'Graduated with Distinction. Specialized in core computing concepts and application development.',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Web Development Intern',
    company: 'Tech Solutions Pvt Ltd',
    period: 'Summer 2023 (3 Months)',
    description: 'Assisted in developing UI components for client websites and performed bug fixes in existing codebase.',
  },
];

export const CERTIFICATIONS = [
  'Full Stack Web Development - Coursera',
  'JavaScript Algorithms and Data Structures - FreeCodeCamp',
  'Advanced CSS and Sass - Udemy',
];
