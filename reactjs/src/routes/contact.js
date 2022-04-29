import React from 'react';
import routeCss from './routes.module.css';
import Header from '../components/containers/header';
import SocialMediaBtn from '../components/buttons/socialMediaBtn';
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';

const Contact = () => {
  return (
    <div className={routeCss.container}>
      <Header />
      <h1 className={routeCss.headingSm}>Contact Me</h1>
      <p className={routeCss.para}>Send me an email or connect with me on LinkedIn and Twitter. I look forward to hearing from you!</p>
      <div className={routeCss.flexContainer}>
        <div className={routeCss.contactDiv}>
          <p className={routeCss.contactHeading}>Email</p>
          <p id={routeCss.email}>AHarbeck91@outlook.com</p>
        </div>
        <div id={routeCss.socailContainer} className={routeCss.contactDiv}>
          <p className={routeCss.contactHeading}>Connect with me</p>
          {/* Social media buttons go here */}
          <div className={routeCss.horizontalStack}>
            <SocialMediaBtn icon={<BsLinkedin />} link={'https://www.linkedin.com/in/adam-harbeck/'}/>
            <SocialMediaBtn icon={<BsTwitter />} link={'https://www.twitter.com'}/>
            <SocialMediaBtn icon={<BsGithub />} link={'https://github.com/AdamHarbeck'}/>
          </div>
        </div>
      </div> 
    </div>
  )
}
export default Contact;
