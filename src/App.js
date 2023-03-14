import React from "react"
import LandingPage from "./Components/LandingPage/landingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<LandingPage /> } />
    </Routes>
  </BrowserRouter>
  </>
}

export default App;
