import React from "react";
import { Diversity2 } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <Diversity2
        fontSize="medium"
        sx={{
          color: "blue",
          rotate: "90deg",
        }}
      />
    </Link>
  );
}
