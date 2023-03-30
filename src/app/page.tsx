/* eslint-disable @next/next/no-img-element */
import { NavbarSticky } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "animate.css";
import Homes from "./home";

export default function Page() {
  return (
    <>
      <NavbarSticky />
      <Homes />
      <Footer />
    </>
  );
}
