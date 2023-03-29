import React from "react";
import Categories from "../../components/categories/Categories";
import Contact from "../../components/contact/Contact";
import FeaturedProducts from "../../components/featuredproduct/FeaturedProduct";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import Slider from "../../components/slider/Slider";
import "./home.scss";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <Slider />
        <FeaturedProducts type="men" />
        <Categories />
        <Contact />
        <FeaturedProducts type="women" />
      </div>
      <Footer />
    </>
  );
}

export default Home;
