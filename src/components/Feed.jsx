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
   fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then(
      (data) => {
        setVideos(data.items);
      }

    
    );
  }, [selectedCategory]);


  return (
    <Stack
      sx={{
        flexDirection: {
          sx: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
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
            color: "#fff",
          }}
        >
          CopeRight 2020 JSM Media
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
        }}
      >
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
