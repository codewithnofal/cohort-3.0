import React from "react";
import Hero from "../components/Hero";
import ShopByCategory from "../components/ShopByCategory";
import NewArrivals from "../components/NewArrivals";
import ProductShowcase from "../components/ProductShowcase";
import FeatureStrip from "../components/FeatureStrip";

const Home = () => {
  return (
    <div className="bg-black sm:px-10">
      <Hero />
      <ShopByCategory />
      <ProductShowcase />
      <FeatureStrip/>
    </div>
  );
};

export default Home;
