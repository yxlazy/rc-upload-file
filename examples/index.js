import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import {Modal, Progress} from "../src/index";

const styles = {
  card: {
    border: "1px solid #b2bec3",
    borderRadius: "5px",
    padding: "20px",
    margin: "20px 0"
  }
};


const Examples = React.forwardRef((props, ref) => {
  return(
    <div style={styles.card} ref={ref}>
      <p>{props.title}</p>
      {props.children}
    </div>
  );
});

Examples.displayName = "Examples";

Examples.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

function App() {
  const containerRef = useRef(null);
  const [container, setContainer] = useState(undefined);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      setContainer(containerRef.current);
    }
  }, []);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return(
    <div>
      <h3>举个🌰</h3>
      <Examples title="进度条">
        <Progress value={40} total={100} status="progress"/>
        <Progress value={75} total={100} status="error"/>
        <Progress value={100} total={110} status="success"/>
        <Progress value={100} total={1320} status="error"/>
      </Examples>
      <Examples title="模态框" ref={containerRef}>
        <button style={{border: "none", padding: "10px", cursor: "pointer"}} onClick={handleOpen}>Switch</button>
        <Modal 
          title="modal.png" 
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2759603483,1319363293&fm=26&gp=0.jpg"
          isOpen={open}
          onClose={handleClose}
          container={container}
        />
      </Examples>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);