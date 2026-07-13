import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Comp3 = () => {
  let { users } = useContext(MyStore);
  console.log(users);
  return (
    <div>
      <h1>{users.name}</h1>
      <h1>{users.email}</h1>
    </div>
  );
};

export default Comp3;
