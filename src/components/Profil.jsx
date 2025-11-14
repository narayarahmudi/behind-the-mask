import React from "react";
import { RiUserFill, RiInstagramFill } from "react-icons/ri";
import fotoBersama from "../assets/foto-bersama-karya.jpg"
import naraya from "../assets/naraya.png";
import rijal from "../assets/rijal.png";
import fadli from "../assets/fadli.png";
import iji from "../assets/iji.png";


const Profil = () => {
  // Ganti dengan foto asli kalian nanti
  const groupPhoto =
    "";

  const members = [
    {
      name: "Dava Naraya Rahmudi",
      role: "Sketsa dasar, pewarnaan utama, dan pembuatan website",
      photo:
        naraya,
      instagram:
        "@narayarahmudii",
    },
    {
      name: "Efrijal Dwi Saputra",
      role: "Sketsa dasar, pewarnaan, Dokumentasi, Direktor kreatif",
      photo:
        rijal,
      instagram:
        "@zepenzz",
    },
    {
      name: "Fadli Cahyo Ramadhan",
      role: "Sketsa dasar, pewarnaan",
      photo:
        fadli,
      instagram:
        "@ndaktau4813",
    },
    {
      name: "Muhammad Izzy Ma'Aly",
      role: "Sketsa dasar, Pewarnaan, Dokumentasi",
      photo:
        iji,
      instagram:
        "@zhaoozyshong",
    },
  ];

  return (
    <section
      id="Profil"
      className="w-full min-h-screen text-white px-6 py-20 md:py-28 bg-linear-to-b from-gray-950 via-black to-gray-950"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-400" data-aos='fade-right'>
            Profil
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide" data-aos='fade-right'>
            Anggota{" "}
            <span className="inline-flex items-center gap-1 text-gray-300">Pameran Topeng Sosial <RiUserFill />
</span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-3xl" data-aos='fade-right'>
            Bagian ini memperkenalkan para anggota yang terlibat dalam proses
            penciptaan karya “Topeng Sosial”. Setiap individu memiliki peran
            yang mendukung terbentuknya karya, mulai dari konsep, teknik,
            dokumentasi, hingga penyusunan pameran.
          </p>
        </div>

        {/* Foto kelompok (landscape) */}
        <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-md relative group" data-aos="zoom-in">
          <img
            src={fotoBersama}
            alt="Foto kelompok Topeng Sosial"
            className="w-full h-[250px] md:h-[500px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/100 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-4 left-4 text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-300">
              Dokumentasi Kelompok
            </p>
            <p className="text-sm font-light">
              Para anggota dengan karya “Topeng Sosial”
            </p>
          </div>
        </div>

        {/* Grid anggota */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {members.map((m, index) => (
            <div
              data-aos="zoom-in"
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={m.photo}
                alt={m.name}
                className="w-full h-70 object-cover"
              />
              <div className="p-4 text-center space-y-1">
                <p className="text-lg font-medium text-white">{m.name}</p>
                <p className="inline-flex gap-1 items-center justify-center"><RiInstagramFill/> {m.instagram} </p>
                <p className="text-sm text-gray-300">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profil;
