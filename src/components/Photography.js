import React, { useState } from "react";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import Uploadform from "./Uploadform";

function Photography(props) {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <>
      <div style={{ backgroundColor: props.mode.photobgcolor }}>
        <div
          className="text-center h1 "
          style={{
            padding: "40px 0",
            backgroundColor: "rgba(207, 216, 220, 0.5)",
            color: props.mode.textcolor2
          }}
        >
          MY PICTURES
        </div>
        <div className="container my-3">
          <Uploadform />
        </div>
        <ImageGrid props={props.mode} setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
        <section
          className="module content"
          style={{ backgroundColor: props.mode.quotecolor }}
        >
          <div className="parallax-container">
            <h3 style={{ textAlign: "center" ,color: props.mode.textcolor2}}>
              “A thing that you see in my pictures is that I was not afraid to
              fall in love with these people.” — Annie Leibovitz
            </h3>
          </div>
        </section>
      </div>
    </>
  );
}

export default Photography;
