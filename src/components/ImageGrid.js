import React from "react";
import useFirestore from "../hooks/useFirestore";

function ImageGrid({props,setSelectedImg}) {
  const { docs } = useFirestore("images");
  return (
    <div className="conatiner d-flex flex-wrap justify-content-center" >
      {docs &&
        docs.map((doc) => (
          <div className="card m-3" style={{ width: "25rem" ,border: 'none',backgroundColor: props.photobgcolor,cursor:'pointer' }} key={doc.id} onClick={()=>setSelectedImg(doc.url)}>
            <img src={doc.url} alt="my-image-not-viewalble" />
          </div>
        ))}
    </div>
  );
}

export default ImageGrid;
