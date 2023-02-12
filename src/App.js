import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/page/header/Navbar";
import Main from "./components/page/main/Main";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
