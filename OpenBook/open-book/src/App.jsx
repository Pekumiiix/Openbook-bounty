//import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Aside from "./Components/Aside";
import MainNav from "./Components/mainNav";
import Trade from "./Trade";
import Swap from "./Swap";
import Account from "./Account";
import Settings from "./Settings";

function App() {
  return (
    <Router>
      <Aside />

      <main>
        <MainNav />

        <Routes>
          <Route path="/" index element={<Trade />} />

          <Route path="/swap" element={<Swap />} />

          <Route path="/account/*" element={<Account />} />

          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
