import React, { useState } from "react";

function SlippageSettings({ onSlippageChange }) {
  const cancelButton = (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className="h-6 w-6 text-th-fgd-3 hide-settings-btn"
      width="20"
      height="20"
    >
      <path
        d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
        fill=""
      ></path>
    </svg>
  );

  const [itemButtons, setItemButon] = useState([
    { text: "0.1%", value: "0.1", isActive: false },
    { text: "0.5%", value: "0.5", isActive: true },
    { text: "1%", value: "1", isActive: false },
    { text: "2%", value: "2", isActive: false },
  ]);
  const [slippage, setSlippage] = useState("0.5");

  const handleClick = (index) => {
    const updatedItems = itemButtons.map((item, i) => ({
      ...item,
      isActive: i === index,
    }));

    setItemButon(updatedItems);
    setSlippage(itemButtons[index].value);
    onSlippageChange(itemButtons[index].value);
  };

  const [isHidden, setIsHidden] = useState(true);
  const [isClosed, setIsClosed] = useState(false);

  const handleClickTwo = () => {
    setIsHidden(!isHidden);
    setIsClosed(!isClosed);
  };

  const settingsSection = document.querySelector(".max-slippage-settings");
  const hideButtons = document.querySelectorAll(".hide-settings-btn");

  hideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      settingsSection.classList.remove("active");
    });
  });

  return (
    <>
      <div className="max-slippage-settings">
        <div className="slippage-nav">
          <p>Settings</p>

          {cancelButton}
        </div>

        <div className="slippage-settings-nav">
          <p className="slippage-header">Max Slippage</p>
          <button onClick={handleClickTwo}>Custom</button>
        </div>

        <div className={`${!isClosed ? "flex" : "hidden"} slippage-btn-ctn`}>
          {itemButtons.map((item, index) => (
            <button
              className={`${item.isActive ? "active" : ""} w-[25%]`}
              key={index}
              onClick={() => handleClick(index)}
            >
              {item.text}
            </button>
          ))}
        </div>

        <input
          type="number"
          placeholder="0.0%"
          value={slippage}
          className={`${isHidden ? "hidden" : ""}`}
          onChange={(e) => {
            const newSlippage = e.target.value;

            setSlippage(newSlippage);
            onSlippageChange(newSlippage);
          }}
        />

        <button className="save-btn hide-settings-btn">Save</button>
      </div>
    </>
  );
}

export default SlippageSettings;
