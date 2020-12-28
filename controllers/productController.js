class ProductController {
  constructor(productService) {
    this.productService = productService;
  }
  async getProduct(req, res) {
    const query = await this.productService.getProduct();
    res.send(query);
  }

  async getId(req, res) {
    const prdId = req.params.id;
    const query = await this.productService.getId(prdId);
    res.send(query);
  }

  async getFreeShip(req, res) {
    //const dataShip = true;
    const query = await this.productService.getFreeShip();
    res.send(query);
  }

  async addProduct(req, res) {
    const { body } = req;
    const query = await this.productService.addProduct(body);
    res.send(query);
  }

  async updatePrd(req, res) {
    const { body } = req;
    const id = req.params.id;
    const query = await this.productService.updatePrd(id, body);
    res.send(query);
  }

  async addDiscount(req, res) {
    const disc = {
      discount: 0,
    };

    const query = await this.productService.addDiscount(disc);
    console.log(query);
    res.send("se agrego discount");
  }
}

module.exports = ProductController;
