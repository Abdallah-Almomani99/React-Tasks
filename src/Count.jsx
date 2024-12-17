import React, { useState, useEffect } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);

  function addCount() {
    setCount((c) => c + 1);
  }

  function subtractCount() {
    setCount((c) => c - 1);
  }
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
    </div>
  );
};

export default Count;
