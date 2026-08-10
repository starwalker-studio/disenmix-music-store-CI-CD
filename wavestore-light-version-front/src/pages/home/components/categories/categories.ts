interface ICAT_INDEX {
  id: number;
  img: string;
  label: string;
  link: string;
}

export const CAT_INDEX: ICAT_INDEX[] = [
  {
    id: 1,
    img: "http://localhost:8000/img/categories/ENCTEBGH.webp",
    label: "Guitars",
    link: "/shop/guitars",
  },
  {
    id: 2,
    img: "http://localhost:8000/img/categories/PBassAPR3SB.webp",
    label: "Bass",
    link: "/shop/basses",
  },

  {
    id: 3,
    img: "http://localhost:8000/img/categories/LM402.webp",
    label: "Drums & Percussion",
    link: "/shop/drums",
  },
  {
    id: 4,
    img: "http://localhost:8000/img/categories/M4WP006.webp",
    label: "Cables, Cases & More",
    link: "/shop/accessories",
  },
];
