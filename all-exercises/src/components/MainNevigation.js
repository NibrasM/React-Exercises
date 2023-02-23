import { Link } from "react-router-dom";
import "./MainNevigation.css";

const MainNevigation = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/Product"> Product</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNevigation;
