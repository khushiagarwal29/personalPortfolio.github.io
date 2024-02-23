import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, { 
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60, 
      strings: ["FrontEnd", "BackEnd"],
     });

  },[]);

  return (
    <div className="intro" id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets\Photo.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Khushi Agarwal</h1>
          <h3><span ref={textRef}></span> Java Developer </h3>
          <p>Experienced Full Stack Java Developer skilled in crafting robust web applications. 
            Passionate about leveraging Java technologies to create efficient and user-friendly solutions.</p>
        </div>
        <a href="#about">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
