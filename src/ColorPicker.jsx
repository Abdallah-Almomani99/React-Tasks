import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");

  function handleColorChange(e) {
    setColor(e.target.value);
  }
  return (
    <div>
      <h1>Color Picker</h1>
      <div style={{ backgroundColor: color }}>
        hello
        <p>selected color : {color}</p>
      </div>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
};

export default ColorPicker;
