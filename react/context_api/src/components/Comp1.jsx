import React from "react";
import Comp2 from "./Comp2";

const Comp1 = () => {
  return (
    <div>
      i am comp 1 inside app comp
      <Comp2 />
    </div>
  );
};

export default Comp1;
