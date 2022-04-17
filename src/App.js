import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/page/header/Navbar";
import Main from "./components/page/main/Main";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/main"} element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
