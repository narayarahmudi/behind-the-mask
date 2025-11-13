import React from "react";

const Refleksi = () => {
  return (
    <section
      id="Refleksi"
      className="w-full min-h-screen text-white px-6 py-20 md:py-28 bg-linear-to-b from-gray-950 via-black to-gray-950"
    >
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-400" data-aos='fade-right'>
            Refleksi
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide" data-aos='fade-right'>
            Refleksi{" "}
            <span className="text-gray-300">Karya “Topeng Sosial”</span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-3xl" data-aos='fade-right'>
            Bagian ini berisi renungan singkat dari kami sebagai pembuat karya
            apa yang dipelajari, tantangan yang terasa, dan harapan yang ingin
            disampaikan melalui “Topeng Sosial”.
          </p>
        </div>

        {/* Grid refleksi */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Kolom kiri */}
          <div className="space-y-4 bg-white/5 border border-white/10 rounded-xl p-5 md:p-6" data-aos='zoom-in'>
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400">
                Pembelajaran
              </h3>
              <p className="text-sm md:text-base text-gray-200 mt-1">
                Lewat karya ini, kami belajar bahwa kejujuran tidak selalu
                muncul dalam bentuk kata-kata. Terkadang, lapisan warna,
                pilihan ekspresi, dan keberanian mengakui bahwa kita tidak
                selalu baik-baik saja adalah bentuk kejujuran yang paling
                pelan, tapi nyata.
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400">
                Tantangan
              </h3>
              <p className="text-sm md:text-base text-gray-200 mt-1">
                Salah satu tantangan terbesar adalah menyatukan banyak kepala
                dan banyak perasaan ke dalam satu kanvas. Setiap orang punya
                pengalaman dan cara melihat “topeng” yang berbeda, dan proses
                ini mengajarkan kami untuk saling mendengar, berkompromi, dan
                tetap menjaga suara masing-masing.
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400">
                Terima Kasih
              </h3>
              <p className="text-sm md:text-base text-gray-200 mt-1">
                Kami mengucapkan terima kasih kepada guru pembimbing, teman-teman
                satu kelas, dan semua yang menyempatkan diri berhenti sejenak
                di depan karya ini. Kehadiran kalian membuat proses yang
                melelahkan ini terasa lebih berarti.
              </p>
            </div>
          </div>

          {/* Kolom kanan */}
          <div className="space-y-4 bg-white/5 border border-white/10 rounded-xl p-5 md:p-6" data-aos='zoom-in'>
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400">
                Kenangan
              </h3>
              <p className="text-sm md:text-base text-gray-200 mt-1">
                Di balik hasil akhir, ada malam-malam lembur, bercanda di
                tengah rasa capek, cat yang belum kering, dan momen ketika
                semua orang diam melihat kanvas dan merasa, “kayaknya ini mulai
                jadi”. Hal-hal kecil itu yang ingin kami bawa pulang dari
                proses ini.
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400">
                Harapan
              </h3>
              <p className="text-sm md:text-base text-gray-200 mt-1">
                Kami berharap “Topeng Sosial” bisa menjadi ruang aman kecil
                bagi siapa pun yang pernah merasa harus pura-pura kuat. Jika
                karya ini membuat seseorang merasa lebih dimengerti, atau
                sekadar menyadari bahwa tidak apa-apa untuk tidak selalu baik-baik
                saja, itu sudah cukup bagi kami.
              </p>
            </div>

            <div className="border-t border-white/10 pt-4">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-1">
                Pesan Akhir
              </p>
              <p className="text-sm md:text-base italic text-gray-200">
                “Jika topeng memang perlu dipakai, semoga suatu hari nanti
                kita juga menemukan tempat yang cukup aman untuk melepaskannya.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Refleksi;
