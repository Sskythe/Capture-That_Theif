import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Router, Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import MainGame from "./screens/MainGame";
import ResultPage from "./screens/ResultPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        
          <Route index path="/" element={<LandingPage/>}/>
          <Route path="/game" element={<MainGame/>}/>
          <Route path="/result" element={<ResultPage/>}/>
      </Routes>
    </>
  );
}

export default App;
