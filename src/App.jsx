import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Beranda from "./components/Beranda";
import Konsep from "./components/Konsep";
import Gallery from "./components/Galeri";
import Teknis from "./components/Teknis";
import Profil from "./components/Profil";
import Proses from "./components/Proses";
import Video from "./components/Video";
import Refleksi from "./components/Refleksi";
import Masukan from "./components/Masukan";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

import { supabase } from "./supabaseClient";

function App() {
  // posisi cursor
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // AOS
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out",
    });
  }, []);

  // TEST SUPABASE
  useEffect(() => {
    const test = async () => {
      const { data, error } = await supabase.from("coments").select("*");
      console.log("SUPABASE DATA:", data);
      console.log("SUPABASE ERROR:", error);
    };

    test();
  }, []);

  // update posisi cursor
  useEffect(() => {
    const handleMove = (e) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
    {/* 🔵 GLOW YANG NGIKUTIN CURSOR */}
    <div
      className="cursor-glow"
      style={{
        left: `${cursorPos.x}px`,
        top: `${cursorPos.y}px`,
      }}
    />

      {/* Bisa kasih second glow ungu biar lebih mantul */}
      <div
        className="
          pointer-events-none
          fixed
          z-20
          w-[520px] h-[520px]
          rounded-full
          bg-blue-200/30
          blur-3xl
          mix-blend-soft-light
          transform -translate-x-1/2 -translate-y-1/2
          transition-all duration-200
        "
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      />

      {/* KONTEN UTAMA */}
        <div className="relative z-10">
          <Navbar />
          <Beranda />
          <Konsep />
          <Gallery />
          <Teknis />
          <Profil />
          <Proses />
          <Video />
          <Refleksi />
          <Masukan />
          <Footer />
        </div>
    </div>
  );
}

export default App;
