import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../../components/Banner/Banner";
import AboutUs from "../../components/AboutUs/AboutUs";
import HomeService from "./HomeService";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Achievements from "../../components/Achievements/Achievements";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <HomeService />
      <AboutUs />
      <ChooseUs />
      <Achievements />
    </Layout>
  );
};

export default Home;
