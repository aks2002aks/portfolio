import React, { useEffect, useRef } from "react";
import "./Parallax_home.css";
import Progress_bar from "./Progress_bar";
import Contact_form from "./Contact_form";
export default function Parallax_home(props) {
 
  const AboutRef = useRef(null);
  const CarrerRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectRef = useRef(null);
  const InterestRef = useRef(null);
  const ConnectRef = useRef(null);
  useEffect(() => {
    
    if (props.path === "About") {
      AboutRef.current.scrollIntoView();
    }
    if (props.path === "Carrer") {
      CarrerRef.current.scrollIntoView();
    }
    if (props.path === "Skills") {
      SkillsRef.current.scrollIntoView();
    }
    if (props.path === "Project") {
      ProjectRef.current.scrollIntoView();
    }
    if (props.path === "Interest") {
      InterestRef.current.scrollIntoView();
    }
    if (props.path === "Connect") {
      ConnectRef.current.scrollIntoView();
    }
  });

  const handleDownload = ()=>{
    window.open('https://drive.google.com/drive/folders/1fp0bde3UWrPSjI4rbceyrLAKBZKSfCjH?usp=sharing', '_blank');
  }
  return (
    <div>
      <section
        className="module parallax parallax-1"
        data-type="background"
        data-speed="10"
        
      ></section>

      <section
        className="module content"
        style={{ backgroundColor: props.mode.maincolor}}
      >
        <div className="parallax-container">
          <h3 style={{ textAlign: "center", fontWeight: "bolder",color: props.mode.textcolor2 }}>I'm</h3>
          <h3
            style={{ color: props.mode.textcolor1, textAlign: "center", fontWeight: "bolder" }}
          >
            Ashwani Kumar Singh
          </h3>
          <h3 style={{ textAlign: "center" ,color: props.mode.textcolor2 }} ref={AboutRef} id="About">
            This is my official website to showcase my all works realted to web
            development,android development ,artificial intelligence, machine
            learning and coding languages.
          </h3>

          <div className="col-md-12 text-center my-1">
            <button type="button" className="btn " style={{ backgroundColor: props.mode.buttoncolor ,color:'white'}} onClick={handleDownload}>
              Download CV
            </button>
          </div>
        </div>
      </section>

      <section
        className="module content"
        style={{ backgroundColor: props.mode.titlecolor }}
      >
        <div className="parallax-container">
          <h1 style={{ textAlign: "center" ,color: props.mode.textcolor2}}>About</h1>
        </div>
      </section>

      <section
        className="module padding-class parallax-2 myimg"
        data-type="background"
        data-speed="10"
      >
        <img
          src={require("../images/125.jpeg")}
          className="rounded-circle my-img mx-auto d-block "
          alt="Cinque Terre"
          style={{ width: "40%", height: "auto" }}
        ></img>
        <h4 className="text-center bolder  my-4">Ashwani Kumar Singh</h4>
        <p className=" about-text">
          Hello, my name is Ashwani kumar singh currently persuing B.tech(4th
          semester) from KIIT(kalinga institute of idustrial technology) , I am
          always comitted to my work . I am results oriented, constantly
          checking in with the goal to determine how close or how far am i and
          what it will take to make it happen. As being so deicated i hold good
          quality of a natural leader. I’ve eventually been promoted to a
          leadership role in almost every job because I like to help people.
          currently holding no experience in IT industry but will try to work
          hard to solve real worlds problems
        </p>
        <div className="details-css">
          <h5>Birthday:</h5>
          <p> 15/05/2002 </p>
          <h5>Location:</h5>
          <p> Varanasi,India</p>
          <h5>Email:</h5>
          <p> aks.work.aks@gmail.com</p>
          <h5>Phone:</h5>
          <p ref={CarrerRef} id="Carrer">
            {" "}
            630xxxx511
          </p>
        </div>
      </section>

      <section className="module content"  style={{ backgroundColor: props.mode.titlecolor }}>
        <div className="parallax-container">
          <h1 style={{ textAlign: "center",color: props.mode.textcolor2 }}>Carrer/Journey</h1>
        </div>
      </section>

      <section
        className="module  padding-class1 parallax-3"
        data-type="background"
        data-speed="10"
        style={{backgroundImage:`url(${props.mode.imgset3})`}}
      >
        <img
          src={props.mode.cimgset}
          className="mx-auto d-block"
          alt="Cinque Terre"
          style={{ width: "100%", height: "auto", borderRadius: "10px" }}
        ></img>
      </section>

      <section
        className="module content"
        style={{ backgroundColor: props.mode.quotecolor }}
      >
        <div className="parallax-container">
          <h3 id="Skills" ref={SkillsRef} style={{ textAlign: "center" ,color: props.mode.textcolor2}}>
            “The only way to do great work is to love what you do. If you
            haven’t found it yet, keep looking. Don’t settle.” – Steve Jobs
          </h3>
        </div>
      </section>

      <section className="module content"  style={{ backgroundColor: props.mode.titlecolor }}>
        <div className="parallax-container">
          <h1 style={{ textAlign: "center",color: props.mode.textcolor2 }}>Skills</h1>
        </div>
      </section>

      <section
        className="module  padding-class parallax-4"
        data-type="background"
        data-speed="10"
        style={{backgroundImage:`url(${props.mode.imgset4})`}}
      >
        <Progress_bar percentage="80" title="c/c++" />
        <Progress_bar percentage="75" sign="info" title="Dsa" />
        <Progress_bar percentage="80" sign="danger" title="Html/Css" />
        <Progress_bar percentage="65" sign="warning" title="Javascript" />
        <Progress_bar percentage="80" sign="success" title="Mongo-DB" />
        <Progress_bar percentage="65" sign="info" title="Node.js/Express" />
        <Progress_bar percentage="70" title="python" />
        <Progress_bar percentage="75" sign="warning" title="Java" />
      </section>
      <section
        className="module content"
        style={{ backgroundColor: props.mode.quotecolor }}
      >
        <div className="parallax-container">
          <h3 style={{ textAlign: "center" ,color: props.mode.textcolor2 }} id="Project" ref={ProjectRef}>
            “Growth occurs when individuals confront problems, struggle to
            master them, and through that struggle develop new aspects of their
            skills, capacities, views about life.” — Carl R. Rogers
          </h3>
        </div>
      </section>

      <section className="module content"  style={{ backgroundColor: props.mode.titlecolor }}>
        <div className="parallax-container">
          <h1 style={{ textAlign: "center",color: props.mode.textcolor2 }}>Projects/Intership</h1>
        </div>
      </section>

      <section
        className="module  padding-class1 parallax-5 "
        data-type="background"
        data-speed="10"
        
        style={{color: "black",backgroundImage:`url(${props.mode.imgset5})`}}
      >
        <div className="conatiner d-flex flex-wrap justify-content-center">
          <div className={`card  m-3`} style={{ width: "18rem" ,backgroundColor:props.mode.cardbg}}>
            <img
              src={require("../images/133.png")}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title"  style={{ textAlign: "center",color: props.mode.textcolor2 }}>Student Tracking System</h5>
              <p className="card-text" style={{ textAlign: "center",color: props.mode.textcolor2 }}>
                Its is the website build for samrt india hackthon , where we
                have to solve this real world problem ,so that the unique
                identitiy of student can be verfired.
              </p>
            </div>
          </div>
          <div className={`card m-3`} style={{ width: "18rem" ,backgroundColor:props.mode.cardbg}}>
            <img
              src={require("../images/134.png")}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title" style={{ textAlign: "center",color: props.mode.textcolor2 }}>Personal Protfolio</h5>
              <p className="card-text" style={{ textAlign: "center",color: props.mode.textcolor2 }}>
                Its is the website on which you are watching this , this just
                make for my protfolio to advance in resume
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="module content"
        style={{ backgroundColor: props.mode.quotecolor }}
      >
        <div className="parallax-container">
          <h3 id="Interest" ref={InterestRef} style={{ textAlign: "center" ,color: props.mode.textcolor2}}>
            Everyone wants to be a stylist. If you know that’s your calling,
            then you need to intern as much as humanly possible. --Rachel Zoe
          </h3>
        </div>
      </section>

      <section className="module content" style={{ backgroundColor: props.mode.titlecolor }}>
        <div className="parallax-container"  >
          <h1 style={{ textAlign: "center",color: props.mode.textcolor2 }}>Interest</h1>
        </div>
      </section>
      <section
        className="module  padding-class1 parallax-6 "
        data-type="background"
        data-speed="10"
        style={{ color: "black" }}
        
      >
        <div
          className="conatiner d-flex flex-wrap justify-content-center"
          style={{ color:props.mode.textcolor3  }}
        >
          <i className="fa-solid fa-camera  m-2">__PHOTGRAPHY__</i>
          <i className="fa-solid fa-gamepad m-2">__GAMMING__</i>
          <i className="fa-solid fa-table-tennis-paddle-ball m-2">
            __PLAYING LAWN TENNIS__
          </i>
          <i className="fa-solid fa-film m-2">__MOVIES/SERIES__</i>
          <i className="fa-solid fa-music m-2">__MUSIC__</i>
          <i className=""></i>
        </div>
      </section>

      <section
        className="module content"
        style={{ backgroundColor: props.mode.quotecolor }}
      >
        <div className="parallax-container">
          <h3 id="Connect" ref={ConnectRef} style={{ textAlign: "center" ,color: props.mode.textcolor2}}>
            Everyone wants to be a stylist. If you know that’s your calling,
            then you need to intern as much as humanly possible. --Rachel Zoe
          </h3>
        </div>
      </section>

      <section className="module content"  style={{ backgroundColor: props.mode.titlecolor }}>
     
        <div className="parallax-container" >
          <h1 style={{ textAlign: "center",color: props.mode.textcolor2 }}>Let's Connect</h1>
        </div>
      </section>

      <section
        className="module padding-class parallax-7"
        data-type="background"
        data-speed="10"
        style={{backgroundImage:`url(${props.mode.imgset6})`}}

      >
        <Contact_form mode={props.mode} />
      </section>

      <section
        className="module  content"
        style={{ backgroundColor: props.mode.quotecolor }}
      >
        <div className="parallax-container">
          <h3 style={{ textAlign: "center",color: props.mode.textcolor2 }}>
            “All things are connected like the blood that unites us. We do not
            weave the web of life, we are merely a strand in it. Whatever we do
            to the web, we do to ourselves.” -Chief Seattle
          </h3>
        </div>
      </section>
    </div>
  );
}
