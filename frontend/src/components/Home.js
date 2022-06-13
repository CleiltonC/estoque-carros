import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/car"
          sx={{ marginTop: 15, background: "bluered" }}
          variant="contained"
        >
          <Typography variant="h3">Ver todos os carros</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
