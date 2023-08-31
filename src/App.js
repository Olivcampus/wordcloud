import WordCloud from "./wc/wordcloud2"; // not enough memory
import CReactWordcloud from "./wc/react-wordcloud";
import ReactD3Cloud from "./wc/react-d3-cloud";
import ReactTagcloud from "./wc/react-tagcloud"; //has error
import ChartjsChartWordcloud from "./wc/chartjs-chart-wordcloud.js"; // has error
import NhusonReactD3Cloud from "./wc/nhuson-react-d3-cloud";

export default function App() {
  return (
    <div>
      {/* <WordCloud /> */}
      <CReactWordcloud />
      {/* <ReactD3Cloud /> */}
      {/* <ReactTagcloud />  */}
      {/* <ChartjsChartWordcloud />  */}
      {/* <NhusonReactD3Cloud /> */}
    </div>
  );
}
