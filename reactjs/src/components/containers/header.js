import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/reverse.png';
import { BsList } from 'react-icons/bs'
import containerCss from './containers.module.css';

const Header = () => {
  return (
    <div className={containerCss.headerContainer}>
      <div id={containerCss.logoContainer}>
        <img id={containerCss.logo} src={logo} alt={"Adam Harbeck's logo. An A and an H in a box."} />
      </div>
      <BsList id={containerCss.menuIcon}/>
      <div id={containerCss.navLink}>
        <Link to={'/'} className={containerCss.link}>Home</Link>
        <Link to={'/projects'} className={containerCss.link}>Projects</Link>
        <Link to={'/about'} className={containerCss.link}>About</Link>
        <Link to={'/contact'} className={containerCss.link}>Contact</Link>
      </div>
    </div>
  )
}
export default Header;
