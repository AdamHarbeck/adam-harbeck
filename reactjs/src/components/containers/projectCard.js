import React from "react";
import MainBtn from "../buttons/mainBtn";
import containerCss from './containers.module.css';
import ProjLinks from "./projLinks";

const ProjectCard = (props) => {
  // Takes in a JSON object sent by projects.js, from /assests/projectData.js. Uses data to popluate the fields.
  const data = props.data;

  return (
    <div className={containerCss.pcardContainer}>
      <h1 id={containerCss.projTitle}>{data.projName}</h1> {/*Whats the heading style */}
      <div className={containerCss.flexChild}>
        <picture>
          <source media='(min-width:800px)' srcSet={data.imgs[0][2]} />
          <source media='(min-width:600px)' srcSet={data.imgs[0][1]} />
          <img src={data.imgs[0][0]} alt={''} id={containerCss.projImage}/> {/*Whats the img style */}
        </picture>
        <div id={containerCss.textDiv}>
          <p> {data.summary}</p> {/*Whats the summary style */}
          <p id={containerCss.pcardTech}>{data.tech}</p> {/*Whats the tech style */}
        </div>
      </div>
      <div className={containerCss.pBtnsDiv}>
        <div id={containerCss.projMainBtnDiv}>
          <MainBtn btnText={'Learn More'} />
        </div>
        <ProjLinks />
      </div>
    </div>
  )  
}
export default ProjectCard;

