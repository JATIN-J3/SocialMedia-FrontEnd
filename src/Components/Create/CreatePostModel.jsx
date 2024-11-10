import * as React from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar, Backdrop, CircularProgress, IconButton } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../Redux/Post/post.action";
import { uploadToCloudinary } from "../../utis/uploadToCloudinary";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#D3C5E5",
  border: "0",
  outline: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: ".6rem",
};

export default function CreatePostModal({ handleClose, open }) {
  const {auth}=useSelector((store)=>store);
  const [selectedImage, setSelectedImage] = React.useState();
  const [selectedVideo, setSelectedVideo] = React.useState();
  const [isLoading, setIsloading] = React.useState();
  const dispatch = useDispatch();

  const store = useSelector((store) => store);

  console.log("store -------- ", store);

  const formik = useFormik({
    initialValues: {
      caption: "",
      image: "",
      video: "",
    },

    onSubmit: (values) => {
      dispatch(createPost(values));
      console.log("Form values:", values);
      handleClose();
    },
  });

  const handleSelectImage = async (event) => {
    setIsloading(true);
    const imgUrl = await uploadToCloudinary(event.target.files[0], "image");
    setSelectedImage(imgUrl);
    setIsloading(false);
    formik.setFieldValue("image", imgUrl);
  };

  const handleSelectVideo = async (event) => {
    setIsloading(true);
    const videoUrl = await uploadToCloudinary(event.target.files[0], "video");
    setSelectedVideo(videoUrl);
    setIsloading(false);
    formik.setFieldValue("video", videoUrl);
  };

  const name=auth.user?.firstName+" "+auth.user?.lastName;
  const nameAt="@"+auth.user?.firstName+" "+auth.user?.lastName;


  return (
      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
          <div className="">
            <div className="flex space-x-4 items-center">
              <Avatar src={auth.user?.image} sx={{border:"1px solid black"}}/>
              <div>
                <p className="font-bold text-lg">{name}</p>
                <p className="text-sm">{nameAt}</p>
              </div>
            </div>
            <textarea
              rows={4}
              placeholder="Write caption..."
              className="outline-none w-full mt-5 p-2 bg-transparent border border-[#3b4054]"
              type="text"
              name="caption"
              value={formik.values.caption}
              onChange={formik.handleChange}
            />

            <div className="flex space-x-5 items-center mt-5">
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSelectImage}
                  style={{ display: "none" }}
                  id="image-input"
                />
                <label htmlFor="image-input">
                  <IconButton  component="span">
                    <ImageIcon sx={{color:"black",height:"5vh",width:"5vh"}} />
                  </IconButton>
                </label>
                <span>Image</span>
              </div>

              <div>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleSelectVideo}
                  style={{ display: "none" }}
                  id="video-input"
                />
                <label htmlFor="video-input">
                  <IconButton component="span">
                    <VideocamIcon sx={{color:"black",height:"5vh",width:"5vh"}} />
                  </IconButton>
                </label>
                <span>Video</span>
              </div>
            </div>

            {selectedImage && (
              <div>
                <img className="h-[10rem]" src={selectedImage} alt="" />
              </div>
            )}

            <div className="flex w-full justify-end">
              <Button
                sx={{ borderRadius: "1.5rem",background:"black" }}
                variant="contained"
                type="submit"
              >
                Post
              </Button>
            </div>
          </div>
        </form>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    </Modal>
    
  );
}
