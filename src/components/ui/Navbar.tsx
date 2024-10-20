"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav className="fixed top-4 left-0 right-0 bg-white z-50 max-w-7xl border-2 border-[#d6d6d6] rounded-2xl mx-auto">
      <div className="max-w-7xl py-2 px-4 flex justify-between items-center">
        <div className="">
          <Link href="/">
          <Image
            src='/assets/images/logo.png'
            alt="Logo"
            width={50}
            height={50}
            className=""
          />
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link
            href="/"
            className={`text-gray-700 hover:text-blue-500 ${
              active === "home" ? "text-blue-500" : ""
            } font-roboto-bold font-bold px-4 text-lg`}
            onMouseEnter={() => setActive("home")}
            onMouseLeave={() => setActive(null)}
          >
            SERVICES
          </Link>
          <Link
            href="/services"
            className={`text-gray-700 hover:text-blue-500 ${
              active === "services" ? "text-blue-500" : ""
            } font-roboto-bold font-bold px-4 text-lg`}
            onMouseEnter={() => setActive("services")}
            onMouseLeave={() => setActive(null)}
          >
            OUR WORK
          </Link>
          <Link
            href="/about"
            className={`text-gray-700 hover:text-blue-500 ${
              active === "about" ? "text-blue-500" : ""
            } font-roboto-bold font-bold px-4 text-lg`}
            onMouseEnter={() => setActive("about")}
            onMouseLeave={() => setActive(null)}
          >
            ABOUT US
          </Link>
          <Link
            href="/contact"
            className={`text-gray-700 hover:text-blue-500 ${
              active === "contact" ? "text-blue-500" : ""
            } font-roboto-bold font-bold px-4 text-lg`}
            onMouseEnter={() => setActive("contact")}
            onMouseLeave={() => setActive(null)}
          >
            OUR TEAM
          </Link>
          <Link
            href="/contact"
            className={`text-gray-700 hover:text-blue-500 ${
              active === "contact" ? "text-blue-500" : ""
            } font-roboto-bold font-bold px-4 text-lg`}
            onMouseEnter={() => setActive("contact")}
            onMouseLeave={() => setActive(null)}
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
