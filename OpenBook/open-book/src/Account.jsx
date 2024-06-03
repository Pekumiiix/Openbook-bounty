import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Accountnav from "./Components/accountNav";
import Overview from "./Components/Overview";
import Balance from "./Components/Balance";
import Position from "./Components/Position";
import Orders from "./Components/order";
import Unsettled from "./Components/Unsettled";
import History from "./Components/history";

function Account() {
  return (
    <section className="account">
      <Accountnav />
      <Routes>
        <Route index path="/" element={<Overview />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/positions" element={<Position />} />
        <Route path="/orders/*" element={<Orders />} />
        <Route path="/unsettled" element={<Unsettled />} />
        <Route path="/history*" element={<History />} />
      </Routes>
    </section>
  );
}

export default Account;
