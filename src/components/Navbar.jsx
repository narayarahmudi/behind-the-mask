import React, { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";

// ====== DATA & KOMPONEN GAME POPUP ======

const gameQuestions = [
  {
    id: 1,
    scenario:
      "Ada teman di kelas yang selalu keliatan rame, suka bercanda, ketawa paling kenceng, dan jarang keliatan sedih.",
    visibleEmotion: "Kelihatan: Ceria, rame, nggak ada beban.",
    hiddenEmotion: "Merasa capek dan nggak pengen nunjukin sisi lemahnya.",
    options: [
      "Dia sebenernya benci sama semua orang.",
      "Dia sebenernya capek tapi nggak mau dianggap lemah.",
      "Dia sebenernya nggak punya masalah sama sekali.",
    ],
    correctIndex: 1,
    explanation:
      "Orang yang paling rame kadang justru lagi nutupin rasa capek atau sedih. Bercanda jadi topeng biar orang lain nggak curiga.",
  },
  {
    id: 2,
    scenario:
      "Ada teman yang selalu dengerin curhatan orang lain, gampang bilang ‘aku gapapa kok’, dan jarang banget cerita balik.",
    visibleEmotion: "Kelihatan: Kuat, sabar, dewasa.",
    hiddenEmotion: "Merasa kesepian dan pengen didengerin juga.",
    options: [
      "Dia sebenernya cuek dan nggak butuh siapa-siapa.",
      "Dia sebenernya kesepian tapi nggak enak kalau curhat.",
      "Dia cuma pengen dianggap pahlawan kelas.",
    ],
    correctIndex: 1,
    explanation:
      "Jadi tempat curhat terus-terusan bisa bikin orang ngerasa sendirian. Topeng ‘kuat’ kadang bikin dia lupa kalau dia juga manusia.",
  },
  {
    id: 3,
    scenario:
      "Ada teman yang nilainya bagus terus, aktif organisasi, dan selalu keliatan siap setiap presentasi.",
    visibleEmotion: "Kelihatan: Percaya diri dan perfeksionis.",
    hiddenEmotion: "Takut gagal dan takut ngecewain orang lain.",
    options: [
      "Dia sebenernya nggak peduli sama nilai.",
      "Dia sebenernya terpaksa, disuruh orang tua.",
      "Dia sebenernya takut banget gagal dan selalu ngerasa harus sempurna.",
    ],
    correctIndex: 2,
    explanation:
      "Tekanan buat selalu ‘sempurna’ bisa jadi topeng juga. Dari luar terlihat kuat dan rapi, padahal di dalamnya penuh takut dan overthinking.",
  },
];

const GamePopup = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = gameQuestions[currentIndex];

  const handleOptionClick = (index) => {
    if (isAnswered) return;

    setSelectedIndex(index);
    setIsAnswered(true);

    if (index === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;

    if (nextIndex < gameQuestions.length) {
      setCurrentIndex(nextIndex);
      setSelectedIndex(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedIndex(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
      onClick={onClose}
    >
      <div
        className="max-w-xl w-full bg-gray-900/90 border border-white/10 rounded-3xl shadow-2xl p-6 md:p-7 text-white relative"
        onClick={(e) => e.stopPropagation()} // biar klik dalam card nggak nutup modal
      >
        {/* Tombol X */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
          aria-label="Tutup game"
        >
          &times;
        </button>

        <header className="mb-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-1">
            mini game
          </p>
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
            Tebak Emosi di <span className="text-gray-300">Balik Topeng</span>
          </h2>
          <p className="mt-2 text-xs md:text-sm text-gray-300">
            Baca situasinya, lihat apa yang <span className="font-medium">terlihat</span>,
            lalu tebak apa yang mungkin dirasain{" "}
            <span className="font-medium">di balik topeng</span>.
          </p>
        </header>

        {isFinished ? (
          <div className="space-y-4 mt-2">
            <div className="p-4 rounded-2xl bg-gray-800/80 border border-gray-700">
              <p className="text-xs text-gray-400 mb-1">Skor kamu</p>
              <p className="text-3xl font-semibold">
                {score} / {gameQuestions.length}
              </p>
              <p className="mt-2 text-xs md:text-sm text-gray-300">
                Ini cuma permainan, bukan tes psikologi.
                Intinya: <span className="font-medium">nggak semua yang kelihatan itu lengkap ceritanya</span>.
                Kadang orang yang keliatan paling kuat justru yang lagi paling butuh ditemenin.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-3 md:justify-between">
              <button
                onClick={handleRestart}
                className="px-4 py-2 rounded-full text-xs md:text-sm font-medium border border-gray-500 hover:border-gray-300 hover:bg-gray-800/70 transition"
              >
                Main lagi
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-full text-xs md:text-sm font-medium bg-white/10 hover:bg-white/20 border border-white/20 transition"
              >
                Tutup
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Progress */}
            <div className="flex items-center justify-between text-[11px] md:text-xs text-gray-400 mb-3">
              <span>
                Soal {currentIndex + 1} / {gameQuestions.length}
              </span>
              <span>Skor: {score}</span>
            </div>

            {/* Isi soal */}
            <div className="space-y-3 mb-4">
              <div className="bg-gray-800/70 rounded-2xl p-3.5 md:p-4 border border-gray-700/80">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-1">
                  situasi
                </p>
                <p className="text-xs md:text-sm text-gray-100 leading-relaxed">
                  {currentQuestion.scenario}
                </p>
              </div>

              <div className="bg-gray-800/60 rounded-2xl p-3 border border-gray-700/60">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-1">
                  yang terlihat
                </p>
                <p className="text-xs md:text-sm text-gray-200">
                  {currentQuestion.visibleEmotion}
                </p>
              </div>
            </div>

            {/* Opsi jawaban */}
            <div className="space-y-2.5 mb-3">
              {currentQuestion.options.map((option, index) => {
                const isCorrect = index === currentQuestion.correctIndex;
                const isSelected = index === selectedIndex;

                let baseClasses =
                  "w-full text-left text-xs md:text-sm rounded-xl border px-3.5 py-2.5 transition cursor-pointer";
                let stateClasses =
                  "border-gray-600/70 bg-gray-800/60 hover:bg-gray-800";

                if (isAnswered) {
                  if (isSelected && isCorrect) {
                    stateClasses =
                      "border-emerald-500/90 bg-emerald-500/10";
                  } else if (isSelected && !isCorrect) {
                    stateClasses =
                      "border-red-500/80 bg-red-500/10";
                  } else if (isCorrect) {
                    stateClasses =
                      "border-emerald-400/80 bg-emerald-500/5";
                  } else {
                    stateClasses =
                      "border-gray-700/80 bg-gray-900/60 text-gray-400";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    className={`${baseClasses} ${stateClasses}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {/* Penjelasan setelah jawab */}
            {isAnswered && (
              <div className="mb-4 text-[11px] md:text-xs text-gray-300 bg-gray-800/70 border border-gray-700 rounded-2xl p-3">
                <p className="font-semibold text-gray-100 mb-1">
                  Di balik topeng:
                </p>
                <p className="mb-1">
                  {currentQuestion.hiddenEmotion}
                </p>
                <p className="text-gray-300">
                  {currentQuestion.explanation}
                </p>
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={isAnswered ? handleNext : undefined}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium border transition
                  ${
                    isAnswered
                      ? "border-white/70 bg-white/10 hover:bg-white/20 cursor-pointer"
                      : "border-gray-500/50 text-gray-400 cursor-not-allowed"
                  }`}
              >
                {currentIndex + 1 === gameQuestions.length ? "Lihat hasil" : "Soal berikutnya"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// ====== NAVBAR ======

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showGame, setShowGame] = useState(false);

  const navbar = [
    "Beranda",
    "Konsep",
    "Galeri",
    "Teknis",
    "Profil",
    "Proses",
    "Video",
    "Refleksi",
  ];

  return (
    <>
      <header
        className="
        fixed top-0 left-0 w-full
        flex justify-between items-center
        px-6 md:px-36 py-4 md:py-5
        text-white font-mont text-sm font-extralight
        z-50
        backdrop-blur-2xl border-b border-white/10
      "
      >
        {/* Logo */}
        <div id="logo" className="font-medium tracking-wide">
          <span>Behind The Mask</span>
        </div>

        {/* Menu list */}
        <ul
          className={`
            flex md:flex-row flex-col
            md:static fixed
            md:inset-auto inset-0
            md:h-auto h-screen
            md:w-auto w-full
            items-center justify-center md:justify-end
            gap-4 md:gap-4
            text-lg md:text-sm

            transition-all duration-300 ease-in-out
            ${
              open
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"
            }

            md:bg-transparent bg-black/80
            md:backdrop-blur-0 backdrop-blur-2xl

            md:z-auto z-40
            pt-24 md:pt-0
          `}
        >
          {navbar.map((value, index) => (
            <li key={index}>
              <a
                href={`#${value}`}
                onClick={() => setOpen(false)}
                className="
                  relative
                  hover:text-white
                  transition-all duration-200
                  after:content-[''] after:absolute after:w-0 after:h-[1px]
                  after:left-0 after:-bottom-1 after:bg-white
                  hover:after:w-full after:transition-all after:duration-300
                "
              >
                {value}
              </a>
            </li>
          ))}

          <li className="mt-6 md:hidden flex flex-col gap-3 w-full px-10">
            <a
              href="#Refleksi"
              onClick={() => setOpen(false)}
            >
              <button className="w-full cursor-pointer bg-white/10 rounded-md text-white py-2 px-4 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-colors duration-200 text-sm">
                Lihat Akhir
              </button>
            </a>

            <button
              onClick={() => {
                setShowGame(true);
                setOpen(false);
              }}
              className="w-full cursor-pointer bg-white/5 rounded-md text-white py-2 px-4 border border-white/25 hover:bg-white/15 transition-colors duration-200 text-sm"
            >
              Main Game
            </button>
          </li>
        </ul>


        {/* Tombol kanan (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#Refleksi">
            <button className="cursor-pointer bg-white/10 rounded-md text-white py-1 px-4 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-colors duration-200">
              Lihat Akhir
            </button>
          </a>

          <button
            onClick={() => setShowGame(true)}
            className="cursor-pointer bg-white/5 rounded-md text-white py-1 px-4 border border-white/25 hover:bg-white/15 transition-colors duration-200 text-xs font-light"
          >
            Main Game
          </button>
        </div>

        {/* Icon menu (mobile) */}
        <button
          id="menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl cursor-pointer relative z-50"
          aria-label="Toggle menu"
        >
          {!open ? <HiMenu /> : <HiOutlineX />}
        </button>
      </header>

      {/* Popup Game */}
      {showGame && <GamePopup onClose={() => setShowGame(false)} />}
    </>
  );
};

export default Navbar;
