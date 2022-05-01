import React from "react";
import { BsBoxArrowUpRight } from 'react-icons/bs';
import SocialMediaBtn from '../buttons/socialMediaBtn';
import containerCss from './containers.module.css';

const ProjLinks = (props) => {
  return (
    <div className={containerCss.pLink}>
      <SocialMediaBtn icon={ <BsBoxArrowUpRight /> } link={props.link} />
    </div>
  ) 
}
export default ProjLinks;
