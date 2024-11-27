import React, { useState } from 'react';
import "../App.css"
function ColorChange() {
  const [bg, setBg] = useState("red");
  
  const changeColor = () => {
    setBg("yellow");
  }
  

  return (
    <div style={{ backgroundColor: bg, height: '10vh' }}>
      <button onClick={changeColor}>Click</button>
    </div>
  );
}

export default ColorChange;
