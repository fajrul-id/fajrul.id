/* eslint-disable @next/next/no-img-element */
import React from "react";
interface Iprops {
  NamaProject?: string;
  Deskripsi?: string;
  link?: string;
  foto?: string;
}
const Portfoliocard = (props: Iprops) => {
  return (
    <div className="max-w-xs min-h-[24rem] border bg-white shadow-lg rounded-lg flex items-center px-8 py-4 relative">
      <div className="flex flex-col items-center -translate-y-10 gap-4">
        <div className="max-w-[14rem]">
          <img src={props.foto || "-"} alt="logo" className="rounded-lg" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[#0090AD] text-lg cursor-pointer font-bold">
            {props.NamaProject || "-"}
          </h1>
          <p className="text-sm font-light max-w-[60vw] p-1 text-ellipsis overflow-hidden">
            {props.Deskripsi || "-"}
          </p>
        </div>
      </div>
      <a
        href={props.link || "/"}
        className="bg-[#0090AD] md:w-fit text-white rounded-md p-2 px-6 absolute bottom-4"
      >
        Explore
      </a>
    </div>
  );
};

export default Portfoliocard;
