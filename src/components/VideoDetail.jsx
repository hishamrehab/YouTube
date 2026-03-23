import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
import { Loader, Videos } from "./index";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { fetchFromApi } from "../utils/fetchFromApi";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader message="Loading video..." fullScreen />;

  return (
    <Box minHeight="100vh">
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
      >
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "64px", px: 2, py: 1.5 }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />

            <Typography color="text.primary" variant="h5" fontWeight={700} pt={1.5}>
              {videoDetail && videoDetail.snippet.title}
            </Typography>

            <Stack direction="row" gap="5px" alignItems="center" pt={1}>
              <Typography color="text.secondary" variant="subtitle1" fontWeight={600}>
                {videoDetail && videoDetail.snippet.channelTitle}
              </Typography>
              <CheckCircleIcon sx={{ fontSize: "12px", color: "text.secondary" }} />
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 2, xs: 3 }}
          justifyContent="center"
          alignItems="center"
          sx={{ width: { md: "420px" } }}
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
