import React from "react";
import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs';
import SocialMediaBtn from '../buttons/socialMediaBtn';
import containerCss from './containers.module.css';

const ProjLinks = () => {
  return (
    <div className={containerCss.pLink}>
      <SocialMediaBtn icon={ <BsGithub /> } link={'https://github.com/AdamHarbeck/BatterDay'} />
      <SocialMediaBtn icon={ <BsBoxArrowUpRight /> } link={'https://adamharbeck.github.io/BatterDay/'} />
    </div>
  ) 
}
export default ProjLinks;
