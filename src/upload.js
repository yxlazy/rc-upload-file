import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

import Image from "./image";
import File from "./file";

import adapter from "./adapters";
import { isUndefined } from "./utils";

export default function upload({
  action,
  file,
  src,
  filename,
  isImage,
  onResponse
}) {
  const [loaded, setLoaded] = useState(0);
  const [total, setTotal] = useState(0);
  const [progressStyle, setProgressStyle] = useState("progress");

  useEffect(() => {
    if (file) {
      adapter({
        url: action,
        file: file,
        onProgress,
        onResponse,
        onError,
      });
    }
  }, []);

  useEffect(() => {
    if (total > 0 && loaded == total) {
      setProgressStyle("success");
    }
  }, [loaded, total]);

  function onProgress(e) {
    if (!e.lengthComputable) {
      return;
    }

    const {loaded, total} = e;

    if (!isUndefined(loaded) && !isUndefined(total)) {
      setLoaded(loaded);
      setTotal(total);
    }
  }

  function onError() {
    setProgressStyle("error");
  }

  return(
    <>
      {isImage
        ? <Image 
          title={filename} 
          {...{
            src,
            loaded,
            total,
            progressStyle
          }}
        />
        : <File 
          title={filename}
          {...{
            loaded,
            total,
            progressStyle
          }}
        />
      }
    </>
  );
}

upload.propTypes = {
  action: PropTypes.string.isRequired,
  file: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
  isImage: PropTypes.bool.isRequired,
  onResponse: PropTypes.func.isRequired,
};