    import React, { useEffect, useState } from "react";
    import { supabase } from "../supabaseClient";
    import { AiFillStar, AiOutlineStar } from "react-icons/ai";

    const Masukan = () => {
    const [nama, setNama] = useState("");
    const [pesan, setPesan] = useState("");
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [komentar, setKomentar] = useState([]);
    const [loadingKirim, setLoadingKirim] = useState(false);
    const [loadingKomentar, setLoadingKomentar] = useState(true);

    const fetchComments = async () => {
        setLoadingKomentar(true);
        const { data, error } = await supabase
        .from("coments")
        .select("*")
        .order("id", { ascending: false });

        if (error) {
        console.error("Gagal ambil komentar:", error);
        } else {
        setKomentar(data || []);
        }
        setLoadingKomentar(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!pesan.trim() || rating === 0) return;

        setLoadingKirim(true);

        const payload = {
        name: nama.trim() || "Anonim",
        message: pesan.trim(),
        rating: Number(rating),
        };

        const { data, error } = await supabase
        .from("coments")
        .insert(payload)
        .select()
        .single();

        if (error) {
        console.error("Gagal kirim komentar:", error);
        } else if (data) {
        setKomentar((prev) => [data, ...prev]);
        setNama("");
        setPesan("");
        setRating(0);
        setHoverRating(0);
        }

        setLoadingKirim(false);
    };

    const formatDate = (iso) => {
        try {
        return new Date(iso).toLocaleString("id-ID", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
        } catch {
        return "";
        }
    };

    const averageRating =
        komentar.length > 0
        ? komentar.reduce((sum, k) => sum + (k.rating || 0), 0) / komentar.length
        : 0;

    useEffect(() => {
        fetchComments();

        const channel = supabase
        .channel("realtime:coments")
        .on(
            "postgres_changes",
            { event: "INSERT", schema: "public", table: "coments" },
            (payload) => {
            setKomentar((prev) => [payload.new, ...prev]);
            }
        )
        .subscribe();

        return () => {
        supabase.removeChannel(channel);
        };
    }, []);

    return (
        <section
        id="Masukan"
        className="w-full min-h-screen text-white px-6 py-20 md:py-28 bg-linear-to-b from-gray-950 via-black to-gray-950"
        >
        <div className="max-w-5xl mx-auto space-y-10">
            {/* Header */}
            <div className="space-y-3">
            <p className="text-xs tracking-[0.25em] uppercase text-gray-400" data-aos="fade-right">
                Masukan
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-wide" data-aos="fade-right">
                Masukan{" "}
                <span className="text-gray-300">& Kesan Pengunjung</span>
            </h2>
            <p className="text-sm md:text-base text-gray-300 max-w-3xl" data-aos="fade-right">
                Tinggalkan kesan atau komentar setelah melihat karya “Topeng Sosial”.
                Masukan kalian akan disimpan di komentar web ini dan bisa dibaca dari mana saja.
            </p>
            </div>

            {/* Form */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 space-y-5" data-aos="fade-up">
            <h3 className="text-lg md:text-xl font-semibold text-gray-100">
                Tulis Masukanmu
            </h3>

            {/* Rating */}
            <div className="space-y-1">
                <p className="text-sm text-gray-300">Beri penilaian:</p>
                <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((b) => {
                    const active = hoverRating || rating;
                    const isActive = b <= active;
                    return (
                    <button
                        key={b}
                        type="button"
                        onClick={() => setRating(b)}
                        onMouseEnter={() => setHoverRating(b)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="text-2xl md:text-3xl"
                    >
                        {isActive ? (
                        <AiFillStar className="text-yellow-400 drop-shadow" />
                        ) : (
                        <AiOutlineStar className="text-gray-500" />
                        )}
                    </button>
                    );
                })}
                {rating > 0 && (
                    <span className="ml-2 text-xs text-gray-300">
                    {rating} / 5
                    </span>
                )}
                </div>
                <p className="text-[11px] text-gray-400">
                Klik bintang untuk memberi penilaian.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Nama (opsional)
                    </label>
                    <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="w-full bg-black/30 border border-white/15 rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40"
                    placeholder="Tulis namamu atau biarkan kosong"
                    />
                </div>
                </div>

                <div className="space-y-1">
                <label className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Pesan / Kesan
                </label>
                <textarea
                    value={pesan}
                    onChange={(e) => setPesan(e.target.value)}
                    rows={4}
                    className="w-full bg-black/30 border border-white/15 rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40 resize-none"
                    placeholder="Apa yang kamu rasakan setelah melihat karya ini?"
                />
                </div>

                <div className="flex items-center justify-between gap-3 flex-wrap">
                <button
                    type="submit"
                    disabled={!pesan.trim() || rating === 0 || loadingKirim}
                    className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-sm text-white hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                    {loadingKirim ? "Mengirim…" : "Kirim Masukan"}
                </button>
                </div>
            </form>
            </div>

            <div className="flex items-center gap-3" data-aos="fade-right">
            <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((b) => {
                const isActive = b <= Math.round(averageRating);
                return (
                    <span key={b} className="text-xl">
                    {isActive ? (
                        <AiFillStar className="text-yellow-400" />
                    ) : (
                        <AiOutlineStar className="text-gray-600" />
                    )}
                    </span>
                );
                })}
            </div>
            <p className="text-sm text-gray-300" data-aos="fade-right">
                {komentar.length > 0 ? (
                <>
                    Rata-rata:{" "}
                    <span className="font-medium">
                    {averageRating.toFixed(1)} / 5
                    </span>{" "}
                    dari {komentar.length} masukan.
                </>
                ) : (
                "Belum ada masukan. Jadilah yang pertama!"
                )}
            </p>
            </div>

            {/* List komentar */}
            <div className="space-y-4">
            {loadingKomentar ? (
                <p className="text-sm text-gray-500">Memuat komentar…</p>
            ) : komentar.length === 0 ? (
                <p className="text-sm text-gray-500">
                Belum ada komentar yang tampil di sini.
                </p>
            ) : (
                komentar.map((k) => (
                <div
                    data-aos="fade-right"
                    key={k.id}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 space-y-2"
                >
                    <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium text-gray-100">
                        {k.name || "Anonim"}
                    </p>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                        {formatDate(k.created_at)}
                    </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                    {[1, 2, 3, 4, 5].map((b) => (
                        <span key={b} className="text-xs">
                        {b <= (k.rating || 0) ? (
                            <AiFillStar className="text-yellow-400" />
                        ) : (
                            <AiOutlineStar className="text-gray-600" />
                        )}
                        </span>
                    ))}
                    </div>
                    <p className="text-sm text-gray-200 leading-relaxed">
                    {k.message}
                    </p>
                </div>
                ))
            )}
            </div>
        </div>
        </section>
    );
    };

    export default Masukan;
