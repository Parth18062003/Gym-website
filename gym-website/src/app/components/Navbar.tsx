"use client";

import Link from "next/link";
import React, { useState } from "react";
import { LuUser2  } from "react-icons/lu"; // Import login icon
import logo from "../../../assets/logo.png";
import menu from "../../../assets/menu.svg";
import close from "../../../assets/close.svg";
import Image from "next/image";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const navLinks = [
    {
      id: "/",
      title: "HOME",
    },
    {
      id: "workout-plan",
      title: "WORKOUT PLAN",
    },
    {
      id: "ai-tracker",
      title: "AI TRACKER",
    },
    {
      id: "exercise",
      title: "EXERCISE",
    },
    {
      id: "about",
      title: "ABOUT",
    },
  ];

  return (
    <>
      <nav className="w-full flex py-6 justify-between items-center bg-[#051342] h-[86px]">
        <Link href="/" className="mt-[-10px]">
          <Image
            src={logo}
            alt="Fitsnap logo"
            className="w-[217px] h-[207px]"
          />
        </Link>
        <div className="hidden sm:flex flex-1 justify-end items-center space-x-6">
          <ul className="list-none flex justify-end items-start flex-1 flex-row">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-bold cursor-pointer text-[18px] mt-2 ${
                  active === nav.title ? "text-[#FDF8ED]" : "text-[#c7c7c7]"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link href={`${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
            {/* Add login button */}
            <li className="flex items-center mx-8 bg-[#2E2E44] w-[113px] h-[38px]">
              <LuUser2  className="text-white text-xl ml-3" />
              <Link href="/login">
                <span className="font-poppins font-bold cursor-pointer text-[18px] text-white ml-2">
                  LOGIN
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] mx-4 object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#051342] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-sans font-medium cursor-pointer text-[24px] ${
                    active === nav.title
                      ? "text-[#FDF8ED]"
                      : "text-[#c7c7c7]"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <Link href={`${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
              <li className="flex items-center mt-6 bg-[#2E2E44] w-[140px] h-[48px]">
                <LuUser2  className="text-[#FDF8ED] text-[28px] ml-2" />
                <Link href="/login">
                  <span className="font-poppins cursor-pointer text-[28px] text-white ml-2">
                    LOGIN
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
