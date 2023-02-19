import coloredImg from "../images/img1.jpg";
import balckImg from "../images/img1-black.jpg";

export default function ImageToggle() {
  return (
    <div>
      <h1>My Img</h1>
      <img src={coloredImg} width="50%" height="50%" />
      <img src={balckImg} width="50%" height="50%" />
    </div>
  );
}
