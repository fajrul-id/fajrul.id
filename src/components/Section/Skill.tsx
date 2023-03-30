import Image from "next/image";
import React from "react";

const Skill = () => {
  return (
    <section
      id="skill"
      className="p-4 sm:p-6 lg:p-8 text-[#48438e] text-shadow-sm "
    >
      <div
        className="mt-24 space-y-8"
        data-aos="fade-right"
        data-aos-delay="600"
      >
        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-4xl">Skill</h1>
          <p className="text-lg">
            Berikut Beberapa Aplikasi/Bahasa Pemograman Yang Saya Pernah Gunakan
          </p>
        </div>
        <div className="bg-transparent border-t border-t-gray-400 shadow-lg rounded-3xl p-4 sm:p-6 lg:p-8 lg:mt-20 flex flex-col items-center md:items-start md:flex-row gap-4 md:gap-10  justify-around">
          <div>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="transform transition duration-500 hover:scale-110">
                <Image
                  width="200"
                  height="200"
                  loading="lazy"
                  src="/assets/img/skill/html.png"
                  className="mx-auto mb-4 w-20 md:w-32 rounded-lg"
                  alt="html"
                />
              </div>
              <div className="transform transition duration-500 hover:scale-110">
                <Image
                  width="200"
                  height="200"
                  loading="lazy"
                  src="/assets/img/skill/js.png"
                  className="mx-auto mb-4 w-16 md:w-24 rounded-lg"
                  alt="js"
                />
              </div>
              <div className="transform transition duration-500 hover:scale-110">
                <Image
                  width="200"
                  height="200"
                  loading="lazy"
                  src="/assets/img/skill/css.png"
                  className="mx-auto mb-4 w-16 md:w-24 rounded-lg"
                  alt="css"
                />
              </div>
              <div className="transform transition duration-500 hover:scale-110">
                <Image
                  width="200"
                  height="200"
                  loading="lazy"
                  src="/assets/img/skill/ts.webp"
                  className="mx-auto mb-4 w-16 md:w-24 rounded-lg"
                  alt="typescript"
                />
              </div>
              <div className="transform transition duration-500 hover:scale-110">
                <Image
                  width="200"
                  height="200"
                  loading="lazy"
                  src="/assets/img/skill/node.png"
                  className="mx-auto mb-4 w-16 md:w-24 rounded-lg"
                  alt="node"
                />
              </div>
              <div className="transform transition duration-500 hover:scale-110">
                <Image
                  width="100"
                  height="100"
                  src="/assets/img/skill/react.png"
                  className="mx-auto mb-4 w-20  md:h-24 rounded-lg"
                  alt="react"
                />
              </div>
              <div className="transform transition duration-500 hover:scale-110">
                <Image
                  width="200"
                  height="200"
                  loading="lazy"
                  src="/assets/img/skill/api.png"
                  className="mx-auto mb-4 w-16 md:w-24 rounded-lg"
                  alt="api"
                />
              </div>
              <div className="transform transition duration-500 hover:scale-110">
                <Image
                  width="200"
                  height="200"
                  loading="lazy"
                  src="/assets/img/skill/express.png"
                  className="mx-auto mb-4 w-16 md:w-24 rounded-lg"
                  alt="express"
                />
              </div>
              <div className="transform transition duration-500 hover:scale-110">
                <Image
                  width="200"
                  height="200"
                  loading="lazy"
                  src="/assets/img/skill/sequelize.png"
                  className="mx-auto mb-4 w-16 md:w-20 md:h-24 rounded-lg"
                  alt="sequelize"
                />
              </div>
              <div className="transform transition duration-500 hover:scale-110">
                <Image
                  width="200"
                  height="200"
                  loading="lazy"
                  src="/assets/img/skill/prisma.webp"
                  className="mx-auto mb-4 w-16 md:w-24 rounded-lg"
                  alt="prisma"
                />
              </div>
              <div className="transform transition duration-500 hover:scale-110">
                <Image
                  width="200"
                  height="200"
                  loading="lazy"
                  src="/assets/img/skill/pg.webp"
                  className="mx-auto mb-4 w-16 md:w-24 rounded-lg"
                  alt="pg"
                />
              </div>
              <div className="transform transition duration-500 hover:scale-110">
                <Image
                  width="200"
                  height="200"
                  loading="lazy"
                  src="/assets/img/skill/figma.png"
                  className="mx-auto mb-4 w-16 md:w-24  md:h-24 rounded-lg"
                  alt="figma"
                />
              </div>
              <div className="transform transition duration-500 hover:scale-110">
                <Image
                  width="200"
                  height="200"
                  loading="lazy"
                  src="/assets/img/skill/ps.png"
                  className="mx-auto mb-4 w-16 md:w-24 rounded-lg"
                  alt="photoshop"
                />
              </div>
              <div className="transform transition duration-500 hover:scale-110">
                <Image
                  width="200"
                  height="200"
                  loading="lazy"
                  src="/assets/img/skill/coreldraw.png"
                  className="mx-auto mb-4 w-16 md:w-24 rounded-lg"
                  alt="corel"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
