import { Avatar, Card, Divider } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findUserById } from '../../Redux/Auth/auth.action';
import { useNavigate } from 'react-router-dom';

const MiddleLeft = () => {
    const {auth}=useSelector((store)=>store);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    let id=3
    if(id===auth.user?.id){
      id=1;
    }

    useEffect(() => {
        dispatch(findUserById(id));
       
      }, [id]);




      const handleonclick=()=>{
          
        navigate(`Profile/${id}`)

      }
    
  return (
    <>
      <Card sx={{width:"46vh",height:"20vh",background:"#cbabf5"}}>
        <div className=' w-full h-[8vh] flex items-center justify-between gap-4 '>
               <div className='flex items-center gap-3 pl-2'>
               <Avatar src={auth.user?.image}/>
               <p className='font-medium'>{auth.user?.firstName+""+auth.user?.lastName}</p>
               </div>
            
                <div className='pr-2 text-[1.7vh]  font-medium'>
                    <h1>Suggestions for you</h1>
                </div>

        </div>
        <Divider className='bg-black'/>
        <div className=' w-full h-[8vh] flex items-center justify-between gap-4 mt-2 '>
               <div onClick={handleonclick} className='flex items-center gap-3 pl-2 '>
               <Avatar src={auth.findUser?.image}/>
               <p>{auth.findUser?.firstName+""+auth.findUser?.lastName}</p>
               </div>
            
                <div className='pr-3 text-blue-800 font-medium'>
                   follow
                </div>

        </div>
       
      </Card>
    </>
  )
}

export default MiddleLeft
