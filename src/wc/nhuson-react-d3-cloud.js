import React, { useEffect, useState } from "react";
import WordCloud from "@nhuson/react-d3-cloud";
import data from "./data.json";

const fontSizeMapper = (word) => Math.log2(word.value) * 5;

const Cloud = () => {
  return (
    <WordCloud
      data={data.map((w) => ({ text: w.SeLabel, value: w.value }))}
      fontSizeMapper={fontSizeMapper}
    />
  );
};

export default Cloud;
