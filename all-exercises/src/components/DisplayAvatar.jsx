export default function DisplayAvatar({ name, imgSrc }) {
  return (
    <div
      style={{
        border: "5px solid black",
        width: "130px",
        marginLeft: "20px",
        padding: "10px",
      }}
    >
      <h1>{name}</h1>
      <img src={imgSrc}></img>
    </div>
  );
}
