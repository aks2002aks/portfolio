import React from 'react'

function Footer_home(props) {
  return (
    <div>
      <section
        className="module content"
        style={{ backgroundColor: props.mode.bgcolor , color: "black"}}
      >
        <div className="parallax-container">
          <h3 style={{ textAlign: "center" ,fontSize:'15px',color:props.mode.textcolor}}>
          &#169; All Copyright Reserved by Ashwani Kumar Singh
          </h3>
        </div>
      </section>
    </div>
  )
}

export default Footer_home
