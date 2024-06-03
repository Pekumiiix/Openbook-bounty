import React, { useState } from "react";

import solanaLogo from "../assets/solanaLogo.svg";
import solscanLogo from "../assets/solscan.webp";
import solanaBeachLogo from "../assets/solanabeach.webp";
import solanaFMLogo from "../assets/solanafm.webp";
import Sounds from "./sounds";

function PreferenceSettings() {
  const [walletIsActive, setWalletIsActive] = useState(true);
  const [telemetryIsActive, setTelemetryIsActive] = useState(true);

  const toggleWalletActive = () => {
    setWalletIsActive(!walletIsActive);
  };

  const toggleTelemetryActive = () => {
    setTelemetryIsActive(!telemetryIsActive);
  };

  const [explorers, setExplorers] = useState([
    { image: solanaLogo, text: "Solana Explorer", isActive: true },
    { image: solscanLogo, text: "Solscan", isActive: false },
    { image: solanaBeachLogo, text: "Solana Beach", isActive: false },
    { image: solanaFMLogo, text: "SolanaFM", isActive: false },
  ]);

  const checkMark = (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      class="text-th-success"
      width="25"
      height="25"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
        fill="#84CE03"
      ></path>
    </svg>
  );

  const handleClick = (index) => {
    const updatedExplorerList = explorers.map((explorer, i) => ({
      ...explorer,
      isActive: i === index,
    }));

    setExplorers(updatedExplorerList);
  };

  return (
    <>
      <div className="settings-section">
        <p className="settings-section-header">Preference</p>

        <div className="prefence-wallet mb-3">
          <p className="preference-wallet-header">Wallet</p>
          <div className="preference-wallet-settings">
            <p>Auto Connect Wallet</p>

            <div
              className={`toggle-track ${walletIsActive ? "active" : ""}`}
              onClick={toggleWalletActive}
            >
              <div className="toggle-thumb"></div>
            </div>
          </div>
        </div>

        <div className="prefence-wallet mb-3">
          <p className="preference-wallet-header">Prefered Explorer</p>

          {explorers.map((explorer, index) => (
            <div
              className={`explorer ${explorer.isActive ? "active" : ""}`}
              key={index}
              onClick={() => handleClick(index)}
            >
              <div className="explorer-det-ctn">
                <img src={explorer.image} alt={`${explorer.text} Logo`} />
                <p>{explorer.text}</p>
              </div>

              {checkMark}
            </div>
          ))}
        </div>

        <Sounds />

        <div className="prefence-wallet mt-3">
          <p className="preference-wallet-header">Telemetry</p>
          <div className="preference-wallet-settings">
            <div className="telemetry-det-ctn">
              <p className="telemetry-title">Send Anonymous Usage</p>
              <p className="telemetry-det">
                Send anonymous usage statistics to help improve the app
              </p>
            </div>

            <div
              className={`toggle-track ${telemetryIsActive ? "active" : ""}`}
              onClick={toggleTelemetryActive}
            >
              <div className="toggle-thumb"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreferenceSettings;
