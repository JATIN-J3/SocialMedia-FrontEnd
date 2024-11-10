import React, { useState } from 'react'
import { Avatar, Card, Grid, IconButton } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; 
import Story from '../Story/Story';
import '../MiddlePart/MiddlePart.css';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PostCard from '../Post/PostCard';
import HomeRight from '../RightPart/HomeRight';
import { useSelector } from 'react-redux';
import CreatePostModel from './CreatePostModel';
import Profile from '../Profile/Profile';
const Create = () => {
    const [openCreatePostModal, setOpenCreatePostModal] = useState();

    const {auth}=useSelector((store)=>store);

    const handleOpenCreatePostModal = () => setOpenCreatePostModal(true);
    const handleCloseCreatPostModal = () => setOpenCreatePostModal(false);
  
 
   



  return (
    <div className='w-[60%] h-full '>
      <Card className='p-5 mt-5 mb-5' sx={{background:"#e0d4fc",height:"30vh",display:"flex",flexDirection:"column",gap:"5.5vh",justifyContent:"center"}}>
        <div className='flex justify-around '>
            <Avatar  src={auth.user?.image}/>
            <input type="text" className='outlined-none w-[85%] border-[#3b4054] border-2 rounded-full px-5 ' />
        </div>

        <div className='flex justify-center  space-x-9 '>
          <div className='flex items-center'>
            <IconButton className='primary' onClick={handleOpenCreatePostModal}>
              <InsertPhotoIcon sx={{color:"black",height:"7vh",width:"7vh"}}/>
            </IconButton>
            <span>
              Media
            </span>

          </div>

          <div className='flex items-center'>
            <IconButton className='primary' onClick={handleOpenCreatePostModal}>
              <VideoCallIcon sx={{color:"black",height:"7vh",width:"7vh"}}/>
            </IconButton>
            <span>
              Video
            </span>

          </div>


          <div className='flex items-center'>
            <IconButton className='primary' onClick={handleOpenCreatePostModal}>
             <NewspaperIcon sx={{color:"black",height:"7vh",width:"7vh"}}/>
            </IconButton>
            <span>
              Article
            </span>

          </div>

        </div>

     </Card>


    <div>
    <CreatePostModel
        open={openCreatePostModal}
        handleClose={handleCloseCreatPostModal}
      />
    </div>

    </div>
  )
}

export default Create
