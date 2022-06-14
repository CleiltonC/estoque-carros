import {
  Button,
  FormControl,
  // Checkbox,
  // FormControlLabel,
  FormLabel,
  MenuItem,
  Select,
  TextField,
  // Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const api = axios.create({
  baseURL: `http://localhost:3333/car/`,
});

const carsBbrand = [
  "Hyundai",
  "Ford",
  "Fiat",
  "Chevrolet",
  "Volksvagen",
  "Willys",
];

const AddCar = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    veiculo: "",
    marca: "",
    ano: "",
    descricao: "",
    img: "",
  });
  //const [checked, setChecked] = useState(false);

  const [selected, setSelected] = useState({ marca: "" });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };

  function handleChange2(e) {
    setSelected((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const sendRequest = async () => {
    await api
      .post("/", {
        veiculo: String(inputs.veiculo),
        marca: String(selected.marca),
        ano: Number(inputs.ano),
        descricao: String(inputs.descricao),
        // createdAt: Date(inputs.createdAt),
        // updateAt: Date(inputs.updateAt),
        //vendido: Boolean(checked),
        img: String(inputs.img),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(inputs);
    if (
      !inputs.veiculo ||
      !selected.marca ||
      !inputs.ano ||
      inputs.ano < 1886 ||
      !carsBbrand.includes(selected.marca)
    ) {
      alert(
        "Veiculo, marca e ano nao podem ser em branco, e ano deve ser maior que 1886"
      );
    } else {
      sendRequest().then(() => history("/car"));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
      >
        <FormLabel>Veiculo</FormLabel>
        <TextField
          value={inputs.veiculo}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          inputProps={{ name: "veiculo", id: "veiculo" }}
        />
        <FormControl>
          <FormLabel>Marca</FormLabel>
          <Select
            value={selected.marca}
            onChange={handleChange2}
            inputProps={{
              name: "marca",
              id: "marca",
            }}
          >
            {carsBbrand.map((value, index) => {
              return <MenuItem value={value}>{value}</MenuItem>;
            })}
          </Select>
        </FormControl>

        {/* <FormLabel>Marca</FormLabel>
        <TextField
          value={inputs.marca}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="marca"
        /> */}
        <FormLabel>Ano</FormLabel>
        <TextField
          value={inputs.ano}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="ano"
        />
        <FormLabel>Descricao</FormLabel>
        <TextField
          value={inputs.descricao}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="descricao"
        />
        <FormLabel>Imagem</FormLabel>
        <TextField
          value={inputs.img}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="img"
        />
        {/* <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        /> */}

        <Button variant="contained" type="submit">
          Add Car
        </Button>
      </Box>
    </form>
  );
};

export default AddCar;
