import { useState } from 'react';
import './projects.scss'

export default function Projects() {
  const [currentSlide , setcurrentSlide] = useState(0)
  const data =[
    {
      
      id: "1",
      icon: "./assets/portfolioIcon.png",
      title: "Personal Portfolio",
      desc:
        "Developed a personal portfolio website to showcase projects and skills.",
      img:
        "./assets/portfolioImg.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way)=>{
    way === "left" ? setcurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) :
    setcurrentSlide(currentSlide<data.length-1 ? currentSlide +1 : 0);
  };

  return (
   
    <div className='projects' id='projects'>
      <div><h1>Projects</h1>
      <div className="slider" style={{transform: `translateX(${-currentSlide * 100}vw)` }}>
      
        {data.map((d) => (
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc} </p>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>
        ))}
      </div>
      </div>
      
      {/* <img src="assets/down.png" className='arrow left' alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/down.png" className='arrow right' alt="" onClick={()=>handleClick()}/> */}
    </div>
  )
}
