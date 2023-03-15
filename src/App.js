import React from "react"
import LandingPage from "./Components/LandingPage/landingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TeamDB from "./Components/Dashboard/teamDB";

function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<LandingPage /> } />
    </Routes>
  </BrowserRouter>
  {/* <TeamDB /> */}
  </>
}

export default App;
