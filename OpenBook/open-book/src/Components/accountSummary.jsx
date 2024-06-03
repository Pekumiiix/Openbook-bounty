function AccountSummary() {
  const debitSign = (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke=""
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-up-right"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </g>
    </svg>
  );

  const creditSign = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M7 7L17 17M17 17V7M17 17H7"
          stroke=""
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );

  const healthSign = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M18.5 9.00002H16.5M16.5 9.00002L14.5 9.00002M16.5 9.00002L16.5 7M16.5 9.00002L16.5 11"
          stroke="#1C274C"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M8.96173 19.3786L9.43432 18.7963L8.96173 19.3786ZM12 5.57412L11.4522 6.08635C11.594 6.23803 11.7923 6.32412 12 6.32412C12.2077 6.32412 12.406 6.23803 12.5478 6.08635L12 5.57412ZM15.0383 19.3787L15.5109 19.961L15.0383 19.3787ZM12 21L12 20.25L12 21ZM2.65159 13.6821C2.86595 14.0366 3.32705 14.1501 3.68148 13.9358C4.03591 13.7214 4.14946 13.2603 3.9351 12.9059L2.65159 13.6821ZM6.53733 16.1707C6.24836 15.8739 5.77352 15.8676 5.47676 16.1566C5.18 16.4455 5.17369 16.9204 5.46267 17.2171L6.53733 16.1707ZM2.75 9.3175C2.75 6.41289 4.01766 4.61731 5.58602 4.00319C7.15092 3.39043 9.34039 3.82778 11.4522 6.08635L12.5478 5.06189C10.1598 2.50784 7.34924 1.70187 5.0391 2.60645C2.73242 3.50967 1.25 5.99209 1.25 9.3175H2.75ZM15.5109 19.961C17.0033 18.7499 18.7914 17.1268 20.2127 15.314C21.6196 13.5196 22.75 11.4354 22.75 9.31747H21.25C21.25 10.9289 20.3707 12.6814 19.0323 14.3884C17.7084 16.077 16.0156 17.6197 14.5657 18.7963L15.5109 19.961ZM22.75 9.31747C22.75 5.99208 21.2676 3.50966 18.9609 2.60645C16.6508 1.70187 13.8402 2.50784 11.4522 5.06189L12.5478 6.08635C14.6596 3.82778 16.8491 3.39042 18.414 4.00319C19.9823 4.6173 21.25 6.41287 21.25 9.31747H22.75ZM8.48914 19.961C9.76058 20.9928 10.6423 21.75 12 21.75L12 20.25C11.2771 20.25 10.8269 19.9263 9.43432 18.7963L8.48914 19.961ZM14.5657 18.7963C13.1731 19.9263 12.7229 20.25 12 20.25L12 21.75C13.3577 21.75 14.2394 20.9928 15.5109 19.961L14.5657 18.7963ZM3.9351 12.9059C3.18811 11.6708 2.75 10.455 2.75 9.3175H1.25C1.25 10.8297 1.82646 12.3179 2.65159 13.6821L3.9351 12.9059ZM9.43432 18.7963C8.51731 18.0521 7.49893 17.1582 6.53733 16.1707L5.46267 17.2171C6.47548 18.2572 7.53996 19.1908 8.48914 19.961L9.43432 18.7963Z"
          fill="#1C274C"
        ></path>{" "}
      </g>
    </svg>
  );

  /*const summaryLists = [
    {
      summaryIcon: creditSign,
      summaryValue: "$4500",
      summaryPercentage: "+50%",
      isCredit: true,
    },
    {
      summaryIcon: debitSign,
      summaryValue: "$2500",
      summaryPercentage: "-34%",
      isCredit: false,
    },
    {
      summaryIcon: healthSign,
      summaryValue: "76.3%",
      summaryPercentage: "+0.4%",
      isCredit: true,
    },
  ];*/

  /*
  {summaryLists.map((summary, index) => (
        <div
          className={`summary ${summary.isCredit ? "credit" : "debit"}`}
          key={index}
        >
          {summary.summaryIcon}
          <div className="sumary-det-ctn">
            <h3 className="summary-header">This month</h3>
            <p className="summary-value">{summary.summaryValue}</p>
            <p className="summary-percentage">{summary.summaryPercentage}</p>
          </div>
        </div>
      ))}
  **/
  const summaryLists = [
    {
      title: "Health",
      titleDetails: `Health describes how close your account is to liquidation. The lower
            your account health is the more likely you are to get liquidated
            when prices fluctuate.`,
      value: "76.6%",
      detailsName: "Leverage",
      detailsExplanation: "Total assets value divided by account equity value",
      detailsValue: "0.00x",
      isPnL: false,
    },
    {
      title: "Free Collateral",
      titleDetails: `The amount of capital you have to use for trades and loans. When your free collateral reaches $0 you won't be able to trade, borrow or withdraw`,
      value: "$0.00",
      detailsName: "Total:",
      detailsExplanation:
        "Total value of collateral for trading and borrowing (including unsettled PnL)",
      detailsValue: "$0.00",
      isPnL: false,
    },
    {
      title: "PnL",
      titleDetails: `The amount of capital you have to use for trades and loans. When your free collateral reaches $0 you won't be able to trade, borrow or withdraw`,
      value: "$0.00",
      detailsName: "$0.00",
      detailsExplanation: "",
      detailsValue: "24h Change",
      isPnL: true,
    },
  ];

  return (
    <div className="account-summary">
      {summaryLists.map((summary, index) => (
        <div className={`summary ${summary.isPnL ? "pnl" : ""}`} key={index}>
          <div className="summary-title-ctn">
            <p className="summary-title">{summary.title}</p>

            <p className="summary-title-det">{summary.titleDetails}</p>
          </div>

          <p className="summary-value">{summary.value}</p>

          <div className="summary-det-ctn">
            <div className="summary-det-name-ctn">
              <p className="summary-det-name">{summary.detailsName}</p>

              <p className="summary-det-expln">{summary.detailsExplanation}</p>
            </div>

            <p className="summary-det-value">{summary.detailsValue}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AccountSummary;
