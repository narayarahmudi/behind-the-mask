import React, { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navbar = [
    "Beranda",
    "Konsep",
    "Galeri",
    "Teknis",
    "Profil",
    "Proses",
    "Video",
    "Refleksi",
  ];

  return (
    <header
      className="
        fixed top-0 left-0 w-full
        flex justify-between items-center
        px-6 md:px-36 py-4 md:py-5
        text-white font-mont text-sm font-extralight
        z-50
        backdrop-blur-2xl border-b border-white/10
      "
    >
      {/* Logo */}
      <div id="logo" className="font-medium tracking-wide">
        <span>Behind The Mask</span>
      </div>

      {/* Menu list */}
      <ul
        className={`
          flex md:flex-row flex-col
          md:static fixed
          md:inset-auto inset-0
          md:h-auto h-screen
          md:w-auto w-full
          items-center justify-center md:justify-end
          gap-8 md:gap-4
          text-lg md:text-sm

          transition-all duration-300 ease-in-out
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 md:opacity-100 md:translate-y-0"}

          md:bg-transparent bg-black/80
          md:backdrop-blur-0 backdrop-blur-2xl

          md:z-auto z-40
          pt-24 md:pt-0
        `}
      >
        {navbar.map((value, index) => (
          <li key={index}>
            <a
              href={`#${value}`}
              onClick={() => setOpen(false)}
              className="
                relative
                hover:text-white
                transition-all duration-200
                after:content-[''] after:absolute after:w-0 after:h-[1px]
                after:left-0 after:-bottom-1 after:bg-white
                hover:after:w-full after:transition-all after:duration-300
              "
            >
              {value}
            </a>
          </li>
        ))}
      </ul>

      {/* Tombol Lihat Akhir (desktop) */}
      <div className="hidden md:block">
        <a href="#Refleksi">
          <button className="cursor-pointer bg-white/10 rounded-md text-white py-1 px-4 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-colors duration-200">
            Lihat Akhir
          </button>
        </a>
      </div>

      {/* Icon menu (mobile) */}
      <button
        id="menu"
        onClick={() => setOpen(!open)}
        className="md:hidden text-2xl cursor-pointer relative z-50"
        aria-label="Toggle menu"
      >
        {!open ? <HiMenu /> : <HiOutlineX />}
      </button>
    </header>
  );
};

export default Navbar;
