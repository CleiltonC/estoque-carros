import React, { useEffect, useState } from "react";
import "./Car.css";
import axios from "axios";
import Car from "./Car";

const api = axios.create({
  baseURL: `http://localhost:3333/car`,
});

const fetchHandler = async () => {
  return await api.get("/").then((res) => res.data);
};
const Cars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetchHandler().then((data) => setCars(data));
  }, []);
  console.log(cars);
  return (
    <div>
      <ul>
        {cars &&
          cars.map((car, i) => (
            <li key={i}>
              <Car car={car} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cars;
