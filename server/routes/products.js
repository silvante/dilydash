const express = require("express");
const mongoose = require("mongoose");

// middlewares system
const route = express.Router();
route.use(express.json());
const commentsSchema = require("./Comments");
const propertiesSchema = require("./ProductProperties");

// schema
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: "product",
    required: true,
  },
  properties: [propertiesSchema],
  price: {
    type: Number,
    required: true,
  },
  comments: [commentsSchema],
  adress: {
    type: String,
    required: true,
    maxlength: 80,
  },
  descriptions: {
    type: String,
    default: "this product has no description...",
  },
  shortly: {
    type: String,
    default: "this product has no shortly...",
  },
  inTheCard: {
    type: Boolean,
    default: false,
  },
  saved: {
    type: Boolean,
    default: false,
  },
  countProduct: {
    type: Number,
    default: 1,
  },
  reservation: {
    type: Number,
    default: 1,
  },
  rating: {
    type: Number,
    default: 1,
  },
});

const Product = mongoose.model("product", productSchema);

route.get("/", async (req, res) => {
  const products = await Product.find().sort({ name: 1 });
  res.send(products);
});

// Crud mothods
// Create mohod

route.post("/", async (req, res) => {
  try {
    if (!req.body.name) {
      res.send(`"name" is required...`);
    }
    if (!req.body.category) {
      res.send(`"category" is required...`);
    }
    if (!req.body.price) {
      res.send(`"price" is required...`);
    }
    if (!req.body.adress) {
      res.send(`"adress" is required...`);
    }

    let product = new Product({
      name: req.body.name,
      adress: req.body.adress,
      category: req.body.category,
      price: req.body.price,
      descriptions: req.body.descriptions,
      shortly: req.body.shortly,
      inTheCard: req.body.inTheCard,
      saved: req.body.saved,
      reservation: req.body.reservation,
      countProduct: req.body.countProduct,
      rating: req.body.rating,
    });

    product = await product.save();
    res.status(201).send(product);
  } catch (error) {
    console.log(`server bilan hatolik yuz berdi: ${error}`);
  }
});

// cRud mothods
// Read mothod

route.get(":id", async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      res.status(400).send(`"id" is required...`);
    }
    const found = await Product.find({ _id: productId });
    if (!found) {
      res.status(404).send("product is not found...");
    }
    res.status(200).send(found);
  } catch (error) {
    console.log(`hatolik yuz berdi:${error}`);
  }
});

// crUd mothods
// Update mothod

// cruD mothods
// delete mothod
route.delete(":id", async (req, res) => {
  try {
    const productId = req.params.id;
    const deleting = await Product.findByIdAndDelete({ _id: productId });

    if (!deleting) {
      res.status(404).send("Product is not defined...");
      console.log("Product is not defined...");
    }
  } catch (error) {
    console.log(`server bilan hatolik yuz berdi:${error}`);
  }
});

module.exports = route;
