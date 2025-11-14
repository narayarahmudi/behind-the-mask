import React from "react";
import { RiVideoFill } from "react-icons/ri";
import video from "../assets/narasi.mp4"


const Video = () => {
  const videoSrc = "../assets/narasi.mp4";

  return (
    <section
      id="Video"
      className="w-full min-h-screen text-white px-6 py-20 md:py-28 bg-linear-to-b from-gray-950 via-black to-gray-950"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-400" data-aos='fade-right'>
            Video
          </p>
          <h2 data-aos='fade-right' className="text-3xl md:text-4xl font-semibold tracking-wide">
            Video{" "}
            <span className="inline-flex items-center gap-1 text-gray-300">Proses & Narasi Karya <RiVideoFill />
</span>
          </h2>
        </div>

        {/* Video player */}
        <div
          className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black flex items-center justify-center"
          data-aos="zoom-in"
        >
          <video
            src={video}
            controls
            className="h-full object-contain w-auto custom-video"
          >
            Browser kamu tidak mendukung pemutar video HTML5.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Video;
