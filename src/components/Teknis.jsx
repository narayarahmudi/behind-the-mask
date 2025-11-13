import React from "react";
import { RiBrushAiFill } from "react-icons/ri";


const Teknis = () => {
  return (
    <section
      id="Teknis"
      className="w-full min-h-screen text-white px-6 py-20 md:py-28 bg-linear-to-b from-gray-950 via-black to-gray-950"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-400" data-aos='fade-right'>
            Teknis
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide" data-aos='fade-right'>
            Detail Teknis{" "}
            <span className="inline-flex items-center gap-2 text-gray-300">Karya “Behind The Mask” <RiBrushAiFill />
</span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl" data-aos='fade-right'>
            Bagian ini menjelaskan medium, teknik, dan pendekatan visual yang
            digunakan dalam penggarapan karya. Tujuannya adalah memberi gambaran
            bagaimana konsep “Topeng Sosial” diterjemahkan secara teknis di
            atas kanvas.
          </p>
        </div>

        {/* Grid info */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Media & Permukaan */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3" data-aos="zoom-in">
            <h3 className="text-lg font-semibold text-gray-100">
              Media & Permukaan ( Mix Media )
            </h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>
                <span className="text-gray-400">Media utama:</span>{" "}
                cat akrilik dan topeng
              </li>
              <li>
                <span className="text-gray-400">Permukaan:</span>{" "}
                kanvas (canvas)
              </li>
              <li>
                <span className="text-gray-400">Ukuran kanvas:</span>{" "}
                50 × 60 cm
              </li>
            </ul>
          </div>

          {/* Teknik Lukis */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3" data-aos="zoom-in">
            <h3 className="text-lg font-semibold text-gray-100 " >
              Teknik Lukis
            </h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>
                <span className="text-gray-400">Layering:</span> pewarnaan
                berlapis untuk membangun kedalaman dan dimensi emosi.
              </li>
              <li>
                <span className="text-gray-400">Impasto ringan:</span> cat
                yang agak tebal di beberapa titik untuk menonjolkan tekstur
                tertentu, terutama di garis-garis topeng.
              </li>
            </ul>
          </div>

          {/* Alat & Pendukung */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3" data-aos="zoom-in">
            <h3 className="text-lg font-semibold text-gray-100">
              Alat & Pendukung
            </h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li> Berbagai ukuran kuas (flat, round, detail). </li>
              <li> Palet sebagai wadah cat akrilik. </li>
              <li> Pensil untuk sketsa awal komposisi. </li>
              <li>  </li>
            </ul>
          </div>
        </div>

        {/* Palet warna & rasa */}
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3" data-aos="zoom-in">
            <h3 className="text-lg font-semibold text-gray-100">
              Palet Warna
            </h3>
            <p className="text-sm text-gray-300">
              Palet warna karya ini didominasi oleh biru gelap yang menghadirkan suasana emosional yang sunyi dan mendalam, mencerminkan ruang batin yang sering disembunyikan. Merah gelap pada bagian pakaian menambah kesan intens dan berat, seolah menjadi simbol tekanan yang terus membebani figur dalam karya. Sementara itu, warna kulit dijadikan fokus utama pada area wajah, agar ekspresi dan kerentanan manusia yang ingin ditonjolkan terlihat jelas. Perpaduan warna-warna ini menciptakan kontras kuat yang menekankan perbedaan antara ketenangan yang tampak di permukaan dan pergulatan emosional yang tersembunyi di balik “Topeng Sosial".
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3 " data-aos="zoom-in">
            <h3 className="text-lg font-semibold text-gray-100">
              Pendekatan Visual
            </h3>
            <p className="text-sm text-gray-300">
              Dalam karya ini, pendekatan visual dibangun melalui perpaduan antara medium nyata dan lukisan dua dimensi. Topeng tidak digambar, tetapi menggunakan topeng fisik yang ditempelkan langsung ke permukaan kanvas. Kehadiran objek asli ini menciptakan lapisan visual yang lebih kuat dan terasa nyata, seolah topeng tersebut benar-benar menutupi identitas figur di dalam karya.

                Sementara itu, bagian wajah dilukis dengan detail yang lebih halus menggunakan akrilik, menekankan ekspresi dan nuansa emosional yang ingin ditampilkan. Perbedaan antara objek topeng yang kaku dan datar dengan wajah yang dilukis secara lembut dan hidup menegaskan dualitas yang menjadi tema utama: apa yang diperlihatkan kepada dunia dan apa yang sebenarnya dirasakan di dalam.

                Pendekatan ini membuat topeng tampak seperti elemen yang “menghalangi” atau “menutupi” kehidupan di baliknya, sekaligus memperkuat pesan bahwa topeng sosial sering kali lebih terlihat daripada wajah asli seseorang.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teknis;
