import React from "react";
import PropTypes from "prop-types";

import Progress from "./progress";

const prefix = "rc-upload-file-upload-file";

export default function file({
  title,
  loaded,
  total,
  progressStyle
}) {
  return(
    <div className={`${prefix}`}>
      <span><FileSvg fontSize={25} /></span>
      <div className={`${prefix}-progress`}>
        <p>{title}</p>
        <Progress value={loaded} total={total} status={progressStyle}/>
      </div>
    </div>
  );
}

file.propTypes = {
  title: PropTypes.string.isRequired,
  loaded: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  progressStyle: PropTypes.oneOf(["error", "progress", "success"]),
};

function FileSvg({
  color = "#74b9ff",
  fontSize = 16
}) {
  return(
    <svg t="1622710811135" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2497" width={fontSize} height={fontSize}>
      <path 
        style={{
          fill: color,
        }} 
        d="M960 1024H128V0h563.2L960 275.2V1024zM192 960h704V300.8L659.2 64H192v896z" 
        p-id="2498"
      />
      <path 
        style={{
          fill: color,
        }} 
        d="M896 332.8H627.2V44.8h64v224H896z" 
        p-id="2499"
      />
    </svg>
  );
}

FileSvg.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
};