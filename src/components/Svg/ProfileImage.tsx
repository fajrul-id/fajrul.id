/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProfileImage = () => {
  return (
    <div className="w-full flex items-center justify-center md:justify-end animate__animated animate__fadeInRight">
      <div className="bg rounded-full w-56 h-56 overflow-hidden">
        <img
          src="/profile.png"
          alt=""
          className="translate-x-4 translate-y-2"
        />
      </div>
    </div>
  );
};

export default ProfileImage;