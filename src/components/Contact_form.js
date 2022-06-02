import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "./Alert";

function Contact_form(props) {
  const form = useRef();
 
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(()=>{
      setalert(null)
    },3000)
  };
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2uroc3i",
        "template_dnd1kcq",
        e.target,
        "t_AksNBn1vhlnL58H"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response);
         
          showAlert("Your message has been recived","success")
        },
        function (error) {
          console.log("FAILED...", error);
          showAlert("Server internal error, message not sent","danger")
        }
      );
  }

  return (
    <div>
      <div className="container text-bolder">
        <div className="row">
          <div className="col-sm" >
            <img
              src={require("../images/130.png")}
              className="mx-auto d-block"
              alt="Cinque Terre"
              style={{width:'100%'}}
            ></img>
          </div>
          <div className="col-sm ">
            <Alert alert={alert} />
            <form
              className="text-center"
              style={{ color: "black" }}
              onSubmit={sendEmail}
              ref={form}
            >
              <div className="form-group  my-4">
                <label htmlFor="exampleFormControlInput1" style={{ textAlign: "center",color: props.mode.textcolor2 }}>
                  What's Your Good Name ?
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="enter your name"
                  name="name"
                required />
              </div>
              <div className="form-group my-4">
                <label htmlFor="exampleFormControlInput1" style={{ textAlign: "center",color: props.mode.textcolor2 }}>
                  Provide Email To Contact
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="user_email"
                  
                required />
              </div>

              <div className="form-group my-4">
                <label htmlFor="exampleFormControlTextarea1" style={{ textAlign: "center",color: props.mode.textcolor2 }}>
                  Whats Your Message ?
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  name="message"
                required ></textarea>
              </div>
              <button type="submit" className="btn btn-primary  my-3 ">
                Connect
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact_form;
