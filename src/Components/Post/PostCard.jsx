import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ExpandMore } from '@mui/icons-material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../../Redux/Comment/comment.action';
import { likePost, savePost } from '../../Redux/Post/post.action';
import './PostCard.css'
const PostCard = ({item}) => {
  let totalLikes=0;
  let totalComments=0;

  
  console.log("comm..........",item.comments);

  item.liked.map((i)=>{
    totalLikes++;
  })
  
  item.comments.map((i)=>{
    totalComments++;
  })

    const dispatch=useDispatch();

    const {auth}=useSelector((store)=>store);

    const name=item?.user?.firstName+" "+item?.user?.lastName;
    const nameAt="@"+item?.user?.firstName.toLowerCase()+""+item?.user?.lastName.toLowerCase();


    
    const handleLike=()=>{
      dispatch(likePost(item?.id));
       
    }
    const[issaved,setissaved]=useState(false);
    const handleSave=()=>{
        dispatch(savePost(item?.id));
    }

    const item2=item?.item;
    console.log("item......",item);



    const[showComment,setshowcomment]=useState(false);
    const handleOpenComment=()=>{
      if(showComment===false)setshowcomment(true);
      else setshowcomment(false);
    }
    

    const handleCreateComment = (content) => {
      dispatch(createComment({ postId: item?.id, data: { content } }));
    };
  

  return (
   <Card sx={{background:"#b09ae3",position:"relative"}} >
          <CardHeader sx={{background:"#c6b3f2"}}
        avatar={
          <Avatar  aria-label="recipe" src={item?.user?.image} />
           
        }
        action={
          <IconButton aria-label="settings">
          <MoreVertIcon/>
          </IconButton>
        }
        title={name}
        subheader={nameAt}
    
      />
      <Divider className='bg-black h-[1px]'/>
      <CardMedia
        component="img"
        height="194"
        image={item?.image}
        sx={{maxHeight:"33vw"}}
      />
             <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:"2vh",fontWeight:"600"}}>
          
          {item?.caption}
        </Typography>
      </CardContent>



      <CardActions disableSpacing className='flex justify-between'>
                <div >
                    
                    <IconButton onClick={handleLike}>{item?.likedByRequser?
                        <FavoriteIcon  sx={{color:"black",fontSize:"5vh"}}/>:
                        <FavoriteBorderIcon sx={{color:"black",fontSize:"5vh"}}/>}
                       
                    </IconButton>
                    
                   
                    <IconButton >
                            <ChatBubbleOutlineIcon onClick={handleOpenComment} sx={{color:"black",fontSize:"4vh"}}/>
                           
                    </IconButton>
                    <IconButton >
                            <ShareIcon sx={{color:"black",fontSize:"4vh"}}/>
                    </IconButton>
                    
                
                </div>
               <div>
                <IconButton onClick={handleSave}>{item?.savedByRequser?
                        <BookmarkIcon  sx={{color:"black",fontSize:"5vh"}}/>:
                        <BookmarkBorderIcon sx={{color:"black",fontSize:"5vh"}}/>}
                    </IconButton>
                </div>

                    

      </CardActions>

       
               
      { showComment && (
        
        <section>
          
      <div  className='flex '>  
        <div className=' flex w-[17vh] pl-3 justify-around'>
                    
        <p className='text-sm font-bold' >{totalLikes}</p> 
         <p className='text-sm font-bold'>{totalComments}</p>
        </div>
        <div className=' w-full'>
                    
        </div>
         </div>
          <div className="flex items-center space-x-5 mx-3 my-5">
            <Avatar src={auth.user?.image}/>
            <input id='postinput'
              onKeyPress={(e) => {
                console.log("e", e.target.value);
                if (e.key === "Enter") {
                  console.log("--------");
                  handleCreateComment(e.target.value);
                }
              }}
              
              className="w-full outline-none bg-black border  border-[#3b4054] rounded-full px-5 py-2"
              type="text"
              placeholder="write your comment..."
            />
          </div>
          <Divider className='bg-black' />
          <div className="mx-3 space-y-2  text-xs flex gap-4 flex-col my-3">
            {item?.comments.map((comment) => (
              <div className="flex justify-between items-center ">
                <div className="flex items-center space-x-5 ">
                  <Avatar
                    sx={{ height: "2rem", width: "2rem", fontSize: ".8rem",bgcolor:"#212534",color:"rgb(88,199,250)" } }
                src={comment?.user?.image}   / >
                    
                  <div>
                    <h1 className='font-bold  text-zinc-800'>{comment.user?.firstName+" "+comment.user?.lastName}</h1>
                  <p className='font-medium text-zinc-950'>{comment.content}</p>
                  </div>
                  
                </div>
                <div>
                  <IconButton >
                    <FavoriteBorderIcon sx={{ fontSize: "1rem",color:"black" }} />
                  </IconButton>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

   </Card>
  )
}

export default PostCard
