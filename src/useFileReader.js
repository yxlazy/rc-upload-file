import React, { useEffect, useState } from "react";

const prefix = "rc-upload-file";

export default  function useFileReader() {
  const [allFiles, setAllFiles] = useState(null);
  const [progress, setProgress] = useState(null);
  const [blobData, setBlobData] = useState(null);
  useEffect(() => {
    if (allFiles) {
      for (let key in allFiles) {
        // eslint-disable-next-line no-prototype-builtins
        if (allFiles.hasOwnProperty(key)) {
          const file = allFiles[key];

          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function () {
            //load
            setBlobData(() => (<div className={`${prefix}-loaded-image`}>
              <img src={reader.result} alt=''/>
              <span>{file.name}</span>
            </div>)
            );
          };

          reader.onprogress = function (even) {
            if (even.lengthComputable) {
              setProgress(null);
              const progress = parseInt((even.loaded / even.total) * 100);
              setProgress(progress);
            }
          };

          reader.onerror = function () {
            //error
            throw new Error(reader.error);
          };
        }
      }
    }
  }, [allFiles]);
  return [blobData, progress, setAllFiles];
}
