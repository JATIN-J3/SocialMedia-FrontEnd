import React, { Fragment, useState } from "react";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { Alert, Backdrop, Button, CircularProgress, IconButton, Snackbar } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { uploadToCloudinary } from "../../utis/uploadToCloudinary";
import { createReels } from "../../Redux/Reels/reels.action";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  //   video: Yup.string().required("Video is required"),
});

const CreateReelsForm = () => {
  const [isLoading, setIsloading] = useState();
  const [selectedVideo, setSelectedVideo] = React.useState();
  const dispatch = useDispatch();
  const [openSnakbar,setOpenSnakbar]=useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      video: "",
    },

    onSubmit: (values) => {
      dispatch(createReels(values));
      console.log("Form values:", values);
      setOpenSnakbar(true)
      //   handleClose();
    },
  });

  const handleSelectVideo = async (event) => {
    setIsloading(true);
    const videoUrl = await uploadToCloudinary(event.target.files[0], "video");
    setSelectedVideo(videoUrl);
    setIsloading(false);
    formik.setFieldValue("video", videoUrl);
  };

  const handleCloseSnakbar=()=>{
    setOpenSnakbar(false)
  }

  return (
    <Fragment>
      <div className="w-full flex justify-center flex-col items-center">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex justify-center space-x-5 ">
            <div>
              {selectedVideo ? (
                <div>
                  <video
                    autoPlay
                    controls
                    src={selectedVideo}
                    className="w-[12rem] h-[20rem]"
                  ></video>
                </div>
              ) : (
                <div className="">
                  <input
                    type="file"
                    accept="video/*"
                    style={{ display: "none" }}
                    id="image-input"
                    onChange={handleSelectVideo}
                  />
                  <label htmlFor="image-input">
                    <div 
                    className="bg-[#bf9ae0] border-2 border-black border-solid w-[10rem] h-[20rem] flex items-center justify-center rounded-md">
                      <VideoLibraryIcon />
                    </div>
                  </label>
                </div>
              )}
            </div>
            <div className="">
              <div>
                <textarea
                  name="title"
                  value={formik.values.caption}
                  onChange={formik.handleChange}
                  className="bg-[white] border border-[#000000] resize-none h-[20rem] w-[20vw] p-5 rounded-md outline-none bg-slate-100"
                  type="text"
                  placeholder="Title"
                />
              </div>
            </div>
          </div>
          <div className=" flex w-full justify-end">
            <Button
              type="submit"
              sx={{ borderRadius: "2rem",background:"#bf9ae0",color:"black",fontWeight:"500" ,fontSize:"2.3vh"}}
              variant="contained"
              
            >
              Create
            </Button>
          </div>
        </form>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar open={openSnakbar} autoHideDuration={6000} onClose={handleCloseSnakbar}>
  <Alert onClose={handleCloseSnakbar} severity="success" sx={{ width: '100%' }}>
    Create Reel Successfully!
  </Alert>
</Snackbar>
    </Fragment>
  );
};

export default CreateReelsForm;
