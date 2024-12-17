import React, { useState, createContext } from "react";
import CompB from "./CompB";
import "./Context.css";

export const UserContext = createContext();

const CompA = () => {
  const [user, setUser] = useState("Abood");
  return (
    <div className="box">
      CompA
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <CompB />
      </UserContext.Provider>
    </div>
  );
};

export default CompA;
