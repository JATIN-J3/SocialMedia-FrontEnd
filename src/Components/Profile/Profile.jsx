import { Avatar, Button, Card } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Profile.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PostCard from '../Post/PostCard';
import EditProfile from './EditProfile';
import { useDispatch, useSelector } from 'react-redux';
import { FollowUserAction, findUserById } from '../../Redux/Auth/auth.action';
import { getUsersPost } from '../../Redux/Post/post.action';
import UsersReelCard from '../../Pages/Reels/UsersReelCard';
import { getUsersReels } from '../../Redux/Reels/reels.action';

const tabs=[
  {
    value:"Post",
    name:"Post",

  },
  {
    value:"Reels",
    name:"Reels",

  },{
    value:"Saved",
    name:"Saved",

  }
]
const userreel=[1,1,1,1];


const Profile = (userId) => {
   let totalPost=0;
   let totalfollowers=0;
   const totalfollowing=0;
  const {auth,post,reel}=useSelector((store)=>store);
  const dispatch=useDispatch();
  const {id} =useParams();
  useEffect(() => {
    dispatch(findUserById(id));
    dispatch(getUsersPost(id));
    dispatch(getUsersReels(id));
  }, [id]);



  console.log("auth.................",auth.user);
  auth.user?.follower.map((i)=>{
    totalfollowers++;
  })


  auth.user?.following.map((i)=>{
    totalfollowing++;
  })


const [editprofile,seteditprofile]=useState(false);
 
  const [value, setValue] = React.useState('Post');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleUpdate=()=>{
    if(editprofile===false)seteditprofile(true);
    else seteditprofile(false);
  }
  const name=auth.findUser?.firstName+" "+auth.findUser?.lastName;
  const nameat ="@"+auth.findUser?.firstName+""+auth.findUser?.lastName;

  post.posts.map((i)=>{
    totalPost++;
  })
  console.log("user..",auth)

 console.log("follow..",auth.findUser?.follower)

 

  return (
    <>
    {
      editprofile ? <EditProfile/>:
      <Card sx={{background:"#d6c9f6"}} className='py-10 w-[80%] pl-6'>
     
      <div className='rounded-md bg-[#d6c9f6] w-[97%]'>
          <div className='h-[15rem] border-[1px] border-solid border-black rounded-t-md'>
              <img className='rounded-t-md w-full h-full ' src={auth.findUser?.image}  />
          </div>
          <div className='"px-5 flex justify-between items-start mt-5 h-[5rem]'>
            <Avatar className='transform -translate-y-24' sx={{width:"10rem",height:"10rem",border:"3px solid black"}}
             src={auth.findUser?.image}/>


            {auth.user?.id===auth.findUser?.id?
            <Button onClick={handleUpdate} id='btn'
             sx={{borderRadius:"20px",marginRight:"2vh",background:"#e0d4fc",
             color:"black",border:"1px solid black"}} variant='outlined'>Edit Profile </Button>
              :
              <Button onClick={handleUpdate} id='btn'
              sx={{borderRadius:"20px",marginRight:"2vh",background:"#e0d4fc",
              color:"black",border:"1px solid black"}} variant='outlined'>follow </Button>
              
              }
          </div>

          <div className='p-5'>
                <div>
                  <h1 className='py-1 font-bold text-2xl'>{name}</h1>
                  <p>{nameat}</p>
                </div>

                <div  className='flex gap-7 items-center py-3'>
                  <span className='flex gap-2 font-medium'>{totalPost} <h1 className='font-bold'>Posts</h1></span>
                  <span className='flex gap-2 font-medium'>{totalfollowers} <h1 className='font-bold'> follower</h1></span>
                  <span className='flex gap-2 font-medium'>{totalfollowing} <h1 className='font-bold'>Followings</h1></span>
                </div>
                
                <div>
                  <p>{auth.findUser?.bio}</p>
                </div>
          </div>

        <section>
        <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        textColor="secondary"
  indicatorColor="secondary"
      >
        {
          tabs.map((item)=>(
            
        <Tab sx={{fontSize:"2vh",fontWeight:"700",color:"black"}} value={item.value} label={item.name} wrapped />
          ))
        }
      </Tabs>
    </Box>
    <div className='h-[1px] w-full bg-black'></div>
          <div className='flex justify-center bg-[#b0a6c858]'>
              {
                value==="Post"? 
                <div className='space-y-5 w-[70%] my-10'>
                      {
                       post.posts.map((item) => (
                        <div className="border border-[#3b4054] rounded-md">
                          <PostCard item={item}/>
                        </div>
                      ))
                      }
                </div>:
                value==="Reels"?
                <div className='space-y-5 w-[70%] my-10'>
                {
                 reel.reels.map((item) => (
                  <div className="border border-[#3b4054] rounded-md">
                    <UsersReelCard reel={reel}/>
                  </div>
                ))
                }
          </div>
                :value==="Saved"? 
                <div className='space-y-5 w-[70%] my-10'>
                     {
                      auth.findUser?.savedPosts.map((item)=>(
                        <div className="border border-[#3b4054] rounded-md">
                          <PostCard item={item}/>
                        </div>
                      ))
                     }
                </div>:" "
              }
          </div>
        
        </section>
      </div>
    </Card>
    }
    </>
  )
}

export default Profile
