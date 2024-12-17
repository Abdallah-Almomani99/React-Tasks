import React, { useEffect, useState, useRef } from "react";

const Component = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("Component rendered");
  });

  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "lightgray";
  }

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <input ref={inputRef} />
    </div>
  );
};

export default Component;
