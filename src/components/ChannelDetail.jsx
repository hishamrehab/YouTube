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

  
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
     console.log(videos);
     

    fetchFromApi(`search?channelId=${id}&part=snippet&id=&
        order=date
       `).then((data) => setVideos(data?.items));
  }, [id]);

  return <div>{id}</div>;
};

export default ChannelDetail;



  