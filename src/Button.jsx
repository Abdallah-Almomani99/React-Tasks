import React from "react";

const Button = () => {
  let count = 0;
  const handleCLick = (e) => (e.target.textContent = "Ouch !");

  return <button onDoubleClick={(e) => handleCLick(e)}>Click me</button>;
};

export default Button;
