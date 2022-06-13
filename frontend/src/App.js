import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddCar from "./components/AddCar";
import Cars from "./components/Car/Cars";
import CarDetail from "./components/Car/CarDetail";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddCar />} exact />
          <Route path="/car" element={<Cars />} exact />
          <Route path="/car/:id" element={<CarDetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
