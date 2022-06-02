import React from "react";
import "./Navbar.css";
import { Link as Links } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light  sticky-top`}
      style={{ backgroundColor: props.mode.navcolor }}
    >
      <div className="container-fluid ">
        <Links className="navbar-brand " to="/">
          <img
            src={require("../images/121.png")}
            width="50"
            height="60"
            alt="image"
          />
        </Links>
        <p
          className="fw-bold  text-center m-1  "
          style={{ color: props.mode.textcolor1 }}
        >
          Ashwani Kumar singh
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse nav justify-content-center"
          id="navbarSupportedContent"
          style={{ fontWeight: "Bolder" }}
        >
          <ul className="nav" style={{ cursor: "pointer" }}>
            <li className="nav-item ">
              <Links
                className="nav-link"
                to="/About"
                style={{ color: props.mode.textcolor1 }}
              >
                About
              </Links>
            </li>
            <li className="nav-item ">
              <Links
                className="nav-link"
                to="/Carrer"
                style={{ color: props.mode.textcolor1 }}
              >
                Carrer/Journey
              </Links>
            </li>
            <li className="nav-item ">
              <Links
                className="nav-link"
                to="/Skills"
                style={{ color: props.mode.textcolor1 }}
              >
                Skills
              </Links>
            </li>
            <li className="nav-item ">
              <Links
                className="nav-link"
                to="/Project"
                style={{ color: props.mode.textcolor1 }}
              >
                Project/Interships
              </Links>
            </li>
            <li className="nav-item ">
              <Links
                className="nav-link"
                to="/Interest"
                style={{ color: props.mode.textcolor1 }}
              >
                Interest
              </Links>
            </li>
            <li className="nav-item ">
              <Links
                className="nav-link"
                to="/Connect"
                style={{ color: props.mode.textcolor1 }}
              >
                Connect
              </Links>
            </li>
            <li className="nav-item ">
              <Links
                className="nav-link"
                to="/photography"
                style={{ color: props.mode.textcolor1 }}
              >
                Photography
              </Links>
            </li>
          </ul>
        </div>

        <div
          className="collapse navbar-collapse nav justify-content-center"
          id="navbarSupportedContent"
        >
          <li className="nav-item">
            <a
              href="https://instagram.com/ashwani_a.k.s?utm_medium=copy_link"
              target="_blank"
            >
              <i
                className="fa-brands fa-instagram fa-2xl m-1"
                style={{ color: props.mode.textcolor1 }}
              ></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://twitter.com/ASH_KING_GAMING?t=U3NbmDM2xhJpEK7FiQS0hg&s=08"
              target="_blank"
            >
              <i
                className="fa-brands fa-twitter fa-2xl m-1"
                style={{ color: props.mode.textcolor1 }}
              ></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/ashwani-kumar-singh"
              target="_blank"
            >
              <i
                className="fa-brands fa-linkedin-in fa-2xl m-1"
                style={{ color: props.mode.textcolor1 }}
              ></i>
            </a>
          </li>
          <div className=" m-2">
            <input type="checkbox" id="time" onClick={props.toggleMode}/>
            <label htmlFor="time">Night</label>
          </div>
        </div>
      </div>
    </nav>
  );
}
