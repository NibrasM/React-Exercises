import Balloon from "./Balloon.js";
import "./Child.css";
function Child(props) {
  return (
    <div className="viewChild">
      <div>
        <h3>{props.name}</h3>
        <Balloon bckColor={props.color}> </Balloon>
      </div>
    </div>
  );
}
export default Child;
