import React from "react";

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;
  
  // Conditional color: red if above 20, else blue
  const tempColor = temperature > 20 ? "red" : "blue";

  return (
    <div>
      <p>
        Temperature: <span style={{ color: tempColor }}>{temperature}</span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
}

export default WeatherDisplay;