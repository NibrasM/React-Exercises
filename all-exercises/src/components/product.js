import Store from "./store";
import { Link } from "react-router-dom";
console.log("product", Store);
const ProductPage = () => {
  return (
    <>
      <h1>Product Page </h1>
      {Store.map((e) => {
        return (
          <li>
            <Link to={`/DetaildInfo/${e.id}`}>{e.title}</Link>
          </li>
        );
      })}
    </>
  );
};
export default ProductPage;
