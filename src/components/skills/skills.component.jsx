import React from "react";
 

// skills
import { skills } from "./skills-data";

import "./skills.styles.css";

const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      <h1>Front End:</h1>
      {skills.frontend.map((skill)=>{
       return <div className="skill">
         <img src={skill.imgSrc} alt={skill.imgAltText} width="30" height="30" />  <h4>{skill.skillName}</h4>
        </div>
      })}

<h1>Backend End:</h1>
      {skills.backend.map((skill)=>{
       return <div className="skill">
         <img src={skill.imgSrc} alt={skill.imgAltText} width="30" height="30" />  <h4>{skill.skillName}</h4>
        </div>
      })}

<h1>Databases:</h1>
      {skills.databases.map((skill)=>{
       return <div className="skill">
         <img src={skill.imgSrc} alt={skill.imgAltText} width="30" height="30" />   <h4>{skill.skillName}</h4>
        </div>
      })}
    </div>
  );
};

export default Skills;
