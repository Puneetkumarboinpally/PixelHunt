type CollectionStructure = {
  img: string;
};
export type Course = {
  id: number;
  image: string;
  title: string;
  description: string;
};

export const Products: string[] = [
  "Nike",
  "Adidas",
  "Reebok",
  "Puma",
  "Under Armour",
  "Hoka",
  "Brooks",
  "On",
  "New Balance",
  "Gucci",
  "Prada",
  "Louis Vuitton",
  "Off White",
  "Uniqlo",
  "Balenciaga",
];

export const Collections: CollectionStructure[] = [
  {
    img: "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFtYm9yZ2hpbml8ZW58MHx8MHx8fDA%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1621285853634-713b8dd6b5fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbWJvcmdoaW5pfGVufDB8fDB8fHww",
  },
  {
    img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGxhbWJvcmdoaW5pfGVufDB8fDB8fHww",
  },
  {
    img: "https://images.unsplash.com/photo-1570829174962-38c53efc5e5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGxhbWJvcmdoaW5pfGVufDB8fDB8fHww",
  },
  {
    img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGxhbWJvcmdoaW5pfGVufDB8fDB8fHww",
  },
];

export const courses: Course[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Web Development",
    description:
      "Learn HTML, CSS, JavaScript and build modern responsive websites from scratch.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    title: "React.js",
    description:
      "Build interactive web applications using React, components, hooks and state management.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    title: "UI/UX Design",
    description:
      "Learn the fundamentals of user interface and user experience design for modern products.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    title: "Python Programming",
    description:
      "Master Python fundamentals and learn how to create useful applications and automation.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    title: "Data Analytics",
    description:
      "Learn how to analyze data, create visualizations and discover meaningful insights.",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    title: "Cloud Computing",
    description:
      "Understand cloud technologies, deployment and the fundamentals of modern cloud infrastructure.",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28",
    title: "TypeScript",
    description:
      "Learn type-safe JavaScript with TypeScript and build more reliable modern applications.",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    title: "Machine Learning",
    description:
      "Explore machine learning concepts and learn how to build intelligent data-driven applications.",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    title: "Digital Marketing",
    description:
      "Learn SEO, social media, content marketing and strategies for growing an online business.",
  },
];
