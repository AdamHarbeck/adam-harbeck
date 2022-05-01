import React from 'react';
import MainBtn from '../components/buttons/mainBtn';
import Header from '../components/containers/header';
import SocialMedia from '../components/containers/socialMedia';
import routeCss from './routes.module.css';
import Picture from '../assets/practice.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={routeCss.container}>
      <Header />
      <h1 className={routeCss.headingSm}>About Me</h1>
      <div id={routeCss.aboutContainer}>
        <div id={routeCss.about1}>
          <div id={routeCss.bio}>
            <p>
              Hello, my name is Adam Harbeck and I’m a front-end and 
              full stack developer from Seattle, Washington. I enjoy 
              using words to weave the fabric of websites. 
            </p>
            <p>
              I’m a dedicated, reliable, hard-working individual who 
              enjoys problem solving. I enjoy learning new things on and 
              off the computer. Baking goodies, playing games (board & 
              video), watching TV & movies, going to the beach and for 
              drives, and hanging out with my husband are my favorite 
              pass times outside of work. 
            </p>
            <p>
              Interested in the full spectrum of web development (front 
              and back) as well as game and application development.
            </p>
          </div>
          <div id={routeCss.techStack}>
            <p id={routeCss.drkColor}>Tech:</p>
            <ul id={routeCss.list}>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Postgres</li>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>C#</li>
            </ul>
          </div>
          <div id={routeCss.hiddenBtn}>
            <Link to={'/contact'}>
              <MainBtn btnText={'Contact Me'} />
            </Link>
          </div>
        </div>

        <div id={routeCss.about2}>
          <img src={Picture} alt={'Adam Harbeck'} id={routeCss.img}/>
          <div className={routeCss.show}>
            <SocialMedia  />
          </div>
          <div id={routeCss.aboutBtnDiv}>
            <MainBtn btnText={'Contact Me'} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default About;
