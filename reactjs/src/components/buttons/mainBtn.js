import React from "react";
import buttonCss from './buttons.module.css';

const MainBtn = (props) => {
  return (
    <button id={buttonCss.mainBtn}>{props.btnText}</button>
  )
}
export default MainBtn;
