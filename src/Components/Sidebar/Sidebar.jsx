import React, { Profiler, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';    
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExploreIcon from '@mui/icons-material/Explore';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import GroupWorkOutlinedIcon from '@mui/icons-material/GroupWorkOutlined';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Avatar, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import './Sidebar.css'
import { useSelector } from 'react-redux';
import LogOut from '../LogOut';
 

const Sidebar = () => {
    
    const {auth}=useSelector((store)=>store);
    const name=auth.user?.firstName+" "+auth.user?.lastName;
    const [showlog,setshowlog]=useState(false);
    const [activeTab,setActiveTab]=useState("Home");
    const navigate=useNavigate();

   

     const menu=[
        {
            title:"Home",
            icon:<HomeOutlinedIcon fontSize='large' sx={{fontSize:"7vh"}}/>,
            activeicon:<HomeIcon fontSize='large' sx={{fontSize:"7vh"}}/>
        },
        {
            title:"Search",
            icon:<SearchOutlinedIcon fontSize='large' sx={{fontSize:"7vh"}}/>,
            activeicon:<SearchOutlinedIcon fontSize='large' sx={{fontSize:"7vh"}}/>
        },
       
        {
            title:"Reels",
            icon:<GroupWorkOutlinedIcon fontSize='large' sx={{fontSize:"7vh"}}/>,
            activeicon:<GroupWorkIcon fontSize='large' sx={{fontSize:"7vh"}}/>
        },
        {
            title:"Create Reel",
            icon:<AddCircleOutlineOutlinedIcon fontSize='large' sx={{fontSize:"7vh"}} />,
            activeicon:<AddCircleOutlinedIcon fontSize='large'sx={{fontSize:"7vh"}}/>
        },
        {
            title:"Message",
            icon:<ChatBubbleOutlineOutlinedIcon fontSize='large' sx={{fontSize:"7vh"}}/>,
            activeicon:<ChatBubbleIcon fontSize='large' sx={{fontSize:"7vh"}}/>
        },
       
       
        
       
        {
            title:"Create",
            icon:<AddCircleOutlineOutlinedIcon fontSize='large' sx={{fontSize:"7vh"}} />,
            activeicon:<AddCircleOutlinedIcon fontSize='large'sx={{fontSize:"7vh"}}/>
        },
        {
            title:"Profile",
            icon:<Avatar src={auth.user?.image} />,
            activeicon:<Avatar src={auth.user?.image}/>
        }
    ]

    const [opensearch,setsearch]=useState(false);

    
 const handleTabClick=(title)=>{


    setActiveTab(title)

    if(title==="Home"){
        navigate("/")
    }
    else if(title==="Search"){
       navigate("/Search")
    }

    else if(title==="Explore"){
        navigate("/Explore")
    }  
    else if(title==="Reels"){
        navigate("/Reel")
    }
    else if(title==="Create Reel"){
        navigate("/CreateReel")
    }
    else if(title==="Message"){
        navigate("/Message")
    }  else if(title==="Notification"){
        navigate("/Notification")
    }
    else if(title==="Create"){
        navigate("/Create")
    }
    else  if(title===name){
        navigate(`Profile/${auth.user.id}`)
    }
    
}

const showlogout=()=>{
    if(showlog==false){
        setshowlog(true);
    }
    else{
        setshowlog(false);
    }
}

    menu.map((item)=>{
        if(item.title=="Profile"){
            item.title=name;
        }
    })

    return (
        <div>
            
            <div className='flex flex-col gap-10 justify-center items-center'>
            
            <div >
            <div id="menucon" className='mt-2'>
                
      {
        menu.map((item)=>(
            <div onClick={()=>handleTabClick(item.title)} id="homeicon" class="icons">
            {activeTab===item.title ? item.activeicon : item.icon}
              {activeTab===item.title ? <p class="activetit">{item.title}</p>:<p class="tit">{item.title}</p>
              }
     </div>
        )
    )
      }
     <Divider className='bg-black h-[1.5px]'/>
      <div onClick={showlogout} className='icons ml-1 relative mt-[4vh]'><MenuIcon sx={{fontSize:"5vh"}}/> <p className='ml-2'>Menu</p></div>
                {showlog?<LogOut/>:" "}
            </div>
            </div>
            </div>
          
           
            
           
        </div>
    );
};

export default Sidebar;
