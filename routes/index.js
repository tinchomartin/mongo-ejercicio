const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/productController");
const ProductService = require("../services/productService");
const ProductInstance = new ProductController(new ProductService());

const UserController = require("../controllers/userController");
const UserService = require("../services/userService");
const UserInstance = new UserController(new UserService());
/* GET home page. */
router.get("/products", function (req, res, next) {
  ProductInstance.getProduct(req, res);
});

router.get("/products/:id", function (req, res) {
  ProductInstance.getId(req, res);
});

router.get("/products/list/freeshippment", function (req, res) {
  ProductInstance.getFreeShip(req, res);
});

router.post("/products", function (req, res) {
  ProductInstance.addProduct(req, res);
});

router.put("/modify/:id", function (req, res) {
  ProductInstance.updatePrd(req, res);
});

router.put("/products/discount", function (req, res) {
  ProductInstance.addDiscount(req, res);
});

router.get("/users", function (req, res, next) {
  UserInstance.getUser(req, res);
});

router.get("/users/:id", function (req, res) {
  UserInstance.getUserId(req, res);
});

router.post("/users", function (req, res) {
  UserInstance.addUser(req, res);
});

module.exports = router;
