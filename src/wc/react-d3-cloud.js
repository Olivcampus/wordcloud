import React from "react";
import WordCloud from "react-d3-cloud";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

import data from "./data.json";

const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);

function ReactD3Cloud() {
  return (
    <WordCloud
      data={data.map((word) => ({ text: word.SeLabel, value: word.value }))}
      width={500}
      height={500}
      fontSize={(word) => Math.log2(word.value) * 5}
      spiral="rectangular"
      rotate={(word) => word.value % 1}
      padding={1}
      onWordClick={(event, d) => {
        console.log(`onWordClick: ${d.text}`);
      }}
      onWordMouseOver={(event, d) => {
        console.log(`onWordMouseOver: ${d.text}`);
      }}
      onWordMouseOut={(event, d) => {
        console.log(`onWordMouseOut: ${d.text}`);
      }}
    />
  );
}

export default ReactD3Cloud;
