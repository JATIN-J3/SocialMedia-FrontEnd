import React, { useState } from "react";
import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import SearchUser from "./SearchUser";

const popularUser = [1, 1, 1, 1];
const HomeRight = () => {
  const navigate=useNavigate()
  
  const handleUserClick=(userId)=>{
navigate(`/profile/${userId}`)
  }
  return (
    <div className="pr-5">
      <SearchUser handleClick={handleUserClick}/>
      <div className="card p-5">
        
       
      
      </div>
    </div>
  );
};

export default HomeRight;