import { useState } from "react";
import { uesFetchData_Function } from "./FetchData_Function";
export default function ShoesPage() {
  const object = uesFetchData_Function(
    "https://63f74cb5e40e087c958b9059.mockapi.io/shoes"
  );

  console.log(object.isLoaded);

  if (object.error) {
    return <div>Error: {object.error.message}</div>;
  } else {
    return (
      <div>
        <div>
          {object.shoes.map((shoe) => (
            <div key={shoe.id}>
              <img src={shoe.picture}></img>
              <h3>{shoe.name} </h3>
              <p>{shoe.price} $</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
