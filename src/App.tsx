import { HomeView } from "./views/HomeView";
import { FunnelView } from "./views/FunnelView";
import { Routes, Route } from "react-router";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/funnel" element={<FunnelView />} />
    </Routes>
  );
}

export default App;
