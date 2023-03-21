/* eslint-disable @next/next/no-img-element */
import { NavbarSticky } from "@/components/Header/Header";
import "animate.css";
import Home from "@/components/Section/Home";
import About from "@/components/Section/About";
import Skill from "@/components/Section/Skill";
import Portfolio from "@/components/Section/Portfolio";
import Contact from "@/components/Section/Contact";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  return (
    <>
      <NavbarSticky />
      <main className="container max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-20 space-y-12">
        <Home />
        <About />
        <Skill />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
