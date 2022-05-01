import React from "react";
import routeCss from './routes.module.css';
import MainBtn from "../components/buttons/mainBtn";
import Header from "../components/containers/header";
import SocialMedia from "../components/containers/socialMedia";
import { Link } from "react-router-dom";

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
            <Link to={'/contact'}>
              <MainBtn btnText={'Contact Me'} />
            </Link>
          </div>
        </div>
        <div className={routeCss.show}>
          <SocialMedia />
        </div>
      </div>
    </div>
  )
}
export default Home;
