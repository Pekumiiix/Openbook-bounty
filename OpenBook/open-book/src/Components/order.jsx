import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import OrderLimit from "./orderLimit";
import TriggerOrders from "./triggerOrder";

function Orders() {
  const [buttons, setButton] = useState([
    { text: "Limit", isActive: true, linkPath: "/account/orders/limit" },
    {
      text: "Trigger Orders",
      isActive: false,
      linkPath: "/account/orders/triggerorders",
    },
  ]);

  const handleClick = (index) => {
    const updatedButtonList = buttons.map((button, i) => ({
      ...button,
      isActive: i === index,
    }));

    setButton(updatedButtonList);
  };

  return (
    <>
      <div className="order-nav">
        {buttons.map((button, index) => (
          <Link
            to={button.linkPath}
            className={`order-nav-btn ${button.isActive ? "active" : ""}`}
            onClick={() => handleClick(index)}
            key={index}
          >
            {button.text}
          </Link>
        ))}
      </div>

      <div className="orders-ctn">
        <Routes>
          <Route path="/limit" element={<OrderLimit />} />
          <Route path="/triggerorders" element={<TriggerOrders />} />
        </Routes>
      </div>
    </>
  );
}

export default Orders;
