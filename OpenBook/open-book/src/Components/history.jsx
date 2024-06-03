import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ActivityFeed from "./activityFeed";
import SwapHistory from "./swapHistory";
import TradeHistory from "./tradeHistory";
import FundingHistory from "./fundingHistory";

function History() {
  const downloadSvg = (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      class="h-5 w-5"
      width="20"
      height="20"
    >
      <path
        d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"
        fill="#C9C5D8"
      ></path>
      <path
        d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"
        fill="#C9C5D8"
      ></path>
    </svg>
  );

  const [navLinks, setNavLinks] = useState([
    {
      text: "Activity Feed",
      isActive: true,
      linkPath: "/account/history/",
      rightText: "Export Activity Feed",
    },
    {
      text: "Swaps",
      isActive: false,
      linkPath: "/account/history/swaps",
      rightText: "Export Swaps",
    },
    {
      text: "Trade",
      isActive: false,
      linkPath: "/account/history/trade",
      rightText: "Export Trade",
    },
    {
      text: "Funding",
      isActive: false,
      linkPath: "/account/history/funding",
      rightText: "Export Funding",
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setNavLinks((prevLinks) =>
      prevLinks.map((link, i) => ({
        ...link,
        isActive: i === index,
      }))
    );
    setActiveIndex(index);
  };

  return (
    <>
      <div className="history-nav">
        <div className="history-nav-left">
          {navLinks.map((link, index) => (
            <Link
              to={link.linkPath}
              className={`history-nav-btn ${link.isActive ? "active" : ""}`}
              key={index}
              onClick={() => handleClick(index)}
            >
              {link.text}
            </Link>
          ))}
        </div>

        <div className="history-nav-right">
          <button>
            {navLinks[activeIndex].isActive
              ? navLinks[activeIndex].rightText
              : "Error"}
          </button>
          {downloadSvg}
        </div>
      </div>

      <div className="history-main-ctn">
        <Routes>
          <Route path="/" element={<ActivityFeed />} />
          <Route path="/swaps" element={<SwapHistory />} />
          <Route path="/trade" element={<TradeHistory />} />
          <Route path="/funding" element={<FundingHistory />} />
        </Routes>
      </div>
    </>
  );
}

export default History;
