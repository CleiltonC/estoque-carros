import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import home from "../assets/icons8-home.svg";

const Header = () => {
  const [value, setValue] = useState(1);
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography>
              <img src={home} alt="" />
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Adicionar Carro" />
            <Tab LinkComponent={NavLink} to="/car" label="Carros" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
