import React from "react";
import Header from "../components/containers/header";
import ProjectCard from "../components/containers/projectCard";
import routeCss from './routes.module.css';
import ProjectData from "../assets/projectData";

const Projects = () => {
  // Brings in data as a JSON object from ProjectData. ProjectCard takes the JSON object to populate the fields.
  const pData = ProjectData;
  return (
    <div className={routeCss.container}>
      <Header />
      <h1 className={routeCss.headingSm}>Projects</h1>
      {pData.map(obj => {return <ProjectCard data={obj} />})}
    </div>
  )
}
export default Projects;