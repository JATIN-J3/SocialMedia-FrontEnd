export const uploadToCloudinary = async (pics,fileType) => {
    
    if (pics && fileType) {

        console.log("pics",pics,fileType)
      
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "jatin_cloud");
      data.append("cloud_name", "di8elzyhq");
  
      const res = await 
      fetch(`https://api.cloudinary.com/v1_1/di8elzyhq/${fileType}/upload`, {
        method: "post",
        body: data,
      })
        
        const fileData=await res.json();
        console.log("url : ", fileData.url);
        return fileData.url
  
    } else {
      console.log("error");
    }
  };