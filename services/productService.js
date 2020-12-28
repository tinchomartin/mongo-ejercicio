const Product = require("./../models/productModel");

class ProductService {
  getProduct(data) {
    const query = Product.find().exec();
    //   Product.find().limit(data).exec();
    return query;
  }

  getId(data) {
    const prodId = Product.findById(data);
    return prodId;
  }

  addProduct(product) {
    const newProduct = new Product(product);
    return newProduct.save();
  }

  updatePrd(id, data) {
    const product = Product.findOneAndUpdate({ _id: id }, data).exec();
    return product;
  }
  getFreeShip() {
    const query = Product.find({ envio_gratis: true }).exec();
    return query;
  }

  addDiscount(data) {
    const query = Product.updateMany(data).exec();
    return query;
  }
}

module.exports = ProductService;
