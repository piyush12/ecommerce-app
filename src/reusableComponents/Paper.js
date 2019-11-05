import React from "react";

const style = {
  background: "#fff",
  padding: 10
};

const Paper = props => {
  return <div style={style}>{props.children}</div>;
};

export default Paper;
