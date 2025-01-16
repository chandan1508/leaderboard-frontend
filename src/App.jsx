import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import LeaderBoard from "./pages/LeaderBoard";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
         <Route exact path="/SignUp" element={<SignUp />} /> 
         <Route exact path="/LogIn" element={<LogIn />} />
         <Route exact path="/leaderboard" element={<LeaderBoard />} /> 
      </Routes>
      <Footer />
    </div>  
  );
};

export default App;


