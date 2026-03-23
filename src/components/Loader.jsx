import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const Loader = ({ message = "Loading...", fullScreen = false }) => {
  return (
    <Box
      sx={{
        minHeight: fullScreen ? "calc(100vh - 64px)" : 220,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1.5,
      }}
    >
      <CircularProgress size={42} thickness={4.6} sx={{ color: "primary.main" }} />
      <Typography variant="body2" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
};

export default Loader;
