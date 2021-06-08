import React from "react";
import "./App.css";
import Home from "./pages";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route path="/" component={Home} exact />
    </>
  );
}

export default App;
