import React from "react";
import Hero from "../components/Hero";
import ShopByCategory from "../components/ShopByCategory";
import TopRated from "../components/TopRated";
import NewArrivals from "../components/NewArrivals";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <ShopByCategory />
      <TopRated />
      <NewArrivals />
    </div>
  );
};

export default Home;
