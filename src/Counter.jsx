import React, { useState } from "react";
import Button from "./Button";

function Counter () {
    const [value, setValue] = useState(0);

    const handleIncrement = (incrementValue) => {
        const newValue = value + parseInt(incrementValue, 10);
        setValue(newValue);
    };
    const handleDecrement = (decrementValue) => {
        const newValue = value - parseInt(decrementValue, 10);
        setValue(newValue);
    };
    return(
        <div>
            <h1>Please add or Subtract</h1>
            <div className="board">
                <div id="value" style={{ color: value < 0 ? "red" : "blue" }}>
                    {value}
                </div>
                <div className="container">
                <Button
            action={() =>
              handleIncrement(document.getElementById("number").value)
            }
            symbol="+"
          />
          <div className="value-form">
            <input type="number" id="number" defaultValue="0" style={{ color: value < 0 ? "blue" : "red", textAlign: "center" }} />
          </div>
          <Button
            action={() =>
              handleDecrement(document.getElementById("number").value)
            }
            symbol="-"
          />
          <Button
            action={() => handleIncrement(2 * parseInt(document.getElementById("number").value, 10))}
            symbol="++"
          />
            <Button
            action={() => handleDecrement(2 * parseInt(document.getElementById("number").value, 10))}
            symbol="--"
          />
        </div>
        <Button
        symbol="C"
        action={() => {
          setValue(0);
          document.getElementById("number").value = "0";
        }}
      />
      </div>
    </div>
  );
}

export default Counter;