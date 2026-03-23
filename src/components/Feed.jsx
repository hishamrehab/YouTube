import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "../components/index";
import { fetchFromApi } from "../utils/fetchFromApi";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          height: { xs: "auto", md: "calc(100vh - 64px)" },
          borderRight: "none",
          px: { xs: 1, md: 2 },
          backgroundColor: "background.default",
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            mt: 1.5,
            color: "text.secondary",
            px: 1,
          }}
        >
          Copyright 2026 YouTube Clone
        </Typography>
      </Box>
      <Box
        p={{ xs: 1.5, md: 2 }}
        sx={{
          overflowY: "auto",
          height: { xs: "auto", md: "calc(100vh - 64px)" },
          flex: 2,
          backgroundColor: "background.default",
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          {selectedCategory} <span style={{ color: "#ff0000" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
