import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

export const demoThumbnailUrl = "https://i.ibb.co/G2L2Gwp/API-Course.png";
export const demoVideoUrl = "/video/GDa8kZLNhJ4";
export const demoVideoTitle =  "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI";
export const demoChannelUrl = "/channel/UCmXmlB4-HJytD7wek0Uo97A";
export const demoChannelTitle = "JavaScript Mastery";



const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
  
}) => {
  return <Card>
  <CardMedia image={snippet?.thumbnails?Card.high?.url }/>

  </Card>;
};

export default VideoCard;
