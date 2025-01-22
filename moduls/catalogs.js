import books from "../data/books.js";
import catalogs from "../data/catalogs.js";
async function create(req, res) {
  try {
    if (req.body.title || req.body.categori_id) {
      const { title, categori_id } = req.body;
      const newCatalog = {
        id: catalogs.length + 1,
        title,
        categori_id,
        books: books.filter((item) => item.catalog_id === 5).length,
        audiobooks: books.filter(
          (item) => item.catalog_id === 5 && item.tipe === "audio"
        ).length,
        book: books.filter(
          (item) => item.catalog_id === 5 && item.tipe === "file"
        ).length,
      };
      catalogs.push(newCatalog);
      res.send(newCatalog);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

async function getCatalog(req, res) {
  res.send(catalogs);
}

async function getCatalogById(req, res) {
  const { id } = req.params;
  const catalog = catalogs.filter((c) => c.categori_id === parseInt(id));
  res.send(catalog);
}

export { create, getCatalog, getCatalogById };
