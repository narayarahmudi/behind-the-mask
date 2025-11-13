import React from "react";
import useReveal from "../hooks/useReveal";
import {} from "react-icons/hi";
import { RiInstagramLine, RiFlashlightFill } from "react-icons/ri";

const Konsep = () => {
  useReveal()

  return (
    <section
      id="Konsep"
      className="w-full min-h-screen text-white flex items-center justify-center px-6 py-20 md:py-28 bg-linear-to-b from-gray-950 via-black to-gray-950"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Judul */}
        <div className="space-y-2 reveal">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-400">
            <span>KONSEP</span>
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
            Gagasan Utama{" "}
            <span className="inline-flex items-center gap-1 text-gray-300">
              Topeng Sosial <RiFlashlightFill />
            </span>
          </h2>

        </div>

        {/* Paragraf */}
        <p className="text-sm md:text-base leading-relaxed text-gray-300 reveal">
          “Topeng Sosial” berangkat dari pengamatan terhadap perilaku manusia di
          kehidupan modern. Setiap individu hidup dengan dua wajah, wajah yang
          ditunjukkan kepada dunia, dan wajah yang disimpan rapat di balik
          batas-batas pribadi. Dalam banyak situasi, topeng digunakan bukan
          sebagai alat penipuan, tetapi sebagai bentuk perlindungan diri dari
          penilaian, ekspektasi, dan tekanan lingkungan.
        </p>

        <p className="text-sm md:text-base leading-relaxed text-gray-300 reveal">
          Di permukaan, seseorang mungkin tampak bahagia, stabil, dan kuat. Namun
          di balik ekspresi itu sering terselip emosi yang lebih pekat kecemasan,
          kelelahan, atau kesedihan yang tidak pernah terucapkan. Fenomena ini
          menciptakan jarak antara apa yang terlihat dan apa yang sebenarnya
          dirasakan, menjadikan topeng sebagai simbol dari pergulatan batin yang
          senyap.
        </p>

        <p className="text-sm md:text-base leading-relaxed text-gray-300 reveal">
          Secara visual, konsep ini diterjemahkan melalui pertemuan antara elemen tiga dimensi dan lukisan dua dimensi. Topeng tidak dilukis, melainkan menggunakan topeng fisik yang ditempel langsung pada kanvas, sehingga tampil sebagai objek nyata yang benar-benar menutupi sebagian wajah. Kehadiran topeng asli menghadirkan kesan kaku, datar, dan tidak beremosi melambangkan citra diri yang ingin ditampilkan ke dunia.

Sementara itu, wajah di balik topeng dilukis dengan detail warna kulit, pencahayaan, dan gradasi yang lebih lembut, untuk menonjolkan ekspresi dan kerentanan manusia yang tidak terlihat. Perbedaan antara objek topeng yang solid dan wajah yang hidup secara visual memperkuat gagasan bahwa apa yang tampak dari luar sering kali hanyalah lapisan permukaan, sementara emosi yang sesungguhnya justru berada di baliknya.
        </p>

        {/* Kutipan */}
        <div className="border-l border-gray-600 pl-4 mt-4 reveal-r">
          <p data-aos="fade-right" className="italic text-sm md:text-base text-gray-200">
            “Senyum dapat dipoles, tetapi luka batin tidak selalu memiliki
            ruang untuk ditampilkan.”
          </p>
        </div>

        <p className="text-sm md:text-base leading-relaxed text-gray-300 reveal">
          Melalui pendekatan ini, karya “Topeng Sosial” memperlihatkan bagaimana
          identitas dapat terbentuk dari dua sisi yang saling bertentangan
          kebutuhan untuk tampil baik di hadapan orang lain, dan kebutuhan untuk
          jujur terhadap dirinya sendiri. Pameran ini mengundang penonton untuk
          melihat lebih dalam, mengamati apa yang biasanya tidak diperlihatkan,
          dan memahami bahwa tiap topeng menyimpan cerita yang jauh lebih rumit
          daripada tampilannya.
        </p>
      </div>
    </section>
  );
};

export default Konsep;
