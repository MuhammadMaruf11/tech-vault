import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../../components/Banner/Banner";
import AboutUs from "../../components/AboutUs/AboutUs";
import HomeService from "./HomeService";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Achievements from "../../components/Achievements/Achievements";
import HomeProducts from "./HomeProducts";
import Portfolio from "../../components/Portfolio/Portfolio";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <AboutUs />
      <ChooseUs />
      <Achievements />
      <HomeService />
      <Portfolio />
      <HomeProducts />
    </Layout>
  );
};

export default Home;
