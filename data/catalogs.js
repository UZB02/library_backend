import books from "../data/books.js";
const catalogs = [
  {
    id: 1,
    title: "Sheriyat",
    categori_id: 1,
    books: books.filter((item) => item.catalog_id === 1).length,
    audiobooks: books.filter(
      (item) => item.catalog_id === 1 && item.tipe === "audio"
    ).length,
    book: books.filter((item) => item.catalog_id === 1 && item.tipe === "file")
      .length,
  },
  {
    id: 2,
    title: "Fantastik",
    categori_id: 1,
    books: books.filter((item) => item.catalog_id === 2).length,
    audiobooks: books.filter(
      (item) => item.catalog_id === 2 && item.tipe === "audio"
    ).length,
    book: books.filter((item) => item.catalog_id === 2 && item.tipe === "file")
      .length,
  },
  {
    id: 3,
    title: "Roman",
    categori_id: 2,
    books: books.filter((item) => item.catalog_id === 3).length,
    audiobooks: books.filter(
      (item) => item.catalog_id === 3 && item.tipe === "audio"
    ).length,
    book: books.filter((item) => item.catalog_id === 3 && item.tipe === "file")
      .length,
  },
  {
    id: 4,
    title: "Fantastik",
    categori_id: 3,
    books: books.filter((item) => item.catalog_id === 4).length,
    audiobooks: books.filter(
      (item) => item.catalog_id === 4 && item.tipe === "audio"
    ).length,
    book: books.filter((item) => item.catalog_id === 4 && item.tipe === "file")
      .length,
  },
  {
    id: 5,
    title: "Mashxat",
    categori_id: 1,
    books: books.filter((item) => item.catalog_id === 5).length,
    audiobooks: books.filter(
      (item) => item.catalog_id === 5 && item.tipe === "audio"
    ).length,
    book: books.filter((item) => item.catalog_id === 5 && item.tipe === "file")
      .length,
  },
];

export default catalogs;
