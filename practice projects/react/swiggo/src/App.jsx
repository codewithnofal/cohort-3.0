import React from "react";
import Hero from "./shared/components/Hero";
import Navbar from "./shared/components/Navbar";
import Footer from "./shared/components/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
