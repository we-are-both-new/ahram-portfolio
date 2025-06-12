// [Common] Nav List
export const navList = {
  "/": { name: "home" },
  "/about": { name: "about" },
  "/project": { name: "project" },
  "/voice": { name: "voice" },
};

// [Home] Gallery List
export const galleryList = [
  { id: 1, src: "/images/home/mongol.jpg", alt: "몽골" },
  { id: 2, src: "/images/home/spring.jpg", alt: "영종도" },
  { id: 3, src: "/images/home/hongkong-2.jpg", alt: "홍콩 " },
  { id: 4, src: "/images/home/mongol-2.jpg", alt: "몽골" },
  { id: 5, src: "/images/home/jeju.jpg", alt: "한라산" },
  { id: 6, src: "/images/home/lv.jpg", alt: "라스베가스 그랜드캐년" },
];

// [About] Profile
export const profile = {
  photo: "/images/home/profile.jpg",
  phone: "010-****-****",
  email: "ahram0223@naver.com",
  github: "https://github.com/byahram",
  location: "서울 서대문구",
};

// [About] Education List
export const educationList = [
  {
    id: 3,
    college: "Boise State University",
    location: "Boise, ID",
    degree: "B.S.",
    major: "Computer Science",
    gpa: "3.34/4.0",
    status: "졸업",
    duration: {
      from: "2016.01",
      to: "2018.12",
    },
  },
  {
    id: 2,
    college: "Santa Monica College",
    location: "Santa Monica, CA",
    degree: "A.A.",
    major: "Accounting",
    gpa: "3.54/4.0",
    status: "편입",
    duration: {
      from: "2015.01",
      to: "2015.12",
    },
  },
];

// [About] Skills List
export const skillsList = {
  technical: {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "React",
      "Next.js",
      "TailwindCSS",
    ],
    data: ["Python", "Jupyter", "Pandas", "Numpy"],
    tools: ["VSCode", "IntelliJ", "Postman", "Git", "Github"],
  },
  soft: [
    "Effective Communication",
    "Smart Collaboration",
    "Easy Adaptability",
    "Time Management",
    "Problem Solving",
    "Creativity & Innovations",
  ],
};

// [About] Certification List
export const certificationList = [
  {
    id: 6,
    name: "정보처리기사",
    organized: "한국산업인력공단",
    date: "2024.09",
  },
  {
    id: 5,
    name: "SQL 개발자",
    organized: "한국데이터산업진흥원",
    date: "2023.12",
  },
  {
    id: 4,
    name: "웹디자인기능사",
    organized: "한국산업인력공단",
    date: "2023.09",
  },
];

// [Project] Tech Stack Options
export const techStackOptions = [
  "React",
  "Next.js",
  "Vue",
  "Nuxt.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Tailwindcss",
];
