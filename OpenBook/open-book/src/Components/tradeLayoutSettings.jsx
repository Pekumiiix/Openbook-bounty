import React, { useState } from "react";

function TradeLayoutSettings() {
  const chartLeft = (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="h-auto w-32"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 106 60"
      fill="none"
      width="128"
      height="72"
    >
      <rect width="106" height="60" rx="4" fill="var(--bkg-1)"></rect>
      <rect x="2" y="2" width="102" height="4" rx="2" fill="#121212"></rect>
      <rect x="66" y="8" width="18" height="50" rx="2" fill="#121212"></rect>
      <rect
        x="78"
        y="10"
        width="2"
        height="12"
        transform="rotate(90 78 10)"
        fill="#FF2929"
      ></rect>
      <rect
        x="78"
        y="54"
        width="2"
        height="12"
        transform="rotate(90 78 54)"
        fill="#50F434"
      ></rect>
      <rect
        x="76"
        y="14"
        width="2"
        height="10"
        transform="rotate(90 76 14)"
        fill="#FF2929"
      ></rect>
      <rect
        x="76"
        y="50"
        width="2"
        height="10"
        transform="rotate(90 76 50)"
        fill="#50F434"
      ></rect>
      <rect
        x="74"
        y="18"
        width="2"
        height="8"
        transform="rotate(90 74 18)"
        fill="#FF2929"
      ></rect>
      <rect
        x="74"
        y="46"
        width="2"
        height="8"
        transform="rotate(90 74 46)"
        fill="#50F434"
      ></rect>
      <rect
        x="72"
        y="22"
        width="2"
        height="6"
        transform="rotate(90 72 22)"
        fill="#FF2929"
      ></rect>
      <rect
        x="72"
        y="42"
        width="2"
        height="6"
        transform="rotate(90 72 42)"
        fill="#50F434"
      ></rect>
      <rect
        x="70"
        y="26"
        width="2"
        height="4"
        transform="rotate(90 70 26)"
        fill="#FF2929"
      ></rect>
      <rect
        x="70"
        y="38"
        width="2"
        height="4"
        transform="rotate(90 70 38)"
        fill="#50F434"
      ></rect>
      <rect
        x="68"
        y="30"
        width="2"
        height="2"
        transform="rotate(90 68 30)"
        fill="#FF2929"
      ></rect>
      <rect
        x="68"
        y="34"
        width="2"
        height="2"
        transform="rotate(90 68 34)"
        fill="#50F434"
      ></rect>
      <rect x="86" y="8" width="18" height="50" rx="2" fill="#121212"></rect>
      <rect
        x="94"
        y="10"
        width="2"
        height="6"
        transform="rotate(90 94 10)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="102"
        y="14"
        width="2"
        height="14"
        transform="rotate(90 102 14)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="102"
        y="26"
        width="2"
        height="14"
        transform="rotate(90 102 26)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="102"
        y="18"
        width="4"
        height="14"
        transform="rotate(90 102 18)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="102"
        y="10"
        width="2"
        height="6"
        transform="rotate(90 102 10)"
        fill="#D9D9D9"
      ></rect>
      <rect x="2" y="44" width="62" height="14" rx="2" fill="#121212"></rect>
      <rect
        x="18"
        y="48"
        width="2"
        height="12"
        transform="rotate(90 18 48)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="18"
        y="52"
        width="2"
        height="12"
        transform="rotate(90 18 52)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="32"
        y="48"
        width="2"
        height="12"
        transform="rotate(90 32 48)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="32"
        y="52"
        width="2"
        height="12"
        transform="rotate(90 32 52)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="46"
        y="48"
        width="2"
        height="12"
        transform="rotate(90 46 48)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="46"
        y="52"
        width="2"
        height="12"
        transform="rotate(90 46 52)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="60"
        y="48"
        width="2"
        height="12"
        transform="rotate(90 60 48)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="60"
        y="52"
        width="2"
        height="12"
        transform="rotate(90 60 52)"
        fill="#D9D9D9"
      ></rect>
      <rect x="2" y="8" width="62" height="34" rx="2" fill="#121212"></rect>
      <rect x="6" y="29" width="2" height="7" fill="#50F434"></rect>
      <rect x="10" y="25" width="2" height="7" fill="#50F434"></rect>
      <rect x="18" y="23" width="2" height="7" fill="#FF2929"></rect>
      <rect x="30" y="21" width="2" height="7" fill="#50F434"></rect>
      <rect x="38" y="16" width="2" height="7" fill="#50F434"></rect>
      <rect x="50" y="17" width="2" height="7" fill="#50F434"></rect>
      <rect x="14" y="25" width="2" height="3" fill="#FF2929"></rect>
      <rect x="22" y="28" width="2" height="3" fill="#50F434"></rect>
      <rect x="26" y="27" width="2" height="3" fill="#FF2929"></rect>
      <rect x="34" y="21" width="2" height="3" fill="#FF2929"></rect>
      <rect x="42" y="18" width="2" height="3" fill="#FF2929"></rect>
      <rect x="46" y="20" width="2" height="3" fill="#FF2929"></rect>
      <rect x="54" y="16" width="2" height="3" fill="#FF2929"></rect>
      <rect x="58" y="17" width="2" height="3" fill="#FF2929"></rect>
    </svg>
  );

  const chartMiddle = (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="h-auto w-32"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 106 60"
      fill="none"
      width="128"
      height="72"
    >
      <rect width="106" height="60" rx="4" fill="none"></rect>
      <rect x="2" y="2" width="102" height="4" rx="2" fill="#121212"></rect>
      <rect x="86" y="8" width="18" height="50" rx="2" fill="#121212"></rect>
      <rect
        x="98"
        y="10"
        width="2"
        height="12"
        transform="rotate(90 98 10)"
        fill="#FF2929"
      ></rect>
      <rect
        x="98"
        y="54"
        width="2"
        height="12"
        transform="rotate(90 98 54)"
        fill="#50F434"
      ></rect>
      <rect
        x="96"
        y="14"
        width="2"
        height="10"
        transform="rotate(90 96 14)"
        fill="#FF2929"
      ></rect>
      <rect
        x="96"
        y="50"
        width="2"
        height="10"
        transform="rotate(90 96 50)"
        fill="#50F434"
      ></rect>
      <rect
        x="94"
        y="18"
        width="2"
        height="8"
        transform="rotate(90 94 18)"
        fill="#FF2929"
      ></rect>
      <rect
        x="94"
        y="46"
        width="2"
        height="8"
        transform="rotate(90 94 46)"
        fill="#50F434"
      ></rect>
      <rect
        x="92"
        y="22"
        width="2"
        height="6"
        transform="rotate(90 92 22)"
        fill="#FF2929"
      ></rect>
      <rect
        x="92"
        y="42"
        width="2"
        height="6"
        transform="rotate(90 92 42)"
        fill="#50F434"
      ></rect>
      <rect
        x="90"
        y="26"
        width="2"
        height="4"
        transform="rotate(90 90 26)"
        fill="#FF2929"
      ></rect>
      <rect
        x="90"
        y="38"
        width="2"
        height="4"
        transform="rotate(90 90 38)"
        fill="#50F434"
      ></rect>
      <rect
        x="88"
        y="30"
        width="2"
        height="2"
        transform="rotate(90 88 30)"
        fill="#FF2929"
      ></rect>
      <rect
        x="88"
        y="34"
        width="2"
        height="2"
        transform="rotate(90 88 34)"
        fill="#50F434"
      ></rect>
      <rect x="2" y="8" width="18" height="50" rx="2" fill="#121212"></rect>
      <rect
        x="10"
        y="10"
        width="2"
        height="6"
        transform="rotate(90 10 10)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="18"
        y="14"
        width="2"
        height="14"
        transform="rotate(90 18 14)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="18"
        y="26"
        width="2"
        height="14"
        transform="rotate(90 18 26)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="18"
        y="18"
        width="4"
        height="14"
        transform="rotate(90 18 18)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="18"
        y="10"
        width="2"
        height="6"
        transform="rotate(90 18 10)"
        fill="#D9D9D9"
      ></rect>
      <rect x="22" y="44" width="62" height="14" rx="2" fill="#121212"></rect>
      <rect
        x="38"
        y="48"
        width="2"
        height="12"
        transform="rotate(90 38 48)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="38"
        y="52"
        width="2"
        height="12"
        transform="rotate(90 38 52)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="52"
        y="48"
        width="2"
        height="12"
        transform="rotate(90 52 48)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="52"
        y="52"
        width="2"
        height="12"
        transform="rotate(90 52 52)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="66"
        y="48"
        width="2"
        height="12"
        transform="rotate(90 66 48)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="66"
        y="52"
        width="2"
        height="12"
        transform="rotate(90 66 52)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="80"
        y="48"
        width="2"
        height="12"
        transform="rotate(90 80 48)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="80"
        y="52"
        width="2"
        height="12"
        transform="rotate(90 80 52)"
        fill="#D9D9D9"
      ></rect>
      <rect x="22" y="8" width="62" height="34" rx="2" fill="#121212"></rect>
      <rect x="26" y="29" width="2" height="7" fill="#50F434"></rect>
      <rect x="30" y="25" width="2" height="7" fill="#50F434"></rect>
      <rect x="38" y="23" width="2" height="7" fill="#FF2929"></rect>
      <rect x="50" y="21" width="2" height="7" fill="#50F434"></rect>
      <rect x="58" y="16" width="2" height="7" fill="#50F434"></rect>
      <rect x="70" y="17" width="2" height="7" fill="#50F434"></rect>
      <rect x="34" y="25" width="2" height="3" fill="#FF2929"></rect>
      <rect x="42" y="28" width="2" height="3" fill="#50F434"></rect>
      <rect x="46" y="27" width="2" height="3" fill="#FF2929"></rect>
      <rect x="54" y="21" width="2" height="3" fill="#FF2929"></rect>
      <rect x="62" y="18" width="2" height="3" fill="#FF2929"></rect>
      <rect x="66" y="20" width="2" height="3" fill="#FF2929"></rect>
      <rect x="74" y="16" width="2" height="3" fill="#FF2929"></rect>
      <rect x="78" y="17" width="2" height="3" fill="#FF2929"></rect>
    </svg>
  );

  const orderbookLeft = (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="h-auto w-32"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 106 60"
      fill="none"
      width="128"
      height="72"
    >
      <rect width="106" height="60" rx="4" fill="var(--bkg-1)"></rect>
      <rect x="2" y="2" width="102" height="4" rx="2" fill="#121212"></rect>
      <rect x="2" y="8" width="18" height="50" rx="2" fill="#121212"></rect>
      <rect
        x="14"
        y="10"
        width="2"
        height="12"
        transform="rotate(90 14 10)"
        fill="#FF2929"
      ></rect>
      <rect
        x="14"
        y="54"
        width="2"
        height="12"
        transform="rotate(90 14 54)"
        fill="#50F434"
      ></rect>
      <rect
        x="12"
        y="14"
        width="2"
        height="10"
        transform="rotate(90 12 14)"
        fill="#FF2929"
      ></rect>
      <rect
        x="12"
        y="50"
        width="2"
        height="10"
        transform="rotate(90 12 50)"
        fill="#50F434"
      ></rect>
      <rect
        x="10"
        y="18"
        width="2"
        height="8"
        transform="rotate(90 10 18)"
        fill="#FF2929"
      ></rect>
      <rect
        x="10"
        y="46"
        width="2"
        height="8"
        transform="rotate(90 10 46)"
        fill="#50F434"
      ></rect>
      <rect
        x="8"
        y="22"
        width="2"
        height="6"
        transform="rotate(90 8 22)"
        fill="#FF2929"
      ></rect>
      <rect
        x="8"
        y="42"
        width="2"
        height="6"
        transform="rotate(90 8 42)"
        fill="#50F434"
      ></rect>
      <rect
        x="6"
        y="26"
        width="2"
        height="4"
        transform="rotate(90 6 26)"
        fill="#FF2929"
      ></rect>
      <rect
        x="6"
        y="38"
        width="2"
        height="4"
        transform="rotate(90 6 38)"
        fill="#50F434"
      ></rect>
      <rect
        x="4"
        y="30"
        width="2"
        height="2"
        transform="rotate(90 4 30)"
        fill="#FF2929"
      ></rect>
      <rect
        x="4"
        y="34"
        width="2"
        height="2"
        transform="rotate(90 4 34)"
        fill="#50F434"
      ></rect>
      <rect x="86" y="8" width="18" height="50" rx="2" fill="#121212"></rect>
      <rect
        x="94"
        y="10"
        width="2"
        height="6"
        transform="rotate(90 94 10)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="102"
        y="14"
        width="2"
        height="14"
        transform="rotate(90 102 14)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="102"
        y="26"
        width="2"
        height="14"
        transform="rotate(90 102 26)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="102"
        y="18"
        width="4"
        height="14"
        transform="rotate(90 102 18)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="102"
        y="10"
        width="2"
        height="6"
        transform="rotate(90 102 10)"
        fill="#D9D9D9"
      ></rect>
      <rect x="22" y="44" width="62" height="14" rx="2" fill="#121212"></rect>
      <rect
        x="38"
        y="48"
        width="2"
        height="12"
        transform="rotate(90 38 48)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="38"
        y="52"
        width="2"
        height="12"
        transform="rotate(90 38 52)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="52"
        y="48"
        width="2"
        height="12"
        transform="rotate(90 52 48)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="52"
        y="52"
        width="2"
        height="12"
        transform="rotate(90 52 52)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="66"
        y="48"
        width="2"
        height="12"
        transform="rotate(90 66 48)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="66"
        y="52"
        width="2"
        height="12"
        transform="rotate(90 66 52)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="80"
        y="48"
        width="2"
        height="12"
        transform="rotate(90 80 48)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="80"
        y="52"
        width="2"
        height="12"
        transform="rotate(90 80 52)"
        fill="#D9D9D9"
      ></rect>
      <rect x="22" y="8" width="62" height="34" rx="2" fill="#121212"></rect>
      <rect x="26" y="29" width="2" height="7" fill="#50F434"></rect>
      <rect x="30" y="25" width="2" height="7" fill="#50F434"></rect>
      <rect x="38" y="23" width="2" height="7" fill="#FF2929"></rect>
      <rect x="50" y="21" width="2" height="7" fill="#50F434"></rect>
      <rect x="58" y="16" width="2" height="7" fill="#50F434"></rect>
      <rect x="70" y="17" width="2" height="7" fill="#50F434"></rect>
      <rect x="34" y="25" width="2" height="3" fill="#FF2929"></rect>
      <rect x="42" y="28" width="2" height="3" fill="#50F434"></rect>
      <rect x="46" y="27" width="2" height="3" fill="#FF2929"></rect>
      <rect x="54" y="21" width="2" height="3" fill="#FF2929"></rect>
      <rect x="62" y="18" width="2" height="3" fill="#FF2929"></rect>
      <rect x="66" y="20" width="2" height="3" fill="#FF2929"></rect>
      <rect x="74" y="16" width="2" height="3" fill="#FF2929"></rect>
      <rect x="78" y="17" width="2" height="3" fill="#FF2929"></rect>
    </svg>
  );

  const chartRight = (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="h-auto w-32"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 106 60"
      fill="none"
      width="128"
      height="72"
    >
      <rect width="106" height="60" rx="4" fill="var(--bkg-1)"></rect>
      <rect x="2" y="2" width="102" height="4" rx="2" fill="#121212"></rect>
      <rect x="22" y="8" width="18" height="50" rx="2" fill="#121212"></rect>
      <rect
        x="34"
        y="10"
        width="2"
        height="12"
        transform="rotate(90 34 10)"
        fill="#FF2929"
      ></rect>
      <rect
        x="34"
        y="54"
        width="2"
        height="12"
        transform="rotate(90 34 54)"
        fill="#50F434"
      ></rect>
      <rect
        x="32"
        y="14"
        width="2"
        height="10"
        transform="rotate(90 32 14)"
        fill="#FF2929"
      ></rect>
      <rect
        x="32"
        y="50"
        width="2"
        height="10"
        transform="rotate(90 32 50)"
        fill="#50F434"
      ></rect>
      <rect
        x="30"
        y="18"
        width="2"
        height="8"
        transform="rotate(90 30 18)"
        fill="#FF2929"
      ></rect>
      <rect
        x="30"
        y="46"
        width="2"
        height="8"
        transform="rotate(90 30 46)"
        fill="#50F434"
      ></rect>
      <rect
        x="28"
        y="22"
        width="2"
        height="6"
        transform="rotate(90 28 22)"
        fill="#FF2929"
      ></rect>
      <rect
        x="28"
        y="42"
        width="2"
        height="6"
        transform="rotate(90 28 42)"
        fill="#50F434"
      ></rect>
      <rect
        x="26"
        y="26"
        width="2"
        height="4"
        transform="rotate(90 26 26)"
        fill="#FF2929"
      ></rect>
      <rect
        x="26"
        y="38"
        width="2"
        height="4"
        transform="rotate(90 26 38)"
        fill="#50F434"
      ></rect>
      <rect
        x="24"
        y="30"
        width="2"
        height="2"
        transform="rotate(90 24 30)"
        fill="#FF2929"
      ></rect>
      <rect
        x="24"
        y="34"
        width="2"
        height="2"
        transform="rotate(90 24 34)"
        fill="#50F434"
      ></rect>
      <rect x="2" y="8" width="18" height="50" rx="2" fill="#121212"></rect>
      <rect
        x="10"
        y="10"
        width="2"
        height="6"
        transform="rotate(90 10 10)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="18"
        y="14"
        width="2"
        height="14"
        transform="rotate(90 18 14)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="18"
        y="26"
        width="2"
        height="14"
        transform="rotate(90 18 26)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="18"
        y="18"
        width="4"
        height="14"
        transform="rotate(90 18 18)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="18"
        y="10"
        width="2"
        height="6"
        transform="rotate(90 18 10)"
        fill="#D9D9D9"
      ></rect>
      <rect x="42" y="44" width="62" height="14" rx="2" fill="#121212"></rect>
      <rect
        x="58"
        y="48"
        width="2"
        height="12"
        transform="rotate(90 58 48)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="58"
        y="52"
        width="2"
        height="12"
        transform="rotate(90 58 52)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="72"
        y="48"
        width="2"
        height="12"
        transform="rotate(90 72 48)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="72"
        y="52"
        width="2"
        height="12"
        transform="rotate(90 72 52)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="86"
        y="48"
        width="2"
        height="12"
        transform="rotate(90 86 48)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="86"
        y="52"
        width="2"
        height="12"
        transform="rotate(90 86 52)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="100"
        y="48"
        width="2"
        height="12"
        transform="rotate(90 100 48)"
        fill="#D9D9D9"
      ></rect>
      <rect
        x="100"
        y="52"
        width="2"
        height="12"
        transform="rotate(90 100 52)"
        fill="#D9D9D9"
      ></rect>
      <rect x="42" y="8" width="62" height="34" rx="2" fill="#121212"></rect>
      <rect x="46" y="29" width="2" height="7" fill="#50F434"></rect>
      <rect x="50" y="25" width="2" height="7" fill="#50F434"></rect>
      <rect x="58" y="23" width="2" height="7" fill="#FF2929"></rect>
      <rect x="70" y="21" width="2" height="7" fill="#50F434"></rect>
      <rect x="78" y="16" width="2" height="7" fill="#50F434"></rect>
      <rect x="90" y="17" width="2" height="7" fill="#50F434"></rect>
      <rect x="54" y="25" width="2" height="3" fill="#FF2929"></rect>
      <rect x="62" y="28" width="2" height="3" fill="#50F434"></rect>
      <rect x="66" y="27" width="2" height="3" fill="#FF2929"></rect>
      <rect x="74" y="21" width="2" height="3" fill="#FF2929"></rect>
      <rect x="82" y="18" width="2" height="3" fill="#FF2929"></rect>
      <rect x="86" y="20" width="2" height="3" fill="#FF2929"></rect>
      <rect x="94" y="16" width="2" height="3" fill="#FF2929"></rect>
      <rect x="98" y="17" width="2" height="3" fill="#FF2929"></rect>
    </svg>
  );

  const [layouts, setLayouts] = useState([
    { imgSrc: chartLeft, text: "Chart Left", isActive: true },
    {
      imgSrc: chartMiddle,
      text: "Chart Middle, Orderbook Right",
      isActive: false,
    },
    {
      imgSrc: orderbookLeft,
      text: "Chart Middle, Orderbook Left",
      isActive: false,
    },
    { imgSrc: chartRight, text: "Chart Right", isActive: false },
  ]);

  const handleClick = (index) => {
    const updatedLayoutList = layouts.map((item, i) => ({
      ...item,
      isActive: i === index,
    }));

    setLayouts(updatedLayoutList);
  };

  return (
    <>
      <div className="display-settings-item">
        <p>Trade Layout</p>

        <div className="flex flex-row gap-3">
          {layouts.map((layout, index) => (
            <div
              className={`trade-layout-ctn ${layout.isActive ? "active" : ""}`}
              key={index}
              onClick={() => handleClick(index)}
            >
              {layout.imgSrc}
              <p>{layout.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TradeLayoutSettings;
