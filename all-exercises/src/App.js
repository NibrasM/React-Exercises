import logo from "./logo.svg";
import "./App.css";
import Card from "./comonents/Card";
import "./comonents/Card.css";

function App() {
  return (
    <div>
      <Card
        src="https://images.squarespace-cdn.com/content/v1/5883caad59cc684854aef84c/1508481793651-279DZYIVW4B6DHIARAWN/A+blank.JPG"
        title="A"
        desc="a"
      ></Card>
      ;
      <Card
        src="https://www.theartkitblog.com/wp-content/uploads/2020/06/letter-b-uppercase-outline-coloring-page-printable-worksheet-s-1.jpg"
        title="B"
        desc="b"
      ></Card>
      ;
      <Card
        src="https://images.squarespace-cdn.com/content/v1/5883caad59cc684854aef84c/1508481898976-B67ASS4N3HGWL73TUQET/C+blank.JPG"
        title="C"
        desc="c"
      ></Card>
      ;
    </div>
  );
}

export default App;
