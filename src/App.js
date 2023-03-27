import React, { useEffect } from "react"
import LandingPage from "./Components/LandingPage/landingPage";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
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
import FAQ from "./Components/FAQs/FAQs";
import { useDispatch } from "react-redux";
import { setTitle } from "./Redux/heading";
import Rules from "./Components/rules/Rules";
import CA from "./Components/LandingPage/CA";

function App() {

  const team = localStorage.getItem("accessToken") ? true : false
  const ca = localStorage.getItem("CA_ID") ? true : false
  console.log(ca)
  const dispatch = useDispatch();
  useEffect(() => {
    if (ca) {
      dispatch(setTitle("CA"))
    }
    else if (team) {
      dispatch(setTitle("Team"))
    }
    else {
      dispatch(setTitle(""))
    }
  }, [ca, team])
  return <>
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/ca_db" element={<CaDB />} /> 
        <Route path="/team_db" exact element={<TeamDB />} />
        {/* {ca ? <Route path="/ca_db" element={<CaDB />} /> : null} */}
        {/* {team ? <Route path="/team_db" exact element={<TeamDB />} /> : null} */}
        <Route path="/updates" exact element={<Update />} />
        <Route path="/previous_year" exact element={<PreviousYear />} />
        <Route path="/faq" exact element={<FAQ />} />
        <Route path="/domain_cs" exact element={<DomainCs />} />
        <Route path="/domain_me" exact element={<DomainMe />} />
        <Route path="/domain_civil" exact element={<DomainCivil />} />
        <Route path="/domain_ece" exact element={<DomainEce />} />
        <Route path="/domain_en" exact element={<DomainEn />} />
        <Route path="/domain_management" exact element={<DomainManage />} />
        <Route path="/rules" exact element={<Rules />} />
        <Route path="/ca" exact element={<CA />} />
      </Routes>
    </HashRouter>
  </>
}

export default App;
