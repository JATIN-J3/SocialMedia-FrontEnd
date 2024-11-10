import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import Profile from "../../Components/Profile/Profile";
import Middlepart from "../../Components/MiddlePart/Middlepart";
import "./Homepage.css";
import HomeRight from "../../Components/RightPart/HomeRight";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../../Redux/Auth/auth.action";
import Create from "../../Components/Create/Create";
import CreatePostModal from "../../Components/Create/CreatePostModel";
import SearchModel from "../../Components/SearchModel/SearchModel";
import Reels from "../Reels/Reels";
import CreateReelsForm from "../Reels/CreateReelsForm";
import ChatMessage from "../../Components/Message/ChatMessage";
import Message from "../Message/Message";
const Homepage = () => {
  return (
    <div id="home">
      <Grid container spacing={0} sx={{ background: "#D3C5E5" }}>
        <Grid
          item
          xs={0}
          lg={2.3}
          sx={{
            background: "#cbabf5",
            marginTop: "2vh",
            marginLeft: "2vh",
            position: "sticky",
            top: "0",
          }}
        >
          <div className="sticky top-0">
            <Sidebar />
          </div>
        </Grid>

        <Grid lg={9.3} item className="px-5 flex justify-center" sx={{}}>
          <Routes>
            <Route path="/" element={<Middlepart />} />
            <Route path="/Profile/:id" element={<Profile />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/Search" element={<SearchModel />} />
            <Route path="/Reel" element={<Reels />} />
            <Route path="/CreateReel" element={<CreateReelsForm />} />
            <Route path="/Message" element={<Message />} />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
