import React from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/head/Hero";
import Top from "./components/head/nav/top";
import Menu from "./components/Menu/Menu";
import TakeAway from "./components/TakeAway/TakeAway";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <div className="container">
        <Top />
        <Hero />
        <Features />
        <AboutUs />
        <Menu />
        <TakeAway />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
