import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import Upload from "./upload";

import "./style.css";

const prefix = "rc-upload-file";

export default function uploadFile({
  multiple = false,
  accept = "image/*",
  ...others
}) {
  const inputRef = useRef(null);
  const [files, setFiles] = useState(null);

  const [parserFiles, setParserFiles] = useState(new Map());

  useEffect(() => {
    if (!files) {
      return;
    }

    for (let key in files) {
      if (Object.prototype.hasOwnProperty.call(files, key)) {
        const file = files[key];
        //图片转换成base64
        if (/^image\//.test(file.type)) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
  
          reader.onload = function () {
  
            setParserFiles(prev => {
              if (prev.has(file)) {
                prev.delete(file);
              } 
              prev.set(file, {filename: file.name, src: reader.result, isImage: true});
              return new Map(prev);
            });
          };
  
          reader.onerror = function () {
            throw new Error(reader.error);
          };
        } else {
          setParserFiles(prev => {
            if (prev.has(file)) {
              prev.delete(file);
            } 
            prev.set(file, {filename: file.name, isImage: false});
            return new Map(prev);
          });
        }      
      }
    }

  }, [files]);

  function onUpload() {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  function onSelectFile(e) {
    const files = e.target.files;

    setFiles(files);
  }
  
  return(
    <div className={`${prefix}`}>
      <div onClick={onUpload} className={`${prefix}-btn`}>
        <button><span>Upload</span></button>
        <input accept={accept} ref={inputRef} multiple={multiple} type="file" style={{display: "none"}} onChange={onSelectFile}/>
      </div>
      {parserFiles.size > 0 && 
      Array.from(parserFiles).map(parserFile => (
        <Upload 
          key={parserFile[0].lastModified} 
          file={parserFile[0]} 
          src={parserFile[1]?.src || ""} 
          filename={parserFile[1].filename} 
          isImage={parserFile[1].isImage}
          {...others}
        />
      ))}
    </div>
  );
}

uploadFile.propTypes = {
  multiple: PropTypes.bool,
  accept: PropTypes.string,
  action: PropTypes.string.isRequired,
  onResponse: PropTypes.func,
};

uploadFile.defaultProps = {
  onResponse: () => {}
};
