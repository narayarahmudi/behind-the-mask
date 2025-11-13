import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black/90 text-white border-t border-white/10">
      {/* Garis tipis accent */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-10 md:py-12 grid md:grid-cols-3 gap-8">
        {/* Brand / deskripsi */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold tracking-wide">
            Behind The Mask
          </h3>
          <p className="text-[13px] leading-relaxed text-gray-400">
            Sebuah pameran yang mencoba melihat lebih pelan
            bukan hanya wajah yang kita tunjukkan ke dunia,
            tapi juga apa yang kita simpan diam-diam di baliknya.
          </p>
        </div>

        {/* Navigasi */}
        <div className="space-y-3">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-400">
            Navigasi
          </h4>
          <ul className="flex flex-wrap gap-2 text-[13px] text-gray-400">
            {[
              "Beranda",
              "Konsep",
              "Galeri",
              "Teknis",
              "Profil",
              "Proses",
              "Video",
              "Refleksi",
              "Masukan",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="px-2.5 py-1 rounded-full bg-white/0 hover:bg-white/5 hover:text-gray-100 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
        <div className="space-y-3">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-400">
            Kontak
          </h4>
          <ul className="space-y-2 text-[13px] text-gray-400">
            <li>
              <span className="block text-[11px] text-gray-500 mb-0.5">
                Email
              </span>
              <a
                href="mailto:naraya.developer.js@gmail.com"
                className="hover:text-gray-100 transition-colors"
              >
                naraya.developer.js@gmail.com
              </a>
            </li>
            <li>
              <span className="block text-[11px] text-gray-500 mb-0.5">
                Lokasi
              </span>
              <p className="text-gray-400">SMA Negeri 43 Jakarta</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 pb-6 text-center text-[11px] text-gray-500">
        <p>
          © {new Date().getFullYear()} Behind The Mask Pameran Karya Seni.
        </p>
        <p className="mt-1 text-gray-600">
          Web Ini Dibuat oleh Kelas XII - C Kelompok Behind The Mask. Dava Naraya Rahmudi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
