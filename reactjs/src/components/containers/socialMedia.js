import React from "react";
import SocialMediaBtn from "../buttons/socialMediaBtn";
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import containerCss from './containers.module.css';

const SocialMedia = () => {
  // This will contain the 3 social media buttons. They will need to have the icon sent in as props.
    return (
    <div id={containerCss.socialStack}>
      <SocialMediaBtn icon={<BsLinkedin />} link={'https://www.linkedin.com/in/adam-harbeck/'}/>
      <SocialMediaBtn icon={<BsTwitter />} link={'https://www.twitter.com'}/>
      <SocialMediaBtn icon={<BsGithub />} link={'https://github.com/AdamHarbeck'}/>
    </div>
  )
}
export default SocialMedia;
