import React from "react";
import CompC from "./CompC";
import "./Context.css";
const CompB = () => {
  return (
    <div className="box">
      CompB <CompC />
    </div>
  );
};

export default CompB;
