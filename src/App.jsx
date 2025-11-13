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
  const [count, setCount] = useState(0);

  // 🔥 AOS animation init
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out",
    });
  }, []);

  // 🔥 TEST SUPABASE CONNECT
  useEffect(() => {
    const test = async () => {
      const { data, error } = await supabase.from("coments").select("*");

      console.log("SUPABASE DATA:", data);
      console.log("SUPABASE ERROR:", error);
    };

    test();
  }, []);

  return (
    <>
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
    </>
  );
}

export default App;
