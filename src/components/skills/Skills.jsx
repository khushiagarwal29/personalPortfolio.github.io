import { useEffect, useState } from 'react'
import SkillsList from '../skillsList/SkillsList'
import './skills.scss';
import {
  featuredPortfolio,
  webPortfolio,
} from "../../data";


export default function Skills() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
        {
          id: "featured",
          title: "Frontend Technologies",
        },
        {
          id: "web",
          title: "Backend Technologies",
        },
  ];

  useEffect(()=>{
    
    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
        case "web":
        setData(webPortfolio);
        break;
        default:
          setData(featuredPortfolio);
    }

  },[selected])
  return (
    <div className='skills' id='skills'>
      <h1>Skills</h1>
      <ul>
          {list.map((item) => (
            <SkillsList title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected}
            id={item.id}/>
          ))}
      </ul>
      <div className="container">
        {data.map((d) => (
        <div className="item">
          <img src={d.img} alt="" />
          <h3>{d.title}</h3>
        </div>
        ))}
      </div>
    </div>
  )
}
