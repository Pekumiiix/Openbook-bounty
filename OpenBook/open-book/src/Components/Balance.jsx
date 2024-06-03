import React, { useState } from "react";

function Balance() {
  const arrowDown = (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      width="20"
      height="20"
    >
      <path
        fillRule="evenodd"
        d="M10 5a.75.75 0 01.75.75v6.638l1.96-2.158a.75.75 0 111.08 1.04l-3.25 3.5a.75.75 0 01-1.08 0l-3.25-3.5a.75.75 0 111.08-1.04l1.96 2.158V5.75A.75.75 0 0110 5z"
        clipRule="evenodd"
        fill="#C9C5D8"
      ></path>
    </svg>
  );

  const [balanceNavigationButtons, setBalanceNavigationButtons] = useState([
    { text: "Trade", textDetails: "", isActive: false },
    {
      text: "Balance",
      textDetails: "A negative balance represents a borrow",
      isActive: false,
      hasDetails: true,
    },
    {
      text: "Collateral value",
      textDetails: "The USD amount you can trade or borrow against",
      isActive: false,
      hasDetails: true,
    },
    {
      text: "In Orders",
      textDetails: "",
      isActive: false,
      hasDetails: false,
    },
    {
      text: "Interest Earned",
      textDetails:
        "The sum of interest earned and interest paid for each token",
      isActive: false,
      hasDetails: true,
    },
    {
      text: "Rates APR",
      textDetails:
        "The interest rates for depositing (green/left) and borrowing (red/right)",
      isActive: false,
      hasDetails: true,
    },
    {
      text: "Actions",
      textDetails: "",
      isActive: false,
      hasDetails: false,
    },
  ]);

  const handleClick = (index) => {
    const updatedButtonList = balanceNavigationButtons.map((button, i) => ({
      ...button,
      isActive: i === index ? !button.isActive : button.isActive,
    }));
    setBalanceNavigationButtons(updatedButtonList);
  };

  return (
    <>
      <section className="balance">
        <div className="balance-nav">
          {balanceNavigationButtons.map((button, index) => (
            <button
              className={button.isActive ? "active" : ""}
              key={index}
              onClick={() => handleClick(index)}
            >
              <div className="balance-title-det-ctn">
                <p
                  className={`balance-title ${
                    button.hasDetails ? "" : "no-det"
                  }`}
                >
                  {button.text}
                </p>
                <p className="balance-det">{button.textDetails}</p>
              </div>
              {arrowDown}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

export default Balance;
