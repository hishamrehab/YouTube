import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { fetchFromApi } from "../utils/fetchFromApi";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
      >
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />

            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetail && videoDetail.snippet.title}
            </Typography>
            <Stack direction="row" gap="5px" alignItems="center">
              <Typography color="gray" variant="h6" fontWeight="bold" p={2}>
                {videoDetail && videoDetail.snippet.channelTitle}
              </Typography>
              <CheckCircleIcon sx={{
                fontSize:"12px", color:"gray"
              }} />
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
