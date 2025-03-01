"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);
  const pathname = usePathname();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/10 -z-10 translate-y-[-60%]">
        
      </div>
      <nav
        className={`w-full fixed px-2 lg:px-8 xl:px-[8%] py-2 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-[#2D90DB] bg-opacity-50 backdrop-blur-lg shadow-sm "
            : ""
        }`}
      >
        <Link href={"/"}>
          <Image
            src={"/pictures/Logo.svg"}
            alt="logo"
            width={300}
            height={300}
            className=" cursor-pointer mr-14"
          />
        </Link>
        <ul
          className={`hidden md:flex items-center justify-evenly gap-6 lg:gap-8
                rounded-full px-12 py-3   ${isScroll ? "" : "bg-[#70b5e4] shadow-sm bg-opacity-10 "}`}
        >
          <li>
            <Link className={`${pathname == "/" ? "bg-white rounded-md p-2" : ""}`} href={"#top"}>
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link className={`${pathname == "#services" ? "bg-white rounded-md p-2" : ""}`} href={"#services"}>
              {" "}
              Services
            </Link>
          </li>
          <li>
            <Link className={`${pathname == "#projects" ? "bg-white rounded-md p-2" : ""}`} href={"#projects"}>
              {" "}
              Projects
            </Link>
          </li>
          <li>
            <Link className={`${pathname == "#about" ? "bg-white rounded-md p-2" : ""}`} href={"#about"}>
              {" "}
              About us
            </Link>
          </li>
          <li>
            <Link className={`${pathname == "#contact" ? "bg-white rounded-md p-2" : ""}`} href={"#contact"}>
              {" "}
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
         
          <Link
            href={"#contact"}
            className="hidden lg:flex items-center gap-3 px-10
                    py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            {" "}
            Requst a Qoute{" "}
          
          </Link>
          <button className="block md:hidden ml-3" onClick={openMenu}>
             <Image 
              src={"/pictures/menu-black.png"}

              alt="theme"
              width={30}
              height={30}
              className="w-6"
              onClick={openMenu}
            /> 
          </button>
        </div>
        {/* ******* mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
                top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white:"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={"/pictures/close-black.png"} alt="closing" width={24} height={24} className="w-5" />
          </div>
          <li>
            <Link className="font-Ovo" onClick={closeMenu} href={"#top"}>
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" onClick={closeMenu} href={"#about"}>
              {" "}
              About Me
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" onClick={closeMenu} href={"#services"}>
              {" "}
              Services
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" onClick={closeMenu} href={"#work"}>
              {" "}
              My Work
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" onClick={closeMenu} href={"#contact"}>
              {" "}
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;