"use client";
import { AppProps } from "next/app";
import React, { useEffect } from "react";
import Home from "@/components/Section/Home";
import About from "@/components/Section/About";
import Skill from "@/components/Section/Skill";
import Portfolio from "@/components/Section/Portfolio";
import Contact from "@/components/Section/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
const Homes = () => {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <main className="container max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-20 space-y-14">
      <Home />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Homes;
