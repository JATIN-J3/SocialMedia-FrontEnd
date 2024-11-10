import {
  Avatar,
  Backdrop,
  Box,
  Button,
  Card,
  CircularProgress,
  IconButton,
  Modal,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../Redux/Auth/auth.action";
import { uploadToCloudinary } from "../../utis/uploadToCloudinary";
import './Profile.css'
import Profile from "./Profile";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  //   height: "90vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: 3,
  outline: "none",
  overflow: "scroll-y",
};

const EditProfile = () => {
  const [uploading, setUploading] = useState(false);
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(updateUserProfile(values));
    console.log(values);
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      website: "",
      location: "",
      bio: "",
      backgroundImage: "",
      image: "",
    },
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    formik.setValues({
      firstName: auth.user?.firstName || "",
      lastName: auth.user?.lastName || "",
      website: auth.user?.website || "",
      location: auth.user?.location || "",
      bio: auth.user?.bio || "",
      backgroundImage: auth.user.backgroundImage || "",
      image: auth.user?.image || "",
    });
  }, [auth.user]);

  const handleImageChange = async (event) => {
    setUploading(true);
    const { name } = event.target;
    const file = event.target.files[0];
    const url = await uploadToCloudinary(file, "image");
    formik.setFieldValue(name, url);
    setUploading(false);
  };

  const [exit,setexit]=useState(false);
  const handleExit=()=>{
    if(exit)setexit(false);
    else setexit(true);
  }

  return (
    <>
    
    {
      exit ? <Profile/>
      :
      <Card sx={{background:"#cbabf5",width:"60%",paddingLeft:"2vh",paddingRight:"2vh"}}>
     
          <form id="pro" onSubmit={formik.handleSubmit}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <IconButton onClick={handleExit}  >
                  <CloseIcon  />
                </IconButton>
                <p>Edit Profile</p>
              </div>

              <Button type="submit" sx={{color:"black"}}>Save</Button>
            </div>



              <Card sx={{height:"85vh",width:"90%",background:"#d6c9f6",marginLeft:"4.5vh"}}>

              <div className="h-[80vh] w-[95%] ml-4 mt-5">
              <div className="">
                <div className="w-full">
                  <div className="relative border-[1px] border-solid bg-white border-black ">
                    <img
                      src={
                       auth.user?.image
                      }
                     
                      className="w-full h-[12rem] object-cover object-center"
                    />
                   
                  </div>
                </div>

                <div className="w-full transform -translate-y-20 translate-x-4 h-[6rem]">
                  <div className="relative borde ">
                    <Avatar
                      src={auth.user?.image}
                    
                      sx={{
                        width: "10rem",
                        height: "10rem",
                        border: "2px solid black",
                       
                      }}
                    />
                    {/* Hidden file input */}
                    <input
                      type="file"
                      className="absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer"
                      onChange={handleImageChange}
                      name="image"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-5">
                <TextField
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  value={auth.user?.firstName}
                  onChange={formik.handleChange}
                  sx={{background:"white",borderRadius:"5px"}}
                />
                <TextField
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  value={auth.user?.lastName}
                  onChange={formik.handleChange}
                 
                  sx={{background:"white",borderRadius:"5px"}}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={
                    3
                  }
                  id="bio"
                  name="bio"
                  label="Bio"
                  value={auth.user?.bio}
                  onChange={formik.handleChange}
                  error={formik.touched.bio && Boolean(formik.errors.bio)}
                  helperText={formik.touched.bio && formik.errors.bio}
                  
                  sx={{background:"white",borderRadius:"5px"}}
                />
             
              </div>
             
               </div>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={uploading}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
              </Card>

           
          </form>
      
    </Card>
    }
    
    </>
  );
};

export default EditProfile;

