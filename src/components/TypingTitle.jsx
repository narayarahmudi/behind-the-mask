import React, { useState, useEffect } from "react";

const TypingTitle = () => {
  const words = ["Topeng Sosial", "Behind The Mask", "Duality of Emotion"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    
    const typeSpeed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      setText(prev => {
        if (!isDeleting) {
          // Mengetik
          const next = current.slice(0, prev.length + 1);
          if (next === current) {
            setTimeout(() => setIsDeleting(true), 1000); // Delay sebelum hapus
          }
          return next;
        } else {
          // Menghapus
          const next = current.slice(0, prev.length - 1);
          if (next === "") {
            setIsDeleting(false);
            setWordIndex((wordIndex + 1) % words.length);
          }
          return next;
        }
      });
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
      {text}
      <span className="border-r-2 border-white ml-1 animate-pulse"></span>
    </h1>
  );
};

export default TypingTitle;
