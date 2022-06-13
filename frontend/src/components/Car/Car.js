import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Car.css";

const api = axios.create({
  baseURL: `http://localhost:3333/car/`,
});

const Car = (props) => {
  const history = useNavigate();
  const {
    _id,
    img,
    veiculo,
    marca,
    ano,
    descricao,
    vendido,
    createdAt,
    updateAt,
  } = props.car;
  const deleteHandler = async () => {
    await api
      .delete(`/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/car"));
  };

  return (
    <div className="card">
      <img src={img ? img : ""} alt={veiculo} />
      <article>Marca: {marca}</article>
      <h3>{veiculo}</h3>
      <h3>{ano}</h3>
      <p>{descricao}</p>
      <p>{vendido ? "vendido" : "em estoque"}</p>
      <Button LinkComponent={Link} to={`/car/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Car;
