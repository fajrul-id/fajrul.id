/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ProfileImage from "../Svg/ProfileImage";
import Stats from "../Stats/Stats";

const Intro = ({ total }: { total: string }) => {
  return (
    <div className="m-10 flex gap-4 flex-col-reverse md:flex-row">
      <div className="flex flex-col gap-4 animate__animated animate__bounceInDown">
        <h3 className="font-semibold">Hallo,Saya Fajrul</h3>
        <h1 className="text-4xl font-semibold text-gray-600">
          FullStack JavaScript Developer
        </h1>
        <p>
          Saya Muhammad Fajrul Amin, seorang Full Stack Developer dengan
          pengalaman mengelola dan mengembangkan aplikasi berbasis Next.js,
          React.js, dan teknologi pendukung seperti TypeScript serta PostgreSQL.
        </p>

        <div className="max-w-[16rem]">
          <Stats total={total} />
        </div>
        <div className="flex gap-4">
          <a href="/#portfolio">
            <div className="h-10 w-28 rounded-md bg p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-md bg-white">
                <h1 className="pr font-semibold text-transparent bg-clip-text">
                  Portfolio
                </h1>
              </div>
            </div>
          </a>
          <a href="#contact">
            <div className="h-10 w-28 flex items-center justify-center border rounded-md bg text-white font-semibold">
              Let's Talk !
            </div>
          </a>
        </div>
      </div>
      <ProfileImage />
    </div>
  );
};

export default Intro;
