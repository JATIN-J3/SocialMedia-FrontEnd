import { Avatar, Card, Grid, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Story from "../Story/Story";
import "./MiddlePart.css";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PostCard from "../Post/PostCard";
import HomeRight from "../RightPart/HomeRight";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../../Redux/Post/post.action";
import SearchUser from "../RightPart/SearchUser";
import MiddleLeft from "../MiddleLeft/MiddleLeft";

const Middlepart = () => {
  const dispatch = useDispatch();
  const { auth, post } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  return (
    <Grid container>
      <Grid item xs={9}>
        <div className="px-5 mt-3.5 abolute top-0 w-full bg-[#D3C5E5]">
          <div className="flex flex-col mt-5 gap-[3.5vh]">
            {post.posts.map((item) => (
              <PostCard item={item} />
            ))}
          </div>
        </div>
      </Grid>
      <Grid item xs={3} sx={{ marginTop: "2vh" }}>
        <MiddleLeft />
      </Grid>
    </Grid>
  );
};

export default Middlepart;
