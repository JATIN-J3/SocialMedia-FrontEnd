import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../Redux/Auth/auth.action';

const LogOut = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch();
  
    const handleLogout = () => {
        dispatch(logout())
       
        navigate("/")
      };
  return (
    <div className='bg-[#b09ae3] absolute top-[91.8%] w-[13vh] h-[5.2vh] left-[70%] text-center'>
            <Button onClick={handleLogout} sx={{color:"black"}}>
                Logout
            </Button>
    </div>
  )
}

export default LogOut
