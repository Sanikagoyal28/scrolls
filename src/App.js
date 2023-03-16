import React from "react"
import LandingPage from "./Components/LandingPage/landingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TeamDB from "./Components/Dashboard/teamDB";
import CaDB from "./Components/Dashboard/CaDB";

function App() {
  return <>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" exact element={<LandingPage /> } />
      <Route path="/ca_db" exact element={<CaDB />} />
      <Route path="/team_db" exact element={<TeamDB />} />
    </Routes>
  </BrowserRouter>
  </>
}

export default App;
