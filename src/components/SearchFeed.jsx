import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "../components/index";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box
      p={{ xs: 1.5, md: 2 }}
      sx={{
        overflowY: "auto",
        minHeight: "calc(100vh - 64px)",
        flex: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: "text.primary",
        }}
      >
        Search Results for:{" "}
        <span style={{ color: "#ff0000" }}>{searchTerm}</span> videos
      </Typography>

      {<Videos videos={videos} />}
    </Box>
  );
};

export default SearchFeed;
