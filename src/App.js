import React from "react"
import LandingPage from "./Components/LandingPage/landingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TeamDB from "./Components/Dashboard/teamDB";
import CaDB from "./Components/Dashboard/CaDB";
import Update from "./Components/updates/update";
import PreviousYear from "./Components/PreviousYear/year";
import Domain1 from "./Components/Domain/cs";
import Register from "./Components/Register/Register";
import TimeLine from "./Components/TimeLine/timeLine";

function App() {
  return <>
  {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<LandingPage /> } />
      <Route path="/ca_db" exact element={<CaDB />} />
      <Route path="/team_db" exact element={<TeamDB />} />
      <Route path="/updates" exact element={<Update />} />
      <Route path="/previous_year" exact element={<PreviousYear />} />
      <Route path="/domain" exact element={<Domain1 />} />
      <Route path="timeline" exact element={<TimeLine />} />
    </Routes>
  </BrowserRouter>
  {/* <Register /> */}
  </>
}

export default App;
