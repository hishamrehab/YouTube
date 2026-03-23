import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTerm = searchTerm.trim();

    if (trimmedTerm) {
      navigate(`/search/${trimmedTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 999,
        border: "1px solid",
        borderColor: "divider",
        pl: 2,
        boxShadow: "none",
        width: { xs: "100%", sm: "440px", md: "620px" },
        maxWidth: "100%",
        backgroundColor: "background.paper",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <IconButton
        type="submit"
        sx={{
          p: 1.2,
          color: "text.primary",
          borderLeft: "1px solid",
          borderColor: "divider",
          borderRadius: 0,
          width: 64,
          height: 42,
          background: "#222",
          "&:hover": {
            background: "#2c2c2c",
          },
        }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
