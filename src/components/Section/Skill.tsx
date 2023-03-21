import React from "react";

const Skill = () => {
  return (
    <section
      id="skill"
      className="p-4 sm:p-6 lg:p-8 text-[#48438e] text-shadow-sm "
    >
      <div className="translate-y-24 space-y-8">
        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-4xl">Skill</h1>
          <p className="text-lg">Berikut Beberapa Skill Saya</p>
        </div>
        <div className="bg-white shadow-lg rounded-3xl p-4 sm:p-6 lg:p-8 lg:mt-20 flex flex-col items-center md:items-start md:flex-row gap-4 md:gap-10  justify-around">
          <div>
            <h1 className="text-2xl">Front-end</h1>
            <ol className="list-decimal translate-x-6">
              <li>TypeScript</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>React</li>
            </ol>
          </div>
          <div>
            <h1 className="text-2xl">Back-end</h1>
            <ol className="list-decimal translate-x-6">
              <li>Prisma</li>
              <li>Sequelize</li>
              <li>ExpressJS</li>
              <li>Cors</li>
              <li>Kneck</li>
            </ol>
          </div>
          <div>
            <h1 className="text-2xl">Design</h1>
            <ol className="list-decimal translate-x-6">
              <li>Figma</li>
              <li>PhotoShop</li>
              <li>CorelDraw</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
