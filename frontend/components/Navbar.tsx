"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={100} height={32} />
      </Link>
      <div className="lg:flexEnd hidden gap-16">
        <ul className="hidden h-full gap-16 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="muli-regular-20 text-black flexEnd cursor-pointer pb-1.5 transition-all hover:text-gray-600"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Button type="button" title="Let's Talk" variant="btn_black" />
        </div>
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-bloack cursor-pointer lg:hidden"
        onClick={toggleDropdown}
      />

      {isDropdownOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out">
          <ul className="px-2">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link href={link.href}>
                  <label className="block px-4 py-2 regular-20 text-black hover:text-white hover:bg-black">
                    {link.label}
                  </label>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
