"use client";
import React from "react";
import Portfoliocard from "../Card/Portfoliocard";

import Flickity from "react-flickity-component";

import "flickity/css/flickity.css";
type Project = {
  id: number;
  nama_project: string;
  link: string;
  deskripsi: string;
  image: string;
};

const Portfolio = ({ props }: { props: Project[] }) => {
  function Carousel() {
    return (
      <Flickity className="w-full" options={{ autoPlay: true }}>
        {props.map((e, i) => {
          return (
            <div key={i} style={{ marginLeft: 5, marginRight: 5 }}>
              <Portfoliocard
                NamaProject={e.nama_project}
                Deskripsi={e.deskripsi}
                link={e.link}
                foto={e.image}
              />
            </div>
          );
        })}
      </Flickity>
    );
  }
  return (
    <section
      id="portfolio"
      className="p-4 sm:p-6 lg:p-8 text-[#48438e] text-shadow-sm"
    >
      <div className="mt-24 space-y-8" data-aos="fade-in" data-aos-delay="500">
        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-4xl">Portfolio</h1>
          <p className="text-lg">
            Berikut Beberapa Project Yang Pernah Saya Kerjakan
          </p>
          <div className="w-full py-8 flex flex-wrap justify-center gap-4">
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
