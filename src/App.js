import React from "react"
import LandingPage from "./Components/LandingPage/landingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TeamDB from "./Components/Dashboard/teamDB";
import CaDB from "./Components/Dashboard/CaDB";
import Update from "./Components/updates/update";
import PreviousYear from "./Components/PreviousYear/year";
import DomainManage from "./Components/Domain/manage";
import DomainEn from "./Components/Domain/en";
import DomainEce from "./Components/Domain/ece";
import DomainCivil from "./Components/Domain/civil";
import DomainMe from "./Components/Domain/me";
import DomainCs from "./Components/Domain/cs";

function App() {
  return <>
    {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/ca_db" exact element={<CaDB />} />
        <Route path="/team_db" exact element={<TeamDB />} />
        <Route path="/updates" exact element={<Update />} />
        <Route path="/previous_year" exact element={<PreviousYear />} />
        <Route path="/domain_cs" exact element={<DomainCs />} />
        <Route path="/domain_me" exact element={<DomainMe />} />
        <Route path="/domain_civil" exact element={<DomainCivil />} />
        <Route path="/domain_ece" exact element={<DomainEce />} />
        <Route path="/domain_en" exact element={<DomainEn />} />
        <Route path="/domain_management" exact element={<DomainManage />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
