import React from "react";
import logo from "../assets/images/youtube-logo.svg";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "./index";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        position: "sticky",
        background: "rgba(15, 15, 15, 0.95)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid",
        borderColor: "divider",
        top: 0,
        zIndex: 1000,
        px: { xs: 1.5, md: 2.5 },
        py: 0.9,
        gap: 1.5,
      }}
    >
      <Box sx={{ width: { xs: 40, sm: 128 }, display: "flex", alignItems: "center" }}>
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            minWidth: "fit-content",
          }}
        >
          <Box component="img" src={logo} alt="YouTube Clone" sx={{ width: { xs: 34, sm: 112 } }} />
        </Link>
      </Box>

      <Box sx={{ flex: 1, display: "flex", justifyContent: "center", minWidth: 0 }}>
        <SearchBar />
      </Box>

      <Box sx={{ width: { xs: 0, sm: 128 } }} />
    </Stack>
  );
};

export default Navbar;
