import "./WorkCardStyles.css";
import React from 'react';
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
     <div className="project-container">

        {
            WorkCardData.map((value,ind)=>{
                return <WorkCard 
                key={ind}
                imgsrc={value.imgsrc}
                title={value.title}
                text={value.text}
                view={value.view}
                />
            })
        }

     </div>
    </div>
  )
}

export default Work
