import books from "../data/books.js";

async function getBooks(req, res) {
  res.send(books);
}

export { getBooks };
