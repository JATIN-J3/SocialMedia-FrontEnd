import { Card, Grid } from '@mui/material'
import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import './Login.css'
import a from './videdo/a.mp4'
const Authentication = () => {
    const[login,setlogin]=useState(true);
const handesubmit=()=>{
    if(login==true){
        setlogin(false);
    }
    else
    {
        setlogin(true);
    }
}

  return (
    <div className='w-[100%] h-[100%]'>
        <div className='h-[81%] w-[100%] fixed' >
        <video src={a}  className=' relative'  autoPlay muted loop></video>
        </div>
        <Grid container >
            <Grid item xs={4} className='h-screen'>
         
            </Grid>

            <Grid item xs={5} sx={{zIndex:"100" }}>
                
            <div className='w-[100%] h-[100%]  bg-[#af87e329] flex flex-col justify-center items-center'>

                <div className='px-20 flex flex-col justify-center items-center h-[90%] w-[90%] border-solid border-2 border-white bg-[#2b22372e]'>
                    <div id='par' className='card pr-[3vh]'>
                       <div id='social' className=' flex flex-col items-center space-y-1 '>
                       <h1 className='log text-[7vh]  text-white'>Social Media</h1> 
                       <p className='text-center text-m w-[70%] text-white'>
                        Connection lives,
                        
                        social media clone 
                       </p>
                        </div>  


                        <div className='w-[110%]'>
                           {login ? <Login/>
                            :<Register/>}
                        </div>

                    <Card  sx={{background:"#522e82",color:"white",width:"45vh", marginTop:"2vh",marginLeft:"4.5vh"}}>
                       {login ? <div className='text-center h-[5vh] py-[5px] bt' id='bt'>
                            if you dont have an account? <span className='text-black font-semibold spn' onClick={handesubmit}>Register</span>
                        </div>
                            :
                        <div className='text-center h-[5vh] py-[5px] ' id='bt'>
                            Already have an account? <span className='text-black spn' onClick={handesubmit}>Login</span>
                        </div>}
                    </Card>

                   </div>

                </div>

          </div>
          
            </Grid>
        </Grid>

    </div>
  )
}

export default Authentication
