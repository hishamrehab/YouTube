import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
import { Videos } from "./index";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { fetchFromApi } from "../utils/fetchFromApi";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
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

            <Typography color="#000" variant="h5" fontWeight="bold" p={2}>
              {videoDetail && videoDetail.snippet.title}
            </Typography>
            <Stack direction="row" gap="5px" alignItems="center">
              <Typography color="gray" variant="h6" fontWeight="bold" p={2}>
                {videoDetail && videoDetail.snippet.channelTitle}
              </Typography>
              <CheckCircleIcon
                sx={{
                  fontSize: "12px",
                  color: "gray",
                }}
              />
            </Stack>
          </Box>
        </Box>
      </Stack>

      <Box
        px={2}
        py={{ md: 1, xs: 5 }}
        justifyContent="center"
        alignItems="center"
      >
        <Videos videos={videos} direction="column" />
      </Box>
    </Box>
  );
};

export default VideoDetail;
