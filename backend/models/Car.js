const { default: mongoose } = require("mongoose");

const Car = mongoose.model("Car", {
  id: Number,
  img: String,
  veiculo: String,
  marca: String,
  ano: Number,
  descricao: String,
  vendido: Boolean,
  created: Date,
  updated: Date,
});

module.exports = Car;
