const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: { type: String },
  category: { type: String },
  stock: { type: Number },
  envio_gratis: { type: Boolean },
  discount: { type: Number },
});
module.exports = mongoose.model("Products", productSchema);
