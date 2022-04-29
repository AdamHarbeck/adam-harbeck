import React from "react";
import routeCss from './routes.module.css';
import MainBtn from "../components/buttons/mainBtn";
import Header from "../components/containers/header";
import SocialMedia from "../components/containers/socialMedia";

// PUSH BRANCH AFTER HOME IS COMPLETE. MERGE WITH DEV, THEN STAGE. MAKE ANOTHER BRANCH FOR THE NEXT ROUTE
// POSSIBLY USE TRANSITIONS IN THE CSS TO MAKE THE RESPONIVENESS MORE FLUID

const Home = () => {
  return (
    <div className={routeCss.container} >
      <Header />
      <div id={routeCss.homeContainer}>
        <div id={routeCss.homeContent}>
          <h1 className={routeCss.heading}>
            Hi, I'm <div id={routeCss.emphasis}>Adam Harbeck.</div> Front-end <span>developer.</span>
          </h1>
          <p className={routeCss.textContainer}>
            I’m a front-end and full stack developer specializing in React. 
            I’m dedicated to creating responsive, mobile first designs that
            are maintainable and have great UIs.
          </p>
          <div id={routeCss.homeBtnDiv}>
            <MainBtn btnText={'Contact Me'} />
          </div>
        </div>
        <div id={routeCss.socialShow}>
          <SocialMedia />
        </div>
      </div>
    </div>
  )
}
export default Home;
