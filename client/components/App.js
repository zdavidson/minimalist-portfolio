import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="m-4">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
