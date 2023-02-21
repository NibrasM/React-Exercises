import MapAvatar from "./components/MapAvatar";
import DisplayAvatar from "./components/DisplayAvatar";
import InputComp from "./components/InputComp";
import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
function App() {
  const [inputForSearch, setInputForSearch] = useState("");
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [found, setFound] = useState(false);
  const [foundUser, setFoundUser] = useState({});

  useEffect(() => {
    console.log(name);
    const a = listOfUsers.find((user) => user.name === name);
    if (a != undefined) {
      setFound(true);
      setFoundUser(a);
    } else setFound(false);
  }, [name]);

  useEffect(() => {
    console.log("here", listOfUsers);
  }, [listOfUsers]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        style={{ margin: "20px" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>{" "}
      {found ? (
        <DisplayAvatar
          key={0}
          name={foundUser.name}
          imgSrc={foundUser.img}
        ></DisplayAvatar>
      ) : (
        <MapAvatar
          setListOfUsers={setListOfUsers}
          listOfUsers={listOfUsers}
        ></MapAvatar>
      )}{" "}
    </div>
  );
}

export default App;
