/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="px-16 text-gray-900 bg-white  mt-12">
        <div className="w-full inline-flex mt-8 items-center justify-center mx-auto text-xl font-semibold">
          <img
            src="https://blog.fajrul.id/storage/general/screen-shot-2023-03-17-at-190624.png"
            alt=""
            className="w-12 items-center mr-4"
          />
          Fajrul.id
        </div>
        <ul className="w-full justify-center flex flex-col text-center sm:flex-row mx-auto space-y-2 sm:space-y-0 sm:space-x-2 mt-6 overflow-hidden">
          <li>
            <a href="/#" className="sm:px-4 text-gray-800 hover:text-gray-600">
              Home
            </a>
          </li>
          <li>
            <a
              href="https://blog.fajrul.id"
              className="sm:px-4 text-gray-800 hover:text-gray-600"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/#about"
              className="sm:px-4 text-gray-800 hover:text-gray-600"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/#portfolio"
              className="sm:px-4 text-gray-800 hover:text-gray-600"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className="sm:px-4 text-gray-800 hover:text-gray-600"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="items-center justify-between mt-4">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8">
            <a
              href="https://www.facebook.com/frul404/"
              className="text-gray-800 hover:text-gray-200 p-1 sm:p-2 inline-flex items-center "
            >
              <svg
                className="w-7 h-7 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="http://instagram.com/fajrul.id"
              className="text-gray-400 hover:text-gray-200  p-1 sm:p-2  inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
                className="h-8 w-8 fill-current"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a
              href="https://wa.me/6282390924636"
              className="text-green-400 hover:text-gray-200  p-1 sm:p-2  inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 fill-current"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path
                  d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://github.com/fajrul-id/"
              className="text-gray-800 hover:text-gray-200  p-1 sm:p-2  inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          <div className="mx-auto py-5 text-sm text-gray-400 text-center">
            Copyright 2023 @ Fajrul.id
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
