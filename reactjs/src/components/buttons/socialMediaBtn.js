import React from "react";

const SocialMediaBtn = (props) => {
  return (
    <div>
      <a href={props.link}>{props.icon}</a>
    </div>
  )
}
export default SocialMediaBtn;
