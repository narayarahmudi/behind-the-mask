import React, { useState, useEffect } from "react";
import { HiOutlineX} from "react-icons/hi";
import { RiBookOpenLine } from "react-icons/ri";


const Gallery = () => {
  // Data gambar: 1 full + beberapa detail
  const images = [
    {
      src: "",
      label: "Karya Utama Tampilan penuh lukisan “Topeng Sosial”",
    },
    {
      src: "",
      label: "Detail Wajah Fokus pada ekspresi dan warna kulit",
    },
    {
      src: "",
      label: "Detail Topeng. Bagian topeng sebagai simbol penutup diri",
    },
    {
      src: "",
      label: "Detail Pakaian. Elemen pakaian dengan warna merah gelap",
    },
    {
      src: "",
      label: "Detail Ranting. Elemen Sekitar Simbol beban dan kerumitan",
    },
    {
      src: "",
      label: "Detail Latar Background Suasana biru gelap yang melingkupi figur",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null); // null = popup tertutup

  const openPreview = (index) => {
    setActiveIndex(index);
  };

  const closePreview = () => {
    setActiveIndex(null);
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const showPrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        showNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        showPrev();
      } else if (e.key === "Escape") {
        e.preventDefault();
        closePreview();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  const mainImage = images[0];
  const detailImages = images.slice(1);

  return (
    <section
      id="Galeri"
      className="w-full min-h-screen text-white px-6 py-20 md:py-28 bg-linear-to-b from-gray-950 via-black to-gray-950"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <p data-aos="fade-right" className="text-xs tracking-[0.25em] uppercase text-gray-400">
            Galeri
          </p>
          <h2 data-aos="fade-right" className="text-3xl md:text-4xl font-semibold tracking-wide">
            Dokumentasi{" "}
            <span className="inline-flex items-center gap-1 text-gray-300">
              Karya & Detail Lukisan <RiBookOpenLine />
            </span>
          </h2>
          <p data-aos="fade-right" className="text-sm md:text-base text-gray-300 max-w-2xl">
            Galeri ini menampilkan karya utama “Topeng Sosial” dan detail
            bagian-bagiannya. Klik gambar untuk melihat lebih dekat, lalu
            gunakan tombol panah di keyboard (← →) untuk berpindah antar
            detail.
          </p>
        </div>

        {/* Main + detail images */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Karya utama (full) */}
          <div
            className="lg:col-span-2 cursor-pointer"
            onClick={() => openPreview(0)}
          >
            <div className="relative group rounded-xl overflow-hidden border border-white/10 " data-aos="zoom-in">
              <img
                src={mainImage.src}
                alt={mainImage.label}
                className="w-full h-[320px] md:h-[380px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-300">
                  Karya Utama
                </p>
                <p className="text-sm md:text-base text-gray-100">
                  Tampilan penuh lukisan “Topeng Sosial” sebagai satu kesatuan
                  narasi visual.
                </p>
              </div>
            </div>
          </div>

          {/* Detail-detail lukisan */}
          <div className="grid grid-cols-2 gap-4">
            {detailImages.map((item, idx) => (
              <div
                data-aos="zoom-in"
                key={idx}
                className="relative group rounded-xl overflow-hidden border border-white/10 cursor-pointer"
                onClick={() => openPreview(idx + 1)} // +1 karena index 0 dipakai mainImage
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-[150px] md:h-[140px] object-cover object-center group-hover:scale-[1.05] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-3 left-3 text-[11px] uppercase tracking-[0.2em] text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* POPUP / LIGHTBOX */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[999]"
          onClick={closePreview}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300"
            onClick={closePreview}
          >
            <HiOutlineX />
          </button>

          {/* Kontainer biar klik di gambar nggak nutup popup */}
          <div
            className="max-w-[90%] max-h-[85%] flex flex-col gap-3 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].label}
              className="max-w-full max-h-[75vh] rounded-xl border border-white/20 shadow-2xl object-contain"
            />
            <p className="text-xs md:text-sm text-gray-200 text-center">
              {images[activeIndex].label}
            </p>
            <p className="text-[10px] md:text-xs text-gray-400 text-center">
              Gunakan tombol panah kiri (←) dan kanan (→) pada keyboard untuk
              berpindah gambar, atau tekan Esc untuk menutup.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
