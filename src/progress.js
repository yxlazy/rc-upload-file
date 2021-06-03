import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { isNumber } from "./utils";

const prefix = "rc-upload-file-progress";


const colors = {
  primary: "#00b894",
  error: "#ff7675",
  progress: "#0984e3"
};

export default function progress({value, total, status}) {
  const [prog, setProg] = useState(0);

  useEffect(() => {
    if (isNumber(value) && isNumber(total)) {
      const progress = Number.parseFloat((value / total)) * 100;
      setProg(Math.ceil(progress));
    }
  }, [value, total]);
  
  const displayColor = status != "error" ? status == "progress" ? colors.progress : colors.primary : colors.error;

  return(
    <div className={prefix}>
      <span 
        className={`${prefix}-bar`} 
        style={{
          width: `calc(${prog}% - 50px)`,
          background: displayColor
        }}
      />
      <span className={`${prefix}-value`} style={{width: "40px", color: displayColor}}>{prog} %</span>
    </div>
  );
}

progress.propTypes = {
  value: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  status: PropTypes.oneOf(["error", "progress", "success"]),
};

