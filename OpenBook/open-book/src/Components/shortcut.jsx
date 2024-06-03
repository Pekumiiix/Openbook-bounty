function Shortcut() {
  const depositIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M19.6 21H4.4C3.1 21 2 19.9 2 18.6V14h2v4.2c0 .6.4.8 1 .8h14c.6 0 1-.4 1-1v-4h2v4.6c0 1.3-1.1 2.4-2.4 2.4z"></path>
        <path d="M15.3 12.1L13.4 14v-4c0-2 0-4.9 2.4-7-3.4.6-5.1 3.2-5.2 7v4l-1.9-1.9L7 13l5 5 5-5-1.7-.9z"></path>
      </g>
    </svg>
  );

  const withdrawIcon = (
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
          d="M12 9C11.4477 9 11 9.44771 11 10V15.5856L9.70711 14.2928C9.3166 13.9024 8.68343 13.9024 8.29292 14.2928C7.90236 14.6834 7.90236 15.3165 8.29292 15.7071L11.292 18.7063C11.6823 19.0965 12.3149 19.0968 12.7055 18.707L15.705 15.7137C16.0955 15.3233 16.0955 14.69 15.705 14.2996C15.3145 13.909 14.6814 13.909 14.2908 14.2996L13 15.5903V10C13 9.44771 12.5523 9 12 9Z"
          fill=""
        ></path>{" "}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 1C22.6569 1 24 2.34315 24 4V8C24 9.65685 22.6569 11 21 11H19V20C19 21.6569 17.6569 23 16 23H8C6.34315 23 5 21.6569 5 20V11H3C1.34315 11 0 9.65685 0 8V4C0 2.34315 1.34315 1 3 1H21ZM22 8C22 8.55228 21.5523 9 21 9H19V7H20C20.5523 7 21 6.55229 21 6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6C3 6.55229 3.44772 7 4 7H5V9H3C2.44772 9 2 8.55228 2 8V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V8ZM7 7V20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20V7H7Z"
          fill=""
        ></path>{" "}
      </g>
    </svg>
  );

  const borrowIcon = (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill=""
      stroke=""
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <polyline points="8 36 16 36 16 52 8 52"></polyline>
        <path d="M16 38h8a4 4 0 0 1 4 4h9a3 3 0 0 1 3 3 3 3 0 0 1-3 3H26"></path>
        <path d="m40 44.8 6.63-4a5.82 5.82 0 0 1 3-.82 5.78 5.78 0 0 1 4.09 1.69L56 44 38.07 54.76A8.75 8.75 0 0 1 33.58 56a8.68 8.68 0 0 1-3.06-.56L16 50"></path>
        <circle cx="38" cy="22" r="14"></circle>
        <path d="M36.33 22a3.34 3.34 0 0 1 0-6.67"></path>
        <path d="M39.67 22a3.34 3.34 0 0 1 0 6.67"></path>
        <line x1="38" y1="12" x2="38" y2="15.33"></line>
        <line x1="38" y1="28.67" x2="38" y2="32"></line>
        <line x1="36.33" y1="22" x2="39.67" y2="22"></line>
        <path d="M43 17s-1.67-1.67-3.33-1.67h-3.34"></path>
        <path d="M33 27s1.67 1.67 3.33 1.67h3.34"></path>
      </g>
    </svg>
  );

  const repayIcon = (
    <svg
      fill=""
      version="1.1"
      id="earth"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 256 216"
      enable-background="new 0 0 256 216"
      xmlSpace="preserve"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M175.238,2.307H68.807c-5.896,0-10.648,4.4-10.648,9.812v72.069C58.159,89.6,62.911,94,68.807,94h106.388 c5.896,0,10.648-4.4,10.648-9.812V12.119C185.886,6.707,181.134,2.307,175.238,2.307z M176.25,82.956c0,0.66-0.616,1.232-1.32,1.232 H69.115c-0.748,0-1.32-0.572-1.32-1.232V48.154H176.25V82.956z M176.25,21.931H67.795v-8.58c0-0.66,0.616-1.232,1.32-1.232h105.772 c0.748,0,1.32,0.572,1.32,1.232v8.58H176.25z M76.99,67.293h22.263v8.712H76.99V67.293z M107.921,67.293h32.207v8.712h-32.207 V67.293z M229.943,83.553L186.57,124.68c1.092,2.644,1.59,5.874,1.257,8.89c-0.286,6.278-2.86,12.262-7.262,16.742 c-4.505,4.306-10.593,6.727-16.974,6.267l-59.452-2.005c-2.81,0.015-4.599-2.217-4.512-4.854c0.088-2.636,2.217-4.599,4.679-4.409 l59.626,1.902c7.806,0.088,14.369-5.903,14.735-13.638c0.365-7.734-5.903-14.369-13.638-14.735l-74.161-2.245 c-12.175-0.327-25.024,1.389-31.897,12.028L2,213.693h56.623l18.808-24.781c4.331-4.203,10.522-6.45,16.974-6.267l51.615,1.465 c12.627,0.295,24.771-4.999,32.982-13.373l70.507-66.788c5.622-5.2,6.169-14.217,0.486-20.258 C244.549,78.449,235.738,78.25,229.943,83.553z"></path>{" "}
      </g>
    </svg>
  );

  const shortcutLinks = [
    { shortcutIcon: depositIcon, text: "Deposit" },
    { shortcutIcon: withdrawIcon, text: "Withdraw" },
    { shortcutIcon: borrowIcon, text: "Borrow" },
    { shortcutIcon: repayIcon, text: "Repay" },
  ];

  return (
    <div className="shortcut">
      <h1>Shortcuts</h1>
      {shortcutLinks.map((links, index) => (
        <button className="shortcut-item" key={index}>
          {links.shortcutIcon}
          {links.text}
        </button>
      ))}
    </div>
  );
}

export default Shortcut;
