import React from "react";
import { Navbar } from "../Header/Header";
import Intro from "../Intro/Intro";

const Home = ({ total }: { total: string }) => {
  return (
    <section
      id="home"
      className="bg-white shadow-lg rounded-3xl p-4 sm:p-6 lg:p-8 lg:mt-14"
    >
      <Navbar />
      <Intro total={total} />
    </section>
  );
};

export default Home;
