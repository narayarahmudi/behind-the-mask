import React from "react";
import p1 from "../assets/proses-1.jpg";
import p2 from "../assets/proses-2.jpg";
import p3 from "../assets/proses-3.jpg";
import p4 from "../assets/proses-4.jpg";
import p5 from "../assets/proses-5.jpg";
import p6 from "../assets/proses-6.png"; 
import p7 from "../assets/proses-8.png";
import p8 from "../assets/topeng.jpg";

import { RiPulseFill } from "react-icons/ri";


const Proses = () => {
  const steps = [
    {
      step: 1,
      title: "Sketsa Awal Komposisi",
      src: p1,
      desc: "Tahap pertama dimulai dengan membuat sketsa dasar untuk menentukan bentuk figur, posisi topeng, dan arah visual karya. Pada tahap ini, garis-garis dibuat ringan dan fleksibel agar komposisi bisa berubah sesuai kebutuhan. Sketsa awal membantu menentukan fokus ekspresi pada wajah, alur cahaya, serta keseimbangan antara elemen utama dan latar belakang sebelum masuk ke tahap pewarnaan.",
    },
    {
      step: 2,
      title: "Pewarnaan Bagian Baju",
      src: p2,
      desc: "Setelah sketsa selesai, tahap berikutnya adalah mengisi warna dasar pada bagian baju. Pada proses ini, warna yang dipilih belum final tujuannya hanya menetapkan nilai awal, arah bayangan, dan bentuk lipatan agar figur mulai terlihat jelas. Pewarnaan dilakukan dengan sapuan lebar dan tipis, tanpa detail, karena keseluruhan suasana warna karya masih bisa berubah di tahap selanjutnya. Langkah ini membantu memisahkan figur dari latar, sebelum keputusan warna utama dibuat.",
    },
    {
      step: 3,
      title: "Pewarnaan Awal Wajah & Penentuan Letak Topeng",
      src: p3,
      desc: "Pada tahap ini, wajah mulai diwarnai menggunakan lapisan dasar untuk membangun volume, arah cahaya, dan struktur ekspresi. Pewarnaan masih dibuat lembut dan tipis cukup untuk menegaskan bentuk pipi, hidung, dan area mata tanpa masuk ke detail. Bersamaan dengan itu, posisi topeng mulai ditentukan, apakah menutupi sebagian wajah, sedikit miring, atau digantungkan di depan figur. Garis bantu dibuat untuk memastikan topeng dan wajah menyatu secara proporsional. Langkah ini penting untuk menetapkan hubungan antara identitas asli dan topeng yang akan menjadi pusat makna karya",
    },
    {
      step: 4,
      title: "Detailing Wajah, Baju, Rambut & Penentuan Warna Latar",
      src: p4,
      desc: "Masuk ke tahap ini, karya mulai diarahkan pada bentuk akhirnya. Wajah dikerjakan lebih rinci gradasi kulit diperhalus, bayangan di sekitar mata diperdalam, dan ekspresi mulai dipertegas agar emosi yang ingin disampaikan terasa lebih nyata. Bagian baju sekaligus diberi detail tambahan seperti lipatan, highlight lembut, dan transisi warna yang membuat tekstur kain tampak hidup. Rambut kemudian digarap untuk membingkai wajah, menggunakan sapuan yang lebih halus di bagian terang dan lebih kasar pada area gelap. Pada saat yang sama, warna latar mulai ditentukan. Meskipun sebelumnya masih terbuka, kini komposisi warna diuji coba untuk menemukan nuansa yang paling mendukung suasana karya apakah lebih gelap, lebih dingin, atau lebih netral. Tahap ini menjadi fondasi penting sebelum karya memasuki sentuhan akhir.",
    },
    {
      step: 5,
      title: "Perataan Latar & Pembentukan Ranting Hitam",
      src: p5,
      desc: "Setelah warna dasar dan arah suasana mulai ditentukan, tahap ini berfokus pada meratakan background agar tampak lebih halus dan menyatu. Sapuan cat diratakan perlahan untuk menghasilkan gradasi yang tenang, tanpa garis-garis keras, sehingga figur terlihat muncul dari kedalaman ruang yang lembut dan gelap. Pada bagian tertentu, ditambahkan elemen ranting berwarna hitam sebagai simbol kerumitan emosi. Ranting dibuat dengan sapuan yang tegas dan tipis, diletakkan secara terarah agar tidak mengganggu fokus wajah tetapi tetap mendukung narasi visual. Kontras antara latar yang lembut dan ranting yang tajam memberi lapisan makna tambahan tentang hal-hal yang tumbuh diam-diam di balik ketenangan.",
    },
    {
      step: 6,
      title: "Memberi Detail dan Memperjelas Pakaian",
      src: p6,
      desc: "Pada tahap ini, bagian pakaian diperjelas dengan menambahkan lipatan, bayangan, dan highlight pada warna merah gelap. Detail-detail tersebut membantu membangun kesan berat, rapuh, dan sedikit sesak, seolah tokoh sedang menanggung beban yang tidak terlihat. Penguatan bentuk dan tekstur pakaian juga membuat tubuh terasa lebih nyata, sehingga kontras antara topeng dan sosok di baliknya menjadi semakin kuat.",
    },
    {
      step: 7,
      title: "Membuat Ulang dan Memperbagus Ranting",
      src: p7,
      desc: "Pada tahap ini, elemen ranting digambar ulang agar bentuknya lebih tegas dan dinamis. Detil halus seperti arah cabang, bayangan tipis, dan tekstur serat ditambahkan untuk memperkuat kesan rumit dan terjal. Ranting yang lebih jelas membantu menonjolkan simbol beban dan keruwetan yang mengelilingi tokoh.",
    },
    {
      step: 8,
      title: "Penempelan Topeng",
      src: p8,
      desc: "Pada tahap ini, topeng badut asli ditempatkan sedikit di samping wajah tokoh dan dipasang menggunakan tali rafia. Penempatan di sisi wajah memberi kesan bahwa topeng adalah identitas kedua yang selalu menyertai tokoh, bukan sesuatu yang sedang dipakai. Elemen tiga dimensi ini memperkuat pesan tentang jarak antara diri yang terlihat dan diri yang sebenarnya.",
    },
  ];

  return (
    <section
      id="Proses"
      className="w-full min-h-screen text-white px-6 py-20 md:py-28 bg-linear-to-b from-gray-950 via-black to-gray-950"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-400" data-aos='fade-right'>
            Proses
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide" data-aos='fade-right'>
            Proses{" "}
            <span className="inline-flex items-center gap-1 text-gray-300">Pengerjaan Lukisan “Topeng Sosial” <RiPulseFill />
</span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-3xl" data-aos='fade-right'>
            Bagian ini menjelaskan tahapan utama dalam pembuatan karya, mulai
            dari gagasan awal hingga finishing. Setiap langkah menunjukkan
            bagaimana ide tentang topeng sosial diterjemahkan perlahan menjadi
            sebuah karya visual.
          </p>
        </div>

        {/* Grid proses */}
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((item) => (
            <div
            data-aos='zoom-in'
            key={item.step}
              className="contrast-125 saturate-125 brightness-110 shadow-2xl shadow-black/50 bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col"
            >
              <div className="w-full h-[300px] md:h-[400px] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 md:p-5 space-y-2">
                <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400">
                  Proses {item.step.toString().padStart(2, "0")}
                </p>
                <h3 className="text-base md:text-lg font-semibold text-gray-100">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proses;
