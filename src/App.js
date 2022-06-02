import "./App.css";
import Navbar from "./components/Navbar";
import Parallax_home from "./components/Parallax_home";
import Footer_home from "./components/Footer_home";
import Photography from "./components/Photography";
import { useState } from "react";
import bg3 from "./images/124.jpg";
import setbg3 from "./images/137.jpg";
import bg4 from "./images/135.jpg";
import setbg4 from "./images/138.jpg";
import bg5 from "./images/134.jpg";
import setbg5 from "./images/139.jpg";
import bg6 from "./images/125.jpg";
import setbg6 from "./images/140.jpg";
import cimg from "./images/142.png";
import setcimg from "./images/141.png";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState({
    type: "light",
    navcolor: "#FEFFE2",
    quotecolor: "#F0F0CB",
    titlecolor: "#C3BA85",
    maincolor: "#DAD5AB",
    textcolor: "black",
    textcolor1: "blue",
    textcolor2: "black",
    textcolor3: "white",
    buttoncolor: "blue",
    imgset3: bg3,
    imgset4: bg4,
    imgset5: bg5,
    imgset6: bg6,
    cimgset: cimg,
    cardbg: 'white',
    bgcolor:'white',
    photobgcolor:'white'
  });

  const toggleMode = () => {
   
    if (mode.type === "light") {
      setMode({
        type: "dark",
        navcolor: "#2C2828",
        quotecolor: "#414141",
        titlecolor: "#313131",
        maincolor: "#414141",
        textcolor: "white",
        textcolor1: "#FA7D09",
        textcolor2: "#D1E8E4",
        textcolor3: "#FA7D09",
        buttoncolor: "#FA7D09",
        imgset3: setbg3,
        imgset4: setbg4,
        imgset5: setbg5,
        imgset6: setbg6,
        cimgset: setcimg,
        cardbg: '#361500',
        bgcolor:'black',
        photobgcolor:'#3A3845'
      });
    } else {
      setMode({
        type: "light",
        navcolor: "#FEFFE2",
        quotecolor: "#F0F0CB",
        titlecolor: "#C3BA85",
        maincolor: "#DAD5AB",
        textcolor: "black",
        textcolor1: "blue",
        textcolor2: "black",
        textcolor3: "white",
        buttoncolor: "blue",
        imgset3: bg3,
        imgset4: bg4,
        imgset5: bg5,
        imgset6: bg6,
        cimgset: cimg,
        cardbg: 'white',
        bgcolor:'white',
        photobgcolor:'white'
      });
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar mode={mode} toggleMode={toggleMode} />
                <Parallax_home mode={mode} />
              </>
            }
          />
          <Route
            exact
            path="/About"
            Redirect
            to="/"
            element={
              <>
                <Navbar mode={mode} toggleMode={toggleMode} />
                <Parallax_home path="About" mode={mode} />
              </>
            }
          />
          <Route
            exact
            path="/Carrer"
            Redirect
            to="/"
            element={
              <>
                <Navbar mode={mode} toggleMode={toggleMode} />
                <Parallax_home path="Carrer" mode={mode} />
              </>
            }
          />
          <Route
            exact
            path="/Skills"
            Redirect
            to="/"
            element={
              <>
                <Navbar mode={mode} toggleMode={toggleMode} />
                <Parallax_home path="Skills" mode={mode} />
              </>
            }
          />
          <Route
            exact
            path="/Project"
            Redirect
            to="/"
            element={
              <>
                <Navbar mode={mode} toggleMode={toggleMode} />
                <Parallax_home path="Project" mode={mode} />
              </>
            }
          />
          <Route
            exact
            path="/Interest"
            Redirect
            to="/"
            element={
              <>
                <Navbar mode={mode} toggleMode={toggleMode} />
                <Parallax_home path="Interest" mode={mode} />
              </>
            }
          />
          <Route
            exact
            path="/Connect"
            Redirect
            to="/"
            element={
              <>
                <Navbar mode={mode} toggleMode={toggleMode} />
                <Parallax_home path="Connect" mode={mode} />
              </>
            }
          />
          <Route
            exact
            path="/photography"
            element={
              <>
                <Navbar mode={mode} toggleMode={toggleMode} />
                <Photography mode={mode} />
              </>
            }
          />
        </Routes>
        <Footer_home mode={mode}/>
      </Router>
    </>
  );
}

export default App;
