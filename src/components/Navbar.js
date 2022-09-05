import React, { useState } from "react";
import logo from "../img/logo.svg";
import MenuItem from "./MenuItem";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:flex space-x-6">
          <MenuItem key="Pricing" name="Pricing" link="#" />
          <MenuItem key="Product" name="Product" link="#" />
          <MenuItem key="AboutUs" name="About us" link="#" />
          <MenuItem key="Careers" name="Careers" link="#" />
          <MenuItem key="Community" name="Community" link="#" />
        </div>
        <a
          href="#"
          className="hidden md:block p-3 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >
          Get Started
        </a>
        <div className="md:hidden">
          <div
            className={`${isNavOpen ? "hidden" : "block"} space-y-2`}
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <div className="hover:cursor-pointer absolute top-5 right-5">
              <span className="my-2 block h-0.5 w-8 bg-gray-600"></span>
              <span className="my-2  block h-0.5 w-8 bg-gray-600"></span>
              <span className="my-2 block h-0.5 w-8 bg-gray-600"></span>
            </div>
          </div>

          <div className={isNavOpen ? "block" : "hidden"}>
            <div
              className="absolute top-5 right-5 "
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 hover:cursor-pointer text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="6" x2="6" y2="22" />
                <line x1="6" y1="6" x2="22" y2="22" />
              </svg>
            </div>
            <div
              className="absolute
            flex
            flex-col
            items-center
            self-end
            py-8
            mt-10
            space-y-6
            font-bold
            bg-white
            sm:w-auto
            sm:self-center
            left-6
            right-6
            drop-shadow-md"
            >
              <MenuItem key="Pricing" name="Pricing" link="#" />
              <MenuItem key="Product" name="Product" link="#" />
              <MenuItem key="AboutUs" name="About us" link="#" />
              <MenuItem key="Careers" name="Careers" link="#" />
              <MenuItem key="Community" name="Community" link="#" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
