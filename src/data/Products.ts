type CollectionStructure = {
  img: string;
};
export type CarouselItem = {
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

export const carouselData: CarouselItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    title: "Modern Workspace",
    description:
      "Create a productive environment with a clean and modern workspace.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    title: "Cozy Living",
    description:
      "Transform your living space into a comfortable and welcoming home.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
    title: "Interior Design",
    description:
      "Discover inspiring interiors designed with style and functionality.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    title: "Elegant Spaces",
    description: "Bring elegance and character to every corner of your home.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1615874694520-474822394e73",
    title: "Natural Comfort",
    description:
      "Combine natural materials and warm tones for a relaxing atmosphere.",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1617104678098-de229db51175",
    title: "Minimal Style",
    description:
      "Keep things simple with a minimalist approach to modern interiors.",
  },
];
