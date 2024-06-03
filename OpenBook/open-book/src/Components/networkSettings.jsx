import React, { useState } from "react";

function NetworkSettings() {
  const [itemButtons, setItemButon] = useState([
    { text: "Triton", isActive: true },
    { text: "Triton Shared", isActive: false },
    { text: "Custom", isActive: false },
  ]);

  const [priorityButtons, setPriorityButton] = useState([
    { text: "High", isActive: true },
    { text: "Medium", isActive: false },
    { text: "Low", isActive: false },
  ]);

  const [isHidden, setIsHidden] = useState(true);

  const handleClick = (index) => {
    const updatedItems = itemButtons.map((item, i) => ({
      ...item,
      isActive: i === index,
    }));

    setItemButon(updatedItems);

    if (updatedItems[index].text === "Custom") {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  const handleClickTwo = (index) => {
    const updatedItems = priorityButtons.map((item, i) => ({
      ...item,
      isActive: i === index,
    }));

    setPriorityButton(updatedItems);
  };

  const handleClickThree = () => {
    setIsHidden(true);
  };

  return (
    <>
      <div className="settings-section">
        <p className="settings-section-header">Network</p>

        <div className="network-settings-section">
          <div className="network-item border-b">
            <p>RPC Provider</p>

            <div className="network-right">
              <div className="network-btn-ctn">
                {itemButtons.map((item, index) => (
                  <button
                    className={`${item.isActive ? "active" : ""}`}
                    key={index}
                    onClick={() => handleClick(index)}
                  >
                    {item.text}
                  </button>
                ))}
              </div>

              <div className={`custom-input ${isHidden ? "hidden" : "flex"}`}>
                <input type="text" />
                <button type="submit" onClick={handleClickThree}>
                  Save
                </button>
              </div>
            </div>
          </div>

          <div className="network-item">
            <p>Priority Fee</p>

            <div className="network-right">
              <div className="network-btn-ctn">
                {priorityButtons.map((item, index) => (
                  <button
                    className={item.isActive ? "active" : ""}
                    key={index}
                    onClick={() => handleClickTwo(index)}
                  >
                    {item.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NetworkSettings;
