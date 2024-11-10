import { Avatar } from '@mui/material'
import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; 
import './Story.css'
const Story = () => {
  return (
    <div>
         <div id='sty' className='py-5 flex flex-col  items-center p-5 rounded-b-md'>
            <Avatar sx={{width:"4.5rem",height:"4.5rem"}} className='flex flex-col items-center mr-4 cursor-pointer '>
            
              </Avatar>
              <p className='mr-4 text-lg  font-semibold'>Name</p>

        </div>
      
    </div>
  )
}

export default Story
