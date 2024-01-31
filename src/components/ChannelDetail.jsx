import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./index";
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  console.log(channelDetail);
  console.log(videos);
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: "rgb(238,57,12)",
            background:
              "linear-gradient(90deg, rgba(238,57,54,1) 0%,rgba(9,45,121,1) 0%, rgba(36,46,113,1) 0%, rgba(170,69,159,1) 0%, rgba(204,55,64,1) 0%, rgba(232,33,33,1) 0%, rgba(236,32,35,1) 0%, rgba(146,65,153,1) 0%, rgba(0,212,255,1) 0%, rgba(255,18,18,1) 0%, rgba(246,29,29,1) 39%, rgba(231,45,45,1) 100%)",
            zIndex: 10,
            height: "250px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-100px" />
      </Box>

      <Box display="flex" p="2">
        <Box
          sx={{
            mr: { sm: "100px" },
          }}
        />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
