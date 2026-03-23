import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./index";
import Loader from "./Loader";

const Videos = ({ videos, direction = "row" }) => {
  if (!videos?.length) return <Loader message="Loading videos..." />;

  return (
    <Stack
      direction={direction}
      flexWrap="wrap"
      justifyContent="flex-start"
      gap={2}
      sx={{
        ml: 0,
      }}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
