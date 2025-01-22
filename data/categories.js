import books from "../data/books.js";
const categories = [
  {
    id: 1,
    name: "O'zbek adabiyoti",
    books: books.filter(
      (item) => item.category_id === 1 && item.tipe === "file"
    ).length,
    audiobooks: books.filter(
      (item) => item.category_id === 1 && item.tipe === "audio"
    ).length,
    img: "https://api.kitob.itsm.uz/data/genres/cover/3.png",
  },
  {
    id: 2,
    name: "Jahon adabiyoti",
    books: books.filter(
      (item) => item.category_id === 2 && item.tipe === "file"
    ).length,
    audiobooks: books.filter(
      (item) => item.category_id === 2 && item.tipe === "audio"
    ).length,
    img: "https://api.kitob.itsm.uz/data/genres/cover/12.png",
  },
  {
    id: 3,
    name: "Bolalar uchun",
    books: books.filter(
      (item) => item.category_id === 3 && item.tipe === "file"
    ).length,
    audiobooks: books.filter(
      (item) => item.category_id === 3 && item.tipe === "audio"
    ).length,
    img: "https://api.kitob.itsm.uz/data/genres/cover/236.png",
  },
];

export default categories;
