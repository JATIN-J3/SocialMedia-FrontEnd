import React from "react";

const UsersReelCard = ({ reel }) => {
  return (
    <div className="w-[15rem] px-2">
      <video 
      controls
        className="w-full h-full"
        src={reel.video}
        
      />
    </div>
  );
};

export default UsersReelCard;
