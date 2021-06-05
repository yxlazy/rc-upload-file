import React, { useState } from "react";
import PropTypes from "prop-types";

import Progress from "./progress";
import Modal from "./modal";

const prefix = "rc-upload-file-image";

export default function image({
  title,
  src,
  loaded,
  total,
  progressStyle
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [container, setContainer] = useState(null);
  
  function openImageAtModal() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  function getRef(ref) {
    setContainer(ref);
  }

  return(
    <div className={`${prefix}`}>
      <div className={`${prefix}-img`} ref={getRef}>
        <img src={src} onClick={openImageAtModal}/>
      </div>
      <div className={`${prefix}-progress`}>
        <p>{title}</p>
        <Progress value={loaded} total={total} status={progressStyle}/>
      </div>
      <Modal title={title} src={src} isOpen={isOpen} container={container} onClose={onClose}/>
    </div>
  );
}

image.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  loaded: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  progressStyle: PropTypes.oneOf(["error", "progress", "success"]),
};