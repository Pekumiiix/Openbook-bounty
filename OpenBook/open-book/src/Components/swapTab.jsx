import React, { useState, useEffect } from "react";
import SlippageSettings from "./maxSlippage";

function SwapTab() {
  const arrowDown = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g id="Arrow / Caret_Down_MD">
          {" "}
          <path
            id="Vector"
            d="M16 10L12 14L8 10"
            stroke="#9283bb"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );

  const serachIcon = (
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
        fillRule="evenodd"
        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
        clipRule="evenodd"
        fill="#C9C5D8"
      ></path>
    </svg>
  );

  const pointDown = (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill=""
      aria-hidden="true"
      className="swap-arrow-down mb-3"
      onClick={switchValues}
    >
      <path
        fillRule="evenodd"
        d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
        clipRule="evenodd"
        fill=""
      ></path>
    </svg>
  );

  const walletIcon = (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="h-6 w-6 text-th-fgd-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24"
      height="24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.999 3c1.103 0 2 .897 2 2v2c1.103 0 2 .897 2 2v10c0 1.103-.897 2-2 2h-15c-1.206 0-3-.799-3-3V6c0-1.654 1.346-3 3-3h13Zm0 2h-13a1.001 1.001 0 0 0 0 2h13V5Zm-1.001 7a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Z"
        fill="#fff"
      ></path>
    </svg>
  );

  const editIcon = (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className="h-4 w-4"
      width="20"
      height="20"
    >
      <path
        d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z"
        fill="#C9C5D8"
      ></path>
    </svg>
  );

  const [isActive, setIsActive] = useState(false);
  const [sellPrice, setSellPrice] = useState(null);
  const [buyPrice, setBuyPrice] = useState(null);
  const [buyLogo, setBuyLogo] = useState(null);
  const [sellLogo, setSellLogo] = useState(null);
  const [buyName, setBuyName] = useState(null);
  const [sellName, setSellName] = useState(null);
  const [sellCoin, setSellCoin] = useState("bitcoin");
  const [buyCoin, setBuyCoin] = useState("solana");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState("");
  const [sellAmount, setSellAmount] = useState("0.00");
  const [tokenAmount, setTokenAmount] = useState("");
  const [tokenPrice, setTokenPrice] = useState("0.00");
  const [slippage, setSlippage] = useState("0.5%");
  const [youSell, setYouSell] = useState(true);
  const [youBuy, setYouBuy] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleChange = (event) => {
    const newAmount = event.target.value;

    setAmount(newAmount);
    updateSellPrice(newAmount);
  };

  const handleBuyChange = (event) => {
    const newAmount = event.target.value;

    setTokenAmount(newAmount);
    updateBuyPrice(newAmount);
  };

  const updateSellPrice = (newAmount) => {
    if (newAmount === "") {
      setSellAmount("0.00");
    } else {
      setSellAmount((s) => (s = (newAmount * sellPrice).toFixed(6)));
      setTokenAmount((t) =>
        (t = (newAmount * sellPrice) / buyPrice).toFixed(6)
      );
      setTokenPrice((t) =>
        (t = ((newAmount * sellPrice) / buyPrice) * buyPrice).toFixed(6)
      );
    }
  };

  const updateBuyPrice = (newAmount) => {
    if (newAmount === "") {
      setTokenPrice("0.00");
    } else {
      setTokenPrice((t) => (t = newAmount * buyPrice));
      setAmount((s) => (s = (newAmount * buyPrice) / sellPrice).toFixed(6));
      setSellAmount((s) =>
        (s = ((newAmount * buyPrice) / sellPrice) * sellPrice).toFixed(6)
      );
    }
  };

  const showSlippageSettings = () => {
    const slippageSettings = document.querySelector(".max-slippage-settings");

    slippageSettings.classList.add("active");
  };

  const handleSlippageChange = (newSlippage) => {
    setSlippage(newSlippage);
  };

  const suggestedTokens = [
    { text: "SOL", name: "solana" },
    { text: "ETH", name: "ethereum" },
    { text: "TRX", name: "tron" },
  ];

  const handleSuggestionClick = (event) => {
    setSellCoin((s) => (s = event.target.value));
    hideSellCoin();
  };

  const handleSuggestionClickTwo = (event) => {
    setBuyCoin((b) => (b = event.target.value));
    hideSellCoin();
  };

  const showSellCoin = () => {
    setYouSell(false);
  };

  const showBuyCoin = () => {
    setYouBuy(false);
  };

  const hideSellCoin = () => {
    setYouSell(true);
    setYouBuy(true);
  };

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
      onClick={hideSellCoin}
    >
      <path
        d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
        fill=""
      ></path>
    </svg>
  );

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://api.coingecko.com/api/v3/coins/${sellCoin}`)
        .then((response) => response.json())
        .then((data) => {
          setSellPrice(data.market_data.current_price.usd);
          setSellLogo(data.image.thumb);
          setSellName(data.symbol.toUpperCase());
          console.log("Bitcoin data:", data);
        })
        .catch((error) => console.error("Error fetching Bitcoin data:", error));

      fetch(`https://api.coingecko.com/api/v3/coins/${buyCoin}`)
        .then((response) => response.json())
        .then((data) => {
          setBuyPrice(data.market_data.current_price.usd);
          setBuyLogo(data.image.thumb);
          setBuyName(data.symbol.toUpperCase());
          console.log("Solana data:", data);
        })
        .catch((error) => console.error("Error fetching Solana data:", error));
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);

    const fetchRandomCoins = async () => {
      try {
        // Step 1: Fetch the list of all coins
        const allCoinsResponse = await fetch(
          "https://api.coingecko.com/api/v3/coins/list"
        );
        const allCoins = await allCoinsResponse.json();

        // Step 2: Randomly select ten coins
        const randomCoins = [];
        for (let i = 0; i < 10; i++) {
          const randomIndex = Math.floor(Math.random() * allCoins.length);
          randomCoins.push(allCoins[randomIndex].id);
        }

        // Step 3: Fetch details of the selected coins
        const coinDetailsPromises = randomCoins.map((coinId) =>
          fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`).then(
            (response) => response.json()
          )
        );
        const coinDetails = await Promise.all(coinDetailsPromises);

        // Update state
        setCoins(coinDetails);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching coins:", error);
        setLoading(false);
      }
    };

    fetchRandomCoins();

    return () => clearInterval(interval);
  }, [sellCoin, buyCoin]);

  function switchValues() {
    setBuyPrice(sellPrice);
    setBuyLogo(sellLogo);
    setBuyName(sellName);

    setSellPrice(buyPrice);
    setSellLogo(buyLogo);
    setSellName(buyName);
  }

  return (
    <>
      <div className="tab-option">
        <div className="tab-option-det-ctn">
          <p className="tab-option-title">Wallet Swap</p>
          <p className="tab-option-det">
            When enabled, you'll swap tokens in your wallet. When disabled,
            you'll swap tokens in your Mango Account
          </p>
        </div>

        <div
          className={`toggle-track ${isActive ? "active" : ""}`}
          onClick={handleClick}
        >
          <div className="toggle-thumb"></div>
        </div>
      </div>
      <div className="sell-section mb-3">
        <p className="swap-section-header">Sell</p>

        <div className="sell-input-ctn">
          <div className="token-input-ctn" onClick={showSellCoin}>
            <img src={sellLogo} alt="Coin Logo" />
            <p>{sellName}</p>
            {arrowDown}
          </div>

          <div className="amount-input-ctn">
            <input
              type="number"
              className="amount-input"
              placeholder="0.00"
              value={amount}
              onChange={handleChange}
            />
            <p className="text-[10px] absolute top-[35px] h-fit w-fit px-3 text-lightTextColor sell-price">
              {"$" + sellAmount}
            </p>
          </div>
        </div>
      </div>

      {pointDown}

      <div className="sell-section">
        <p className="swap-section-header">Buy</p>

        <div className="sell-input-ctn">
          <div className="token-input-ctn" onClick={showBuyCoin}>
            <img src={buyLogo} alt="Coin Logo" />
            <p>{buyName}</p>
            {arrowDown}
          </div>

          <div className="amount-input-ctn">
            <input
              type="number"
              className="amount-input"
              placeholder="0.00"
              value={tokenAmount}
              onChange={handleBuyChange}
            />
            <p className="text-[10px] absolute top-[35px] h-fit w-fit px-3 text-lightTextColor sell-price">
              {"$" + tokenPrice}
            </p>
          </div>
        </div>
      </div>

      <button className="submit-swap">
        {walletIcon}
        Connect Wallet
      </button>

      <div className="extra-swap-det-ctn">
        <p className="swap-det-left">Health Impact</p>

        <p className="swap-det-right">-</p>
      </div>

      <div className="extra-swap-det-ctn">
        <p className="swap-det-left">Margin</p>

        <div
          className={`toggle-track ${isActive ? "active" : ""}`}
          onClick={handleClick}
        >
          <div className="toggle-thumb"></div>
        </div>
      </div>

      <div className="extra-swap-det-ctn">
        <p className="swap-det-left last-swap">Max Slippage</p>

        <div className="swap-det-right" onClick={showSlippageSettings}>
          <p className="cursor-default">{slippage + "%"}</p>
          {editIcon}
        </div>
      </div>

      <div className={`token-list-ctn ${youSell ? "hidden" : "flex"}`}>
        <div className="slippage-nav">
          <p>You are selling</p>

          {cancelButton}
        </div>

        <div className="token-search-ctn">
          {serachIcon}
          <input type="text" />
        </div>

        <div className="token-suggestions-ctn">
          {suggestedTokens.map((token, index) => (
            <button
              value={token.name}
              key={index}
              onClick={handleSuggestionClick}
            >
              {token.text}
            </button>
          ))}
        </div>

        <div className="coin-ctn">
          <div className="coin-ctn-nav">
            <p>Token</p>
            <p>Max</p>
          </div>

          <p className={`loading ${loading ? "flex" : "hidden"}`}>
            Wait a moment, loading results
          </p>

          {coins.map((coin, index) => (
            <div className="coin" key={index}>
              <div className="coin-left">
                <img src={coin.image.thumb} alt="Coin Logo" />

                <div className="coin-det-ctn">
                  <p className="short-name">{coin.symbol.toUpperCase()}</p>
                  <p className="full-name">{coin.name}</p>
                </div>
              </div>

              <p className="coin-balance">0</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`token-list-ctn ${youBuy ? "hidden" : "flex"}`}>
        <div className="slippage-nav">
          <p>You are buying</p>

          {cancelButton}
        </div>

        <div className="token-search-ctn">
          {serachIcon}
          <input type="text" />
        </div>

        <div className="token-suggestions-ctn">
          {suggestedTokens.map((token, index) => (
            <button
              value={token.name}
              key={index}
              onClick={handleSuggestionClickTwo}
            >
              {token.text}
            </button>
          ))}
        </div>

        <div className="coin-ctn">
          <div className="coin-ctn-nav">
            <p>Token</p>
            <p>Max</p>
          </div>

          <p className={`loading ${loading ? "flex" : "hidden"}`}>
            Wait a moment, loading results
          </p>

          {coins.map((coin, index) => (
            <div className="coin" key={index}>
              <div className="coin-left">
                <img src={coin.image.thumb} alt="Coin Logo" />

                <div className="coin-det-ctn">
                  <p className="short-name">{coin.symbol.toUpperCase()}</p>
                  <p className="full-name">{coin.name}</p>
                </div>
              </div>

              <p className="coin-balance">0</p>
            </div>
          ))}
        </div>
      </div>

      <SlippageSettings onSlippageChange={handleSlippageChange} />
    </>
  );
}

export default SwapTab;
