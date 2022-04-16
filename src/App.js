import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/page/main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={process.env.PUBLIC_URL} element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
