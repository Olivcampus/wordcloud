import { TagCloud } from "react-tagcloud";

const data = [
  { value: "JavaScript", count: 38 },
  { value: "React", count: 30 },
  { value: "Nodejs", count: 28 },
  { value: "Express.js", count: 25 },
  { value: "HTML5", count: 33 },
  { value: "MongoDB", count: 18 },
  { value: "CSS3", count: 20 }
];

const SimpleCloud = () => (
  <TagCloud
    minSize={0}
    maxSize={1000}
    data={data}
    onClick={(tag) => alert(`'${tag.value}' was selected!`)}
  />
);

export default SimpleCloud;
