import express from "express";
import cors from "cors";
const app = express();
import { create, getCatalog, getCatalogById } from "./moduls/catalogs.js";
import { getCategories, getCategoriesById } from "./moduls/category.js";
import { getBooks } from "./moduls/books.js";
import { getAdmins, getAdmin, adminLogin } from "./moduls/admins.js";

app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server ${port} da ishga tushdi`);
});

app.get("/", (req, res) => {
  res.send("Server ishga tushdi");
});

app.get("/api/categories", getCategories);

app.get("/api/books", getBooks);

app.get("/api/catalogs", getCatalog);

app.get("/api/catologs/:id", getCatalogById);

app.get("/api/categories/:slug/:id", getCategoriesById);

app.get("/api/admins", getAdmins);

app.get("/api/admin/:token", getAdmin);

app.post("/api/admin/login", cors(), adminLogin);

app.post("/api/addcatalog", create);
