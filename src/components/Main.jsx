import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import About from "./About";
import Carusel from "./Carusel";
import Cord from "./Cord";

const Main = () => {
  return (
    <div>
      <Cord />
      <div className="bg-[url(/dark.png)] bg-top bg-cover -z-50 fixed top-0 bottom-0 left-0 right-0" />
      <div className="bg-[url(/dark.png)] bg-top bg-cover -z-50 fixed top-0 bottom-0 left-0 right-0 rotate-180" />
      <div className="fixed top-0 z-40 left-0 right-0">
        <Header />
      </div>
      <Banner />
      <About />
      <Carusel />
      <Footer />
    </div>
  );
};

export default Main;
