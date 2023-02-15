import Child from "./Child.js";
import "./Mother.css";

const kids = [
  { name: "Ori", color: "red" },
  { name: "Ron", color: "blue" },
  { name: "Sigalit", color: "green" },
  { name: "Ruti", color: "yellow" },
  { name: "Alon", color: "purple" },
];
function Mother(props) {
  return (
    <div>
      <h1> A Tale of Five Balloons</h1>
      <div className="view">
        {kids.map((kid) => {
          return (
            <Child name={kid.name} color={kid.color} key={kid.color}></Child>
          );
        })}
      </div>
    </div>
  );
}
export default Mother;
