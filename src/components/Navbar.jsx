import React from "react";
import logo from "../image/logo2.png";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "./index";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#FFF",
        top: 0,

        flexWrap: "wrap",
        alignItems: "center",
        alignContent: "center",
        justifyContent: { xs: "center", md: "space-between" },
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0",
        }}
      >
        <img src={logo} alt="logo" height={50} />
        <h2
          style={{
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          YouTube
        </h2>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
