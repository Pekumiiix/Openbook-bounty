import React, { useState } from "react";

function Animations() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);

    if (!isActive) {
      const updatedSoundItems = soundItems.map((item) => ({
        ...item,
        isChecked: true,
      }));
      setSoundItems(updatedSoundItems);
    } else {
      const updatedSoundItems = soundItems.map((item) => ({
        ...item,
        isChecked: false,
      }));
      setSoundItems(updatedSoundItems);
    }
  };

  const [soundItems, setSoundItems] = useState([
    { text: "Number Scroll", isChecked: false },
    { text: "Orderbook Flash", isChecked: false },
    { text: "Swap/Trade Success", isChecked: false },
  ]);

  const handleClick = (index) => {
    const updatedSoundItems = soundItems.map((item, i) => ({
      ...item,
      isChecked: i === index ? !item.isChecked : item.isChecked,
    }));

    setSoundItems(updatedSoundItems);

    const allChecked = updatedSoundItems.every((item) => item.isChecked);

    // Update isActive accordingly
    setIsActive(allChecked);
  };

  return (
    <>
      <div className="prefered-sound-settings mt-3">
        <div className="prefered-sound-first">
          <p className="preference-wallet-header">Animations</p>
          <div
            className={`toggle-track ${isActive ? "active" : ""}`}
            onClick={toggleActive}
          >
            <div className="toggle-thumb"></div>
          </div>
        </div>

        <div className="prefered-sound-ctn">
          {soundItems.map((item, index) => (
            <div className="prefered-sound-item" key={index}>
              <p>{item.text}</p>
              <div
                className={`toggle-track ${item.isChecked ? "active" : ""}`}
                onClick={() => handleClick(index)}
              >
                <div className="toggle-thumb"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Animations;
