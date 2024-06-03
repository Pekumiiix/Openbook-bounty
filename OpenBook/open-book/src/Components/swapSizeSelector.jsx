import React, { useState } from "react";

function SwapSizeSelector() {
  const [itemButtons, setItemButon] = useState([
    { text: "Slider", isActive: true },
    { text: "Buttons", isActive: false },
  ]);

  const [tradeChart, setTradeChart] = useState([
    { text: "Custom", isActive: true },
    { text: "Trading View", isActive: false },
  ]);

  const handleClick = (index) => {
    const updatedItems = itemButtons.map((item, i) => ({
      ...item,
      isActive: i === index,
    }));

    setItemButon(updatedItems);
  };

  const handleClickTwo = (index) => {
    const updatedItems = tradeChart.map((item, i) => ({
      ...item,
      isActive: i === index,
    }));

    setTradeChart(updatedItems);
  };

  return (
    <>
      <div className="display-settings-item">
        <p>Swape/Trade Size Selector</p>

        <div className="network-btn-ctn">
          {itemButtons.map((button, index) => (
            <button
              className={`${button.isActive ? "active" : ""}`}
              key={index}
              onClick={() => handleClick(index)}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>

      <div className="display-settings-item">
        <p>Swape/Trade Size Selector</p>

        <div className="network-btn-ctn">
          {tradeChart.map((button, index) => (
            <button
              className={`${button.isActive ? "active" : ""}`}
              key={index}
              onClick={() => handleClickTwo(index)}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default SwapSizeSelector;
