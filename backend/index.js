const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

const Car = require("./models/Car");

const app = express();

app.use(bodyparser.json());
app.use(cors());
//API routes
const carRoutes = require("./routes/carRoutes");

app.use("/car", carRoutes);

// initial route
app.get("/cars", (req, res) => {
  const body = req.body;
  console.log(body);

  const cars = {
    fiat: "uno",
    ford: "ka",
  };
  res.send(cars);
});

//NDZ5DV4iHKpgduCx
// mongodb+srv://fccs:NDZ5DV4iHKpgduCx@clusterapi.lnhoe.mongodb.net/carsdb?retryWrites=true&w=majority

const DB_USER = "fccs";
const DB_PASS = encodeURIComponent("NDZ5DV4iHKpgduCx");

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@clusterapi.lnhoe.mongodb.net/carsdb?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3333, () => console.log("running server"));
  })
  .catch((err) => console.log(err));
