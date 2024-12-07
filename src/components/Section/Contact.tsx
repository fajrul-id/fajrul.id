import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-4 sm:p-6 lg:p-8 text-[#48438e]">
      <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-white text-gray-900 rounded-lg shadow-lg">
        <div
          data-aos="fade-left"
          data-aos-delay="1000"
          className="flex flex-col justify-between"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Lets talk about everything!
            </h2>
            <div className="mt-8 flex-col gap-4">
              <p>
                Text/Call Me : <strong>+628-23-9092-4636</strong>
              </p>
              <p>
                Location :
                <strong>
                  {" "}
                  Indonesia - Rawajati/Kalibata, Kec. Pancoran, Kota Jakarta
                  Selatan, DKI JAKARTA
                </strong>
              </p>
            </div>
            <div className="text-gray-700 mt-8">
              Hate forms? Send us an{" "}
              <span className="underline font-semibold">
                <a href="mailto:fajrul@fajrul.id">fajrul@fajrul.id</a>
              </span>{" "}
              instead.
            </div>
          </div>
        </div>
        <div>
          <div>
            <label
              htmlFor="fn"
              className="uppercase text-sm text-gray-600 font-bold"
            >
              Full Name
            </label>
            <input
              id="fn"
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div className="mt-8">
            <label
              htmlFor="email"
              className="uppercase text-sm text-gray-600 font-bold"
            >
              Email
            </label>
            <input
              id="email"
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div className="mt-8">
            <label
              htmlFor="mess"
              className="uppercase text-sm text-gray-600 font-bold"
            >
              Message
            </label>
            <textarea
              id="mess"
              className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              defaultValue={""}
            />
          </div>
          <div className="mt-8">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-[#0090AD] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              onClick={() => {
                window.location.href = "https://wa.me/6282390924636";
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
