import React, { useState } from "react";
import PropTypes from "prop-types";
import useFileReader from "./useFileReader";
import "./style.css";

const prefix = "rc-upload-file";

export default function RcUploadFile({children}) {
  const [image, progress, fileReader] = useFileReader();
  const [fileInput, setFileInput] = useState(null);

  function selectFile(e) {
    const target = e.target,
      files = target.files;

    if (files.length < 1) {
      return;
    }
    
    fileReader(files);
  }

  function saveFileInput(node) {
    setFileInput(node);
  }
  function onClick() {
    if (!fileInput) {
      return;
    }

    fileInput.click();
  }
  
  return(
    <div>
      <span onClick={onClick}>
        <input accept='image/*' ref={saveFileInput} onChange={selectFile} type='file' style={{display: "none"}}/>
        {children}
      </span>
      {
        progress && <div>
          {progress && <div className={`${prefix}-progress`}>
            <span style={{width: `${progress}%`}}></span>
            <span>{progress}%</span>
          </div>}
          {image}
        </div>
      }
    </div>
  );
}

RcUploadFile.defaultProps = { 
  children: [React.createElement("button", { className: `${prefix}-button` }, "Click to Upload")] 
};

RcUploadFile.propTypes = {
  children: PropTypes.ReactNode
};
