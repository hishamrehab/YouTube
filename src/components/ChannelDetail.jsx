import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Loader, Videos, ChannelCard } from "./index";
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromApi(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromApi(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  if (!channelDetail?.snippet) return <Loader message="Loading channel..." fullScreen />;

  return (
    <Box minHeight="95vh">
      <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
        <ChannelCard channelDetail={channelDetail} marginTop="0px" />
      </Box>

      <Box display="flex" p={2} justifyContent="center">
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
