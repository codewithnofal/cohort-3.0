import React from "react";
import Comp3 from "./Comp3";

const Comp2 = () => {
  return (
    <div>
      i am comp 2 inside comp 1
      <Comp3 />
    </div>
  );
};

export default Comp2;
