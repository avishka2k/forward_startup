import React, { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import Images from "../assets/images";

function Navbar() {
  const [nav, setNav] = useState(true);
  const menuClick = () => setNav(!nav);
  return (
    <>
      <div className="flex flex-col z-[1000] bg-blue fixed w-full">
        <div className="container px-14 flex flex-row m-auto h-24">
          <div className="flex flex-row items-center justify-between w-full">
            <img src={Images.Logo} className="w-[10rem]" alt="" />
            <ul className="lg:flex hidden flex-row gap-12">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Services</li>
              <li className="cursor-pointer">Pricing</li>
              <li className="cursor-pointer">Blog</li>
            </ul>
            <div className="lg:flex hidden border py-3 px-10">
              Contact
            </div>
            <div
              onClick={menuClick}
              className="lg:hidden flex flex-row border border-white-opacity w-[3rem] h-[3rem]"
            >
              {nav ? (
                <CgMenu className="w-[1.5rem] h-[1.5rem] m-auto items-center" />
              ) : (
                <CgClose className="w-[1.5rem] h-[1.5rem] m-auto items-center" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "hidden"
            : "fixed bg-text_dark opacity-60 w-full z-[500] h-[100rem] flex-col text-primary-white lg:hidden"
        }
      >
        <ul className="p-7">
          <li className="cursor-pointer p-3">About</li>
          <li className="cursor-pointer p-3">Services</li>
          <li className="cursor-pointer p-3">Pricing</li>
          <li className="cursor-pointer p-3">Blog</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
