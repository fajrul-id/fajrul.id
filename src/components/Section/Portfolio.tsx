"use client";
import React from "react";
import Portfoliocard from "../Card/Portfoliocard";

import Flickity from "react-flickity-component";

import "flickity/css/flickity.css";

const portfolio = [
  {
    NamaProject: "Koperasi Gala Indo Mandiri",
    Deskripsi: "Website landing Page menggunakan ReactJs",
    link: "https://koperasi-gim.com/",
    foto: "https://i.imgur.com/Hn2cxb3.jpg",
  },
  {
    NamaProject: "SwifTax Konsultan",
    Deskripsi: "Website landing Page menggunakan NextJs",
    link: "https://tax-landing-page.vercel.app/",
    foto: "https://i.imgur.com/Db41Upo.png",
  },
  {
    NamaProject: "SmartCity Muaro Jambi",
    Deskripsi:
      "MUji adalah platform yang mampu berinteraksi dengan masyarakat Muaro Jambi bersifat aktif; saling melakukan aksi; antar-hubungan.",
    link: "http://103.84.192.206:3019/",
    foto: "/portfolio11.png",
  },
  {
    NamaProject: "Satu Data",
    Deskripsi: "NextJS,KneckJs,Postgresql,Tailwind",
    link: "http://103.84.192.206:3020/",
    foto: "/portfolio12.png",
  },
  {
    NamaProject: "Todo list",
    Deskripsi: "ReactJS,Headlessui,Tailwind",
    link: "http://103.84.192.206:3020/",
    foto: "/portfolio13.png",
  },
];

function Carousel() {
  return (
    <Flickity className="w-full" options={{ autoPlay: true, initialIndex: 1 }}>
      {portfolio.map((e, i) => (
        <div key={i} style={{ marginLeft: 5, marginRight: 5 }}>
          <Portfoliocard
            NamaProject={e.NamaProject}
            Deskripsi={e.Deskripsi}
            link={e.link}
            foto={e.foto}
          />
        </div>
      ))}
    </Flickity>
  );
}

const Portfolio = () => {
  return (
    <section
      id="skill"
      className="p-4 sm:p-6 lg:p-8 text-[#48438e] text-shadow-sm"
    >
      <div className="translate-y-24 space-y-8">
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
