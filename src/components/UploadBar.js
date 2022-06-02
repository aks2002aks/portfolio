import React, { useEffect } from "react";
import userStorage from "../hooks/useStorage";

function UploadBar({file,setFile}) {
  const { url, progress } = userStorage(file);

  useEffect(() =>{
      if(url){
          setFile(null);
      }
  },[url,setFile])

  return <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" style={{width: progress +'%',height:'5px',marginTop:'20px'}}  ></div>;
}

export default UploadBar;
