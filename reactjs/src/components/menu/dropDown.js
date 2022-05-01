import React from 'react';
import { Link } from 'react-router-dom';
import menuCss from './menu.module.css';

const DropDown = (props) => {
  if (!props.menuShow) {
    return null;
  }
  const onTrigger = () => {
    props.onClose();
  };

  return (
    <div onClick={props.onClose} className={menuCss.dropDown}>
      <div id={menuCss.menuSqr}></div>
      <div onClick={ (e) => e.stopPropagation()}>
        <div className={menuCss.textContainer} onClick={onTrigger}>
          <Link to={'/'} onClick={onTrigger} className={menuCss.link}>Home</Link>
          <Link to={'/projects'} onClick={onTrigger} className={menuCss.link}>Projects</Link>
          <Link to={'/about'} onClick={onTrigger} className={menuCss.link}>About</Link>
          <Link to={'/contact'} onClick={onTrigger} className={menuCss.link}>Contact</Link>
        </div>
      </div>
    </div>
  );
};
export default DropDown;
