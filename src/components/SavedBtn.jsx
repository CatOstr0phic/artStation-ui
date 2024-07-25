import React from 'react';
import { Link } from 'react-router-dom';
import { FavoriteBorder } from "@mui/icons-material";


export default function SavedBtn() {
  return (
    <Link to="/saved-page">
    <div className="hidden md:flex">
      <FavoriteBorder />
    </div>
  </Link>
  )
}
