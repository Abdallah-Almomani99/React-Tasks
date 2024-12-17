import React, { useState, useEffect } from "react";

const ScreenSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.title = `Size:${width}x${height}`;
  }, [width, height]);
  return (
    <div>
      <p>width : {width}</p>
      <p>height : {height}</p>
    </div>
  );
};

export default ScreenSize;
