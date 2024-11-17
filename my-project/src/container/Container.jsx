import React from "react";
import MuiContainer from "@mui/material/Container";

function Container({ children }) {
  return (
    <div>
      <MuiContainer maxWidth="lg">{children}</MuiContainer>
    </div>
  );
}

export default Container;
