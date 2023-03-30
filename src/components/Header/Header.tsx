/* eslint-disable @next/next/no-img-element */
"use client";
import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Blog", href: "https://blog.fajrul.id", current: false },
  { name: "About", href: "#about", current: false },
  { name: "Portfolio", href: "#portfolio", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-50">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <img
                  className="w-10"
                  src="https://blog.fajrul.id/storage/general/screen-shot-2023-03-17-at-190624.png"
                  alt="Fajrul.id"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "text-gray-900"
                          : "text-gray-400 hover:text-gray-900",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-300 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-end justify-center">
              {navigation.map((item) => (
                <Disclosure.Button key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-gray-900"
                        : "text-gray-400 hover:text-gray-900",
                      "block px-3 py-2 rounded-md text-base text-center font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
export function NavbarSticky() {
  const [isOpen, setIsOpen] = useState(false);
  // sticky nav
  const [offset, setOffset] = useState(0);
  const [sticky, setSticky] = useState(" hidden");

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    if (offset > 240) {
      setSticky("animate__animated animate__backInLeft fixed");
    } else {
      if (offset < 140) {
        setSticky(" hidden");
      }
    }
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);
  return (
    <div className={"w-screen z-50 " + sticky}>
      <div className="bg-white w-[85vw] my-4 mx-auto rounded-3xl">
        <Navbar />
      </div>
    </div>
  );
}
