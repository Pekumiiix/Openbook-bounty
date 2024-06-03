import React, { useState } from "react";
import NotificationPosition from "./notificationPosition";
import SwapSizeSelector from "./swapSizeSelector";
import Animations from "./animation";
import TradeLayoutSettings from "./tradeLayoutSettings";

function DisplaySettings() {
  const arrowDown = (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      class="ml-1 h-5 w-5 shrink-0 text-th-fgd-3 rotate-0"
      width="20"
      height="20"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
        fill="#E6E6E6"
      ></path>
    </svg>
  );

  const [isHidden, setIsHidden] = useState(true);
  const [selectedTheme, setSelectedTheme] = useState("Dark Mode");

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  const [themeList, setThemeList] = useState([
    { text: "Light Mode", isActive: false },
    { text: "Dark Mode", isActive: true },
  ]);

  const handleClick = (index) => {
    const selected = themeList[index];
    setSelectedTheme(selected.text);

    const updatedThemeList = themeList.map((list, i) => ({
      ...list,
      isActive: i === index,
    }));

    setThemeList(updatedThemeList);
    setIsHidden(true);
  };

  const [languageButtons, setLanguageButtons] = useState([
    { text: "English", isActive: true },
    { text: "Portugese", isActive: false },
    { text: "Chinese", isActive: false },
  ]);

  const handleLanguageButtons = (index) => {
    const updatedButtonList = languageButtons.map((button, i) => ({
      ...button,
      isActive: i === index,
    }));

    setLanguageButtons(updatedButtonList);
  };

  const [telemetryIsActive, setTelemetryIsActive] = useState(true);

  const toggleTelemetryActive = () => {
    setTelemetryIsActive(!telemetryIsActive);
  };

  return (
    <>
      <div className="settings-section">
        <p className="settings-section-header">Display</p>

        <div className="display-settings-ctn">
          <div className="display-settings-item">
            <p>Theme</p>

            <div className="display-menu-ctn">
              <div
                className={`display-menu-input ${isHidden ? "" : "active"}`}
                onClick={toggleHidden}
              >
                <input type="text" value={selectedTheme} readOnly />
                {arrowDown}
              </div>

              <div className={`display-menu ${isHidden ? "hidden" : "flex"}`}>
                {themeList.map((list, index) => (
                  <button
                    value={list.text}
                    key={index}
                    className={`${list.isActive ? "active" : ""}`}
                    onClick={() => handleClick(index)}
                  >
                    {list.text}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="display-settings-item">
            <p>Language</p>

            <div className="network-btn-ctn">
              {languageButtons.map((button, index) => (
                <button
                  className={`${button.isActive ? "active" : ""}`}
                  key={index}
                  onClick={() => handleLanguageButtons(index)}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>

          <TradeLayoutSettings />

          <NotificationPosition />

          <SwapSizeSelector />

          <div className="display-settings-item">
            <p>Announcements</p>

            <div className="display-menu-ctn">
              <div
                className={`toggle-track ${telemetryIsActive ? "active" : ""}`}
                onClick={toggleTelemetryActive}
              >
                <div className="toggle-thumb"></div>
              </div>
            </div>
          </div>

          <Animations />
        </div>
      </div>
    </>
  );
}

export default DisplaySettings;
