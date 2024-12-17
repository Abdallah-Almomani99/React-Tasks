import React, { useContext } from "react";
import { UserContext } from "./CompA.jsx";
import "./Context.css";

const CompD = () => {
  const user = useContext(UserContext);
  return (
    <div className="box">
      CompD
      <h2>{`Bye ${user}`}</h2>
    </div>
  );
};

export default CompD;
