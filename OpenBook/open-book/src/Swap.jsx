import React, { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import SwapTab from "./Components/swapTab";

function Swap() {
  const [swapNav, setSwapNav] = useState([
    { text: "Swap", isActive: true },
    { text: "Trigger Order", isActive: false },
  ]);

  const handleNavClick = (index) => {
    const updatedSwapNav = swapNav.map((navItem, i) => ({
      ...navItem,
      isActive: i === index,
    }));

    setSwapNav(updatedSwapNav);
  };

  return (
    <section className="swap">
      <div className="swap-chart"></div>

      <div className="swap-section">
        <div className="swap-section-nav">
          {swapNav.map((item, index) => (
            <button
              className={`swap-nav-btn ${item.isActive ? "active" : ""}`}
              key={index}
              onClick={() => handleNavClick(index)}
            >
              {item.text}
            </button>
          ))}
        </div>

        <SwapTab />
      </div>

      <div className="swap-table">
        <div className="swap-table-nav"></div>
      </div>
    </section>
  );
}

export default Swap;
