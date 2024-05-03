const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const products = require("./routes/products");

// app

const app = express();
app.set("view engine", "pug");

// midlewares system
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost/dily")
  .then(() => {
    console.log("mongodb ga ulandi...");
  })
  .catch(() => {
    console.log("mongodb ga ulanish vaqtida hatolik yuz berdi...");
  });

const port = process.env.PORT || 5588;
app.listen(port, () => {
  console.log(`port nomi localhost:${port}...`);
});

// routes
const productsRoute = "/api/products";

// route midleware works
app.use(productsRoute, products);

// home route
app.get("/", (req, res) => {
  res.send(`welcome to dily server: \n\n
  products: ${productsRoute}`);
});
