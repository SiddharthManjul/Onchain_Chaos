"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";

interface NavLink {
  id: number;
  link: string;
}

const Navigation = () => {
  const [nav, setNav] = useState<boolean>(false);

  const links: NavLink[] = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "research",
    },
    {
      id: 3,
      link: "baldr",
    },
  ];

  return (
    <>
      <div className="flex justify-end">
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer p-12 z-10 text-white flex flex-row gap-x-8"
        >
          <button className="text-2xl p-4 border-2 rounded-full border-black bg-black font-josefinSans">
            <a href="">Contact Us</a>
          </button>
          {nav ? (
            <FaTimes
              size={30}
              className="animate-spin hover:rotate-90 w-16 h-16 p-2 border-2 rounded-full border-black bg-black"
            />
          ) : (
            <div className="">
              <FaBarsProgress
                size={30}
                className="w-16 h-16 p-2 border-2 rounded-full border-black bg-black hover:animate-spin"
              />
            </div>
          )}
        </div>

        {nav && (
          <div
            className={
              nav
                ? "flex flex-col justify-center items-center absolute top-0 left-0 ease-in duration-300 w-full h-screen bg-white text-gray-500"
                : "flex flex-col justify-center items-center absolute top-0 left-[-100%] ease-in duration-300 w-full h-screen bg-white text-gray-500"
            }
          >
            <ul>
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer uppercase font-josefinSans py-6 text-4xl transition-colors hover:bg-gradient-to-r from-black to-gray-800 backdrop-blur-xl"
                >
                  <Link onClick={() => setNav(!nav)} href={link}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;