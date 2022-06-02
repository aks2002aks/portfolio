import React, { useState } from "react";
import Alert from "./Alert";
import UploadBar from "./UploadBar";
import "./Uploadform.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Uploadform() {
  const [alert, setalert] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [auth, setAuth] = useState(false);
  const [showgetauth, setshowgetauth] = useState(true);
  const [showremoveauth, setshowremoveauth] = useState(false);
  const [showupload, setshowupload] = useState(false);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  const [file, setFile] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(e.target.Email.value);
    setPassword(e.target.Password.value);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        setAuth(true);
        showAlert("Authencated sucessfully", "success");
        setshowremoveauth(true);
        setshowgetauth(false);
        setshowupload(true);
        e.target.Email.value = null;
        e.target.Password.value = null;
      })
      .catch((error) => {
        showAlert(`Invalid Credential : ${error.message}`, "danger");
        e.target.Email.value = null;
        e.target.Password.value = null;
      });
  };

  const formchange = (e) => {
    if (e.target.Email !== undefined) {
      setEmail(e.target.Email.value);
      setPassword(e.target.Password.value);
    }
  };

  const handleAuth = () => {
    setAuth(false);
    setshowremoveauth(false);
    setshowgetauth(true);
    setshowupload(false);
    showAlert("Loged out sucessfully", "success");
  };

  const handleChange = (e) => {
    if (auth) {
      let selected = e.target.files[0];
      if (selected && types.includes(selected.type)) {
        setFile(selected);
        showAlert(" Uploaded sucessfully", "success");
      } else {
        setFile(null);
        showAlert(
          " Please select an image file (png or jpg or jpeg)",
          "danger"
        );
      }
    } else {
      showAlert("Permission denied", "danger");
    }
  };

  return (
    <>
      <Alert alert={alert} />
      <div>
        <div className=" d-flex justify-content-center ">
          {showremoveauth && (
            <button
              type="button"
              className="btn btn-secondary mx-1"
              onClick={handleAuth}
            >
              Remove Authenticate
            </button>
          )}

          {showgetauth && (
            <button
              type="button"
              className="btn btn-secondary mx-1"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Authenticate
            </button>
          )}
        </div>

        <div
          className="modal fade "
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog " style={{ width: "400px" }}>
            <div className="modal-content align-items-center ">
              <div className="modal-header">
                <form method="POST" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="m-2" htmlFor="exampleInputEmail1">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="Email"
                      aria-describedby="emailHelp"
                      required
                      onChange={formchange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="m-2" htmlFor="exampleInputPassword1">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="Password"
                      name="password"
                      autoComplete="on"
                      required
                      onChange={formchange}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {showupload && <form className="myform">
          <label className="mylabel">
            <input type="file" onChange={handleChange} />
            <span>+</span>
          </label>
          <div>
            {file && <div>{file.name}</div>}
            {file && <UploadBar file={file} setFile={setFile} />}
          </div>
        </form>}
      </div>
    </>
  );
}

export default Uploadform;
