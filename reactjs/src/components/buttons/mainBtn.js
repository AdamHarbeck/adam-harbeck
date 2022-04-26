import React from "react";
import buttonCss from './buttons.module.css';

const MainBtn = (props) => {
  return (
    <div className={buttonCss.btnCntr}>
      <button id={buttonCss.mainBtn}>{props.btnText}</button>
    </div>
  )
}
export default MainBtn;
