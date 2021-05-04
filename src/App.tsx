import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Root from "./pages/Root";

const App = () => {
  return (
    <Router>
      <Root />
      <ToastContainer />
    </Router>
  );
};

export default App;
