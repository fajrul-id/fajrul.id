/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Stats from "../Stats/Stats";

const About = () => {
  return (
    <section
      id="about"
      className="p-4 sm:p-6 lg:p-8 text-[#48438e] text-shadow-sm "
    >
      <div className="translate-y-24 space-y-8">
        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-4xl">Tentang Saya</h1>
          <p className="text-lg">Perkenalkan</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center justify-center">
          <div className="max-w-[20rem]">
            <img src="/about.jpg" alt="about" className="rounded-lg" />
          </div>
          <div className="max-w-sm flex flex-col gap-4 items-center md:items-start justify-around">
            <div className="text-center md:text-left">
              <p>
                Saya adalah anak ke-2 dari 4 bersaudara,lahir di Bengkulu,30
                April 2000, dibesarkan di kota bernama Bengkulu. mempunyai Ayah
                seorang Da'i, membuat saya tidak jauh dari dunia Agama.
              </p>
              <p>
                Setelah lulus Sekolah Menengah Tingkat Pertama, di SMP 21 Kota
                Bengkulu, saya melanjutkan sekolah di SMK Negeri 1 Kota
                Bengkulu, dengan jurusan Teknik Komputer Jaringan. dan
                melanjutkan pendidikan tentang bahasa pemerograman di
                JemblonganValley(Jvalley) Bootcamp Juni 2022
              </p>
              <a href="/assets/pdf/Fajrul-Resume.pdf">
                <div className="h-10 rounded-md my-2">
                  <div className="flex h-full w-full items-center justify-center rounded-md bg-gray-700">
                    <h1 className="pr font-semibold text-transparent bg-clip-text">
                      Download Cv
                    </h1>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
