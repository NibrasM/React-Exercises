import { useState, useEffect } from "react";
import DisplayAvatar from "./DisplayAvatar";

export default function MapAvatar({ setListOfUsers, listOfUsers }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(listOfUsers);
  //   const [user, setUser] = useState({});

  //   async function getUser() {
  //     const response = await fetch("https://randomuser.me/api/");
  //     const userData = await response.json();
  //     setUser(userData);
  //   }

  //   useEffect(() => {
  //     getUser();
  //     //   console.log(user.results[0]);
  //   }, []);

  // console.log(user.results);

  const itemsArray = [
    { name: "Sara", img: "https://randomuser.me/api/portraits/women/96.jpg" },
  ];
  const getItems = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          // setItems(result);
          itemsArray.push({
            name: result.results[0].name.first,
            img: result.results[0].picture.large,
          });
          setItems(itemsArray);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  useEffect(() => {
    if (items.length == 0) {
      for (let i = 0; i < 10; i++) {
        getItems();
      }
      console.log(itemsArray);
      setListOfUsers(itemsArray);
    }
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  //else if (!isLoaded) {
  //     return <div>Loading...</div>;
  //   }
  else {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
        {items.map((item, index) => (
          <DisplayAvatar
            key={index}
            name={item.name}
            imgSrc={item.img}
          ></DisplayAvatar>
        ))}
      </div>
    );
  }
}
