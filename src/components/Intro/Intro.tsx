/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ProfileImage from "../Svg/ProfileImage";

const Intro = () => {
  return (
    <div className="m-10 flex gap-4 flex-col-reverse md:flex-row">
      <div className="flex flex-col gap-4 animate__animated animate__bounceInDown">
        <h3 className="font-semibold">Hallo,Saya Fajrul</h3>
        <h1 className="text-4xl font-semibold text-gray-600">
          Junior Developer
        </h1>
        <p>Memulai karir sebagai seorang programer di tahun 2022.</p>
        <div className="flex gap-4">
          <div className="h-10 w-28 rounded-md bg p-[2px]">
            <div className="flex h-full w-full items-center justify-center rounded-md bg-white">
              <h1 className="pr font-semibold text-transparent bg-clip-text">
                Portfolio
              </h1>
            </div>
          </div>
          <div className="h-10 w-28 flex items-center justify-center border rounded-md bg text-white font-semibold">
            Let's Talk !
          </div>
        </div>
      </div>
      <ProfileImage />
    </div>
  );
};

export default Intro;
