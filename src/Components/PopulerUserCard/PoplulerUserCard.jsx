import { Avatar, Button, Card, CardHeader, IconButton } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';

const PoplulerUserCard = () => {
  return (
    <div className='bg-[#735DA5]'>

          
            <CardHeader
        avatar={
          <Avatar  sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
        <Button sx={{fontSize:"1.5vh",fontWeight:"800",color:"#000"}}>
            Follow
        </Button>
        }
        title="Name"
        subheader="@Name"
      />
           
    </div>
  )
}

export default PoplulerUserCard
