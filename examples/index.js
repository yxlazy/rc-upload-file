import React from "react";
import ReactDOM from "react-dom";

import {Progress} from "../src/index";

const styles = {
  card: {
    border: "1px solid #b2bec3",
    borderRadius: "5px",
    padding: "20px",
    margin: "20px 0"
  }
}

ReactDOM.render(
  <div>
    <h3>举个🌰</h3>
    <div style={styles.card}>
      <p>进度条</p>
      <Progress value={40} total={100} status="progress"/>
      <Progress value={75} total={100} status="error"/>
      <Progress value={100} total={110} status="success"/>
      <Progress value={100} total={1320} status="error"/>
    </div>
  </div>,
  document.getElementById("root")
);