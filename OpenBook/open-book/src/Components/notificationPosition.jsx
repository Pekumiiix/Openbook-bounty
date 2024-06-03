import React, { useState } from "react";

function NotificationPosition() {
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
  const [selectedPosition, setSelectedPosition] = useState("Bottom Left");

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  const [notificationList, setNotificationList] = useState([
    { text: "Bottom Left", isActive: true },
    { text: "Bottom Right", isActive: false },
    { text: "Top Left", isActive: false },
    { text: "Top Right", isActive: false },
  ]);

  const handleNotificationList = (index) => {
    const selected = notificationList[index];
    setSelectedPosition(selected.text);

    const updatedNotificationList = notificationList.map((list, i) => ({
      ...list,
      isActive: i === index,
    }));

    setNotificationList(updatedNotificationList);
    setIsHidden(true);
  };

  return (
    <>
      <div className="display-settings-item">
        <p>Notification Position</p>

        <div className="display-menu-ctn">
          <div
            className={`display-menu-input ${isHidden ? "" : "active"}`}
            onClick={toggleHidden}
          >
            <input type="text" value={selectedPosition} readOnly />
            {arrowDown}
          </div>

          <div className={`display-menu ${isHidden ? "hidden" : "flex"}`}>
            {notificationList.map((list, index) => (
              <button
                value={list.text}
                key={index}
                className={`${list.isActive ? "active" : ""}`}
                onClick={() => handleNotificationList(index)}
              >
                {list.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default NotificationPosition;
