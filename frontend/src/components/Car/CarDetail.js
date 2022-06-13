import { Box, Button, FormLabel, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const api = axios.create({
  baseURL: `http://localhost:3333/car/`,
});

const CarDetail = () => {
  const [inputs, setInputs] = useState({
    veiculo: "",
    marca: "",
    ano: "",
    descricao: "",
    img: "",
  });
  const id = useParams().id;
  const history = useNavigate();

  const sendRequest = async () => {
    await api
      .patch(`/${id}`, {
        veiculo: String(inputs.veiculo),
        marca: String(inputs.marca),
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
    sendRequest().then(() => history("/car"));
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {inputs && (
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
              name="veiculo"
            />
            <FormLabel>Marca</FormLabel>
            <TextField
              value={inputs.marca}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="marca"
            />
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
            <FormLabel>descricao</FormLabel>
            <TextField
              value={inputs.descricao}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="descricao"
            />
            <FormLabel>Image</FormLabel>
            <TextField
              value={inputs.img}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="img"
            />
            <Button variant="contained" type="submit">
              Update Car
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default CarDetail;
