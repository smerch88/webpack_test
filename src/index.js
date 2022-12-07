import "./styles/index.css";

const entries = {
  name: "Arsenii",
  age: 25,
};

const finalObj = {
  ...entries,
  language: "JS",
  framework: "React",
};

console.log(finalObj);
