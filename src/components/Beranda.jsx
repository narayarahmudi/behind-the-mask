import React from "react";
import TypingTitle from "./TypingTitle";
import mainArt from "../assets/main-paintings.png";

const Beranda = () => {
  return (
    <section
      id="Beranda"
      className="
        w-full min-h-screen text-white
        px-6 py-24 md:py-32
        bg-gradient-to-b from-gray-950 via-black to-gray-950
        flex items-center
      "
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Teks – di HP di atas, di desktop di kiri */}
        <div className="space-y-5 order-1">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-400">
            Pameran Lukisan
          </p>

          <TypingTitle />

          <p
            data-aos="fade-right"
            className="text-sm md:text-base text-gray-300 leading-relaxed"
          >
            <span className="font-medium text-gray-100">
              Topeng Sosial adalah sebuah perjalanan visual
            </span>{" "}
            tentang manusia yang hidup dengan dua wajah: yang terlihat dan
            yang disembunyikan. Di permukaan, kita tampak baik-baik saja—ramah,
            ceria, mandiri—namun di balik itu ada kegelisahan yang diam-diam
            tumbuh: luka, lelah, cemas, dan rapuh.
          </p>

          <p
            data-aos="fade-right"
            className="text-sm md:text-base text-gray-300 leading-relaxed"
          >
            Pameran ini mengajak pengunjung melihat ruang yang biasanya tidak
            kita buka untuk orang lain: ruang di balik topeng.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              data-aos="zoom-in"
              href="#Konsep"
              className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition-colors"
            >
              Jelajahi Konsep
            </a>
            <a
              data-aos="zoom-in"
              href="#Galeri"
              className="px-5 py-2.5 rounded-full border border-white/15 text-sm text-gray-200 hover:bg-white/5 transition-colors"
            >
              Lihat Dokumentasi
            </a>
          </div>
        </div>

        {/* Foto – di HP di bawah, di desktop di kanan */}
        <div className="order-2 md:order-2">
          <div
            data-aos="fade-left"
            className="relative group"
          >
            {/* Glow belakang (gradient premium) */}
            <div
              className="
                pointer-events-none
                absolute -inset-6
                bg-gradient-to-br from-cyan-500/40 via-fuchsia-500/10 to-indigo-500/40
                opacity-50 group-hover:opacity-90
                blur-3xl
                transition-opacity duration-700
              "
            />

            {/* Kartu utama (glassmorphism) */}
            <div
              className="
                relative
                rounded-3xl overflow-hidden
                border border-white/15
                bg-white/5
                backdrop-blur-2xl
                shadow-2xl shadow-black/70
              "
            >
              <img
                src={mainArt}
                alt="Ilustrasi tema Topeng Sosial"
                className="
                  w-full h-[260px] md:h-[380px]
                  object-cover object-center

                  brightness-[1.18]
                  contrast-[1.25]
                  saturate-[1.2]

                  transition-transform transition-filter duration-700
                  group-hover:scale-[1.03]
                  group-hover:brightness-[1.22]
                  group-hover:saturate-[1.35]
                "
              />

              {/* overlay cinematic */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent mix-blend-multiply" />

              {/* frame halus */}
              <div className="absolute inset-0 ring-1 ring-white/15 rounded-3xl pointer-events-none" />

              {/* badge kecil pojok kanan atas */}
              <div className="absolute top-4 right-4">
                <span className="rounded-full bg-black/60 border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-gray-200/90">
                  Mix Media • Acrylic
                </span>
              </div>

              {/* caption bawah */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1">
                <p className="uppercase tracking-[0.2em] text-[11px] text-gray-300">
                  Topeng Sosial
                </p>
                <p className="text-[11px] md:text-xs text-gray-200/90 max-w-xs">
                  Figur yang tampak kuat di depan, namun menyimpan kerentanan di balik topengnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beranda;
