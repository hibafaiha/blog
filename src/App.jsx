import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Form from "./Forms";
import Header from "./Header";

export default function App() {
  return (
    <div>
      <>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      </>
    </div>
  );
}

