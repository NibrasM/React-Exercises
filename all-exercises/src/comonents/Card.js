import "./Card.css";
function Card(props) {
  return (
    <div className="backColor">
      <img src={props.src} className="image-size"></img>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <button>share</button>
      <button>explore</button>
    </div>
  );
}

export default Card;
