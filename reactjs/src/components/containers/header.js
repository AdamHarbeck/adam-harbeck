import { React, useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/reverse.png';
import { BsList } from 'react-icons/bs'
import containerCss from './containers.module.css';
import DropDown from "../menu/dropDown";


const Header = () => {
  const [state, setState] = useState(false);

  function showHide() {
    if (state === true) {
      setState(false);
    } else {
      setState(true);
    }
  }

  return (
    <div>
      <div className={containerCss.headerContainer}>
        <div id={containerCss.logoContainer}>
          <img id={containerCss.logo} src={logo} alt={"Adam Harbeck's logo. An A and an H in a box."} />
        </div>
        <BsList id={containerCss.menuIcon} onClick={ showHide }/>
        <div id={containerCss.navLink}>
          <Link to={'/'} className={containerCss.link} >Home</Link>
          <Link to={'/projects'} className={containerCss.link}>Projects</Link>
          <Link to={'/about'} className={containerCss.link}>About</Link>
          <Link to={'/contact'} className={containerCss.link}>Contact</Link>
        </div>
      </div>
      <DropDown menuShow={ state } onClose={() => setState(false) } />
    </div>
  )
}
export default Header;
