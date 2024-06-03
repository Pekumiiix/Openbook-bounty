import React, { useState, useEffect } from "react";

import BitcoinLogo from "../assets/btc.svg";
import SolanaLogo from "../assets/solanaLogo.svg";
import VerticalEllipsis from "../assets/verticalEllipsis.svg";

function Market() {
  const AddIcon = (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
        clipRule="evenodd"
        fill=""
      ></path>
    </svg>
  );

  const [markets, setMarkets] = useState([
    {
      marketLogo: BitcoinLogo,
      marketName: "BTC/USD",
      marketPrice: "$64156.10",
      marketPriceChange: "+0.1%",
      isMenuHidden: true,
    },
    {
      marketLogo: SolanaLogo,
      marketName: "SOl/USD",
      marketPrice: "$153.50",
      marketPriceChange: "+2.1%",
      isMenuHidden: true,
    },
  ]);

  const handleClick = (index) => {
    const updatedMarkets = markets.map((market, i) => ({
      ...market,
      isMenuHidden: i === index ? !market.isMenuHidden : market.isMenuHidden,
    }));
    setMarkets(updatedMarkets);
  };

  const deleteMarket = (index) => {
    const updatedMarkets = markets.filter((_, i) => i !== index);

    setMarkets(updatedMarkets);
  };

  return (
    <section className="market-ctn">
      {markets.map((market, index) => (
        <div className="market" key={index}>
          <div className="market-det-ctn">
            <div className="market-det">
              <img src={market.marketLogo} alt="Bitcoin Logo" />
              <p>{market.marketName}</p>
            </div>

            <p className="market-price">{market.marketPrice}</p>

            <p className="price-change-percentage">
              {market.marketPriceChange}
            </p>
          </div>

          <div className="market-menu-ctn">
            <button onClick={() => handleClick(index)}>
              <img src={VerticalEllipsis} alt="Vertical Ellipsis" />
            </button>
            <div
              className={`market-menu ${
                market.isMenuHidden ? "hidden" : "flex"
              }`}
            >
              <button onClick={() => deleteMarket(index)}>Remove Market</button>
            </div>
          </div>
        </div>
      ))}

      <button className="add-market">
        {AddIcon}
        <p>Add new market</p>
      </button>
    </section>
  );
}

export default Market;
