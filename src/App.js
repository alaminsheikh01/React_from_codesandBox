import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [num, setNum] = useState();
  return (
    <div className="App">
      <h1>You chose {num} value</h1>

      <select
        onChange={(e) => {
          setNum(e.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  );
}
