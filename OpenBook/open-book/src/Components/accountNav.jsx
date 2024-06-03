import React, { useState } from "react";
import { Link } from "react-router-dom";

function Accountnav() {
  const [linkButtons, setLinkButton] = useState([
    { buttonName: "Overview", pathLink: "/account/", isActive: true },
    { buttonName: "Balances", pathLink: "/account/balance", isActive: false },
    {
      buttonName: "Positions",
      pathLink: "/account/positions",
      isActive: false,
    },
    {
      buttonName: "Orders",
      pathLink: "/account/orders/limit",
      isActive: false,
    },
    {
      buttonName: "Unsettled",
      pathLink: "/account/unsettled",
      isActive: false,
    },
    {
      buttonName: "History",
      pathLink: "/account/history/",
      isActive: false,
    },
  ]);

  const handleClick = (index) => {
    const updatedLinkButton = linkButtons.map((button, i) => ({
      ...button,
      isActive: i === index,
    }));
    setLinkButton(updatedLinkButton);
  };

  return (
    <div className="account-nav">
      {linkButtons.map((button, index) => (
        <Link
          to={button.pathLink}
          className={`acoount-nav-btn ${button.isActive ? "active" : ""}`}
          key={index}
          onClick={() => handleClick(index)}
        >
          {button.buttonName}
        </Link>
      ))}
    </div>
  );
}

export default Accountnav;
