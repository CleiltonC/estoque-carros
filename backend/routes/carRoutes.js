const router = require("express").Router();

const Car = require("../models/Car");

// Create
router.post("/", async (req, res) => {
  // req.body
  const {
    id,
    img,
    veiculo,
    marca,
    ano,
    descricao,
    vendido = false,
    created = new Date(),
    updated = new Date(),
  } = req.body;

  if (!veiculo || !marca || !ano) {
    res.status(422).json({ erro: "O veiculo, marca e ano são obrigatórios" });
    return;
  }

  const car = {
    id,
    img,
    veiculo,
    marca,
    ano,
    descricao,
    vendido,
    created,
    updated,
  };

  try {
    await Car.create(car);

    res.status(201).json({ message: "Car inserted" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Read - get all records
router.get("/", async (req, res) => {
  const ano = req.query.ano;
  const marca = req.query.marca;
  try {
    const cars = await Car.find();

    const results = ano
      ? await Car.find({ ano: ano })
      : marca
      ? await Car.find({ marca: marca })
      : cars;
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// read - get car by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const car = await Car.find({ _id: id });
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Update - Update a record
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const {
    img,
    veiculo,
    marca,
    ano,
    descricao,
    vendido,
    created,
    updated = new Date(),
  } = req.body;

  const car = {
    img,
    veiculo,
    marca,
    ano,
    descricao,
    vendido,
    created,
    updated,
  };

  try {
    const updatedCar = await Car.updateOne({ _id: id }, car);

    if (updatedCar.matchedCount === 0) {
      res.status(422).json({ erro: "O veiculo, marca e ano são obrigatórios" });
      return;
    }

    res.status(200).json(car);
  } catch (error) {
    req.status(500).json({ error: error });
  }
});

// Delete - To delete a single car
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const car = await Car.findOne({ _id: id });

  if (!car) {
    res.status(422).json({ erro: "O veiculo não existe na base de dados" });
    return;
  }

  try {
    await Car.deleteOne({ _id: id });

    res.status(200).json({ message: "Usuário removido com sucesso!" });
  } catch (error) {
    req.status(500).json({ error: error });
  }
});

module.exports = router;
