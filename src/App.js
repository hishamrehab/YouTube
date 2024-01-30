import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  Feed,
  ChannelDetail,
  SearchFeed,
  VideoDetail,
} from "./components/index.js";

const App = () => {
  return (
    <BrowserRouter>
      <Box
        sx={{
          backgroundColor: "#FFF",
        }}
      >
        <Navbar />
        <Routes>9 
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
