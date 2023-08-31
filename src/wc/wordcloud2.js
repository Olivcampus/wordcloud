import { useEffect, useRef } from "react";
import Wordcloud from "wordcloud";
import data from "./data.json";

const WordCloud2 = () => {
  const wordcloudref = useRef(null);

  useEffect(() => {
    Wordcloud(wordcloudref.current, {
      list: [...data.map((w) => [w.SeLabel, w.value])],
      fontFamily: "Times, serif"
    });
  }, []);

  return (
    <div className="App">
      <canvas ref={wordcloudref} />
    </div>
  );
};

export default WordCloud2;
