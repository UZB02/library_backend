import categories from "../data/categories.js";
import books from "../data/books.js";
async function getCategories(req, res) {
  res.send(categories);
}

async function getCategoriesById(req, res) {
  const { id, slug } = req.params;
  const book = books.filter(
    (b) => b.category_id === parseInt(slug) && b.catalog_id === parseInt(id)
  );
  res.send(book);
}

export { getCategories, getCategoriesById };
