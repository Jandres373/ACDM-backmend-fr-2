import React from "react";
import MainSection from "@/components/component_visuals/MainSection";
import NavBar from "@/components/component_visuals/NavBar";
import Footer from "@/components/component_visuals/Footer";
import SideBar from "../components/component_visuals/SideBar";

const HomePage = () => {
  return (
    <div className="w-full">
      <NavBar />
      <section className="flex">
        <SideBar />
        <MainSection />
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
