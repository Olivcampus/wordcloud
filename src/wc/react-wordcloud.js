import React from "react";
import ReactWordcloud from "react-wordcloud";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import data from "./data.json";

const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "montserrat",
  fontSizes: [5, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 0,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000
};

function CReactWordcloud() {
  return (
    <>
      <h2>react-wordcloud</h2>
      <div style={{ height: 250, width: 400 }}>
        <ReactWordcloud
          options={options}
          words={data.map((word) => ({
            text: word.SeLabel,
            value: word.value
          }))}
        />
      </div>
      <br />
      <br />
    </>
  );
}

export default CReactWordcloud;
