"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

// NOTE: Tshechu dates follow the Bhutanese lunar calendar and shift every
// Gregorian year. Update `startDate`/`endDate` each year (check DoT / Bhutan calendar).
const thimphuTshechu = {
    id: "thimphu",
    name: "Thimphu Tshechu",
    dzongkhag: "Thimphu",
    venue: "Tashichho Dzong",
    date: "24 – 26 Sep 2026",
    startDate: "2026-09-24",
    endDate: "2026-09-26",
    month: "September",
    popular: true,
    status: true, // true = show, false = hide
    fullDescription: `Thimphu Tshechu is Bhutan's largest and most widely attended festival, held every autumn in the courtyard of Tashichho Dzong in the capital city. It was established in 1670 by Gyalse Tenzin Rabgye, the 4th Desi (temporal ruler) of Bhutan, to honor Guru Rinpoche (Padmasambhava), the Buddhist master credited with bringing Tantric Buddhism to Bhutan in the 8th century.

The festival unfolds over three days on the tenth day of the eighth lunar month, typically falling in late September or early October. Each day is filled with elaborate Cham (mask) dances performed by monks and trained laymen dressed in ornate costumes and hand-carved wooden masks. The dances re-enact stories from Buddhist mythology and the life of Guru Rinpoche, portraying the triumph of good over evil and offering blessings to everyone who witnesses them.

Highlights include the Shanag Cham (Black Hat Dance), performed to subdue evil spirits and purify the festival grounds, and the Dance of the Judgment of the Dead, which dramatizes the Buddhist concept of karma and the afterlife. On the final day, thousands gather before dawn for the unfurling of a giant sacred thongdrel (appliqued religious tapestry) — simply viewing it is believed to cleanse sins and bestow blessings.

For the Bhutanese, attending Thimphu Tshechu is both a religious duty and a joyous social occasion. Families dress in their finest gho and kira, travel from across the country, and gather to socialize, receive blessings, and take part in what is considered one of the best living demonstrations of Bhutan's culture and spiritual tradition. For visitors, it offers a rare, unfiltered window into Bhutanese life — vivid colors, ancient ritual, and a genuinely festive atmosphere set against the backdrop of the Himalayas.`,
    videos: [
        { id: "ofQxyPYVPBc", label: "Festival Highlights" },
        { id: "BklZont6Vpc", label: "Thimphu Tshechu 2025" },
        { id: "iVmOljs_GK0", label: "Experiencing the Magic" },
        { id: "GtVWPDDCwx8", label: "A Traveler's View" },
        { id: "XrMoSFJqctc", label: "Glimpses 2022" },
        { id: "IFJAsDyixXQ", label: "Mask Dances (AFP)" },
    ],
};

function getIsLive(startDate: string, endDate: string) {
    const now = new Date();
    const start = new Date(startDate + "T00:00:00");
    const end = new Date(endDate + "T23:59:59");
    return now >= start && now <= end;
}

function getYouTubeEmbedUrl(id: string, autoplay: boolean) {
    const params = new URLSearchParams({
        autoplay: autoplay ? "1" : "0",
        mute: "1",
        loop: "1",
        playlist: id,
        controls: "0",
        modestbranding: "1",
        playsinline: "1",
        rel: "0",
    });
    return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}

function getYouTubeThumbnail(id: string) {
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

// Hero media: thumbnail/video for the currently selected gallery clip
function HeroMedia({
    posterVideoId,
    isLive,
    name,
}: {
    posterVideoId: string;
    isLive: boolean;
    name: string;
}) {
    const [hovered, setHovered] = useState(false);
    const [tapped, setTapped] = useState(false);
    const showVideo = isLive || hovered || tapped;

    const handleTap = () => {
        if (!isLive) setTapped((prev) => !prev);
    };

    return (
        <div
            className="relative w-full h-64 sm:h-72 bg-gray-100 overflow-hidden rounded-t-2xl"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleTap}
            role={!isLive ? "button" : undefined}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={getYouTubeThumbnail(posterVideoId)}
                alt={name}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out ${hovered ? "scale-110" : "scale-100"
                    } ${showVideo ? "opacity-0" : "opacity-100"}`}
            />

            {!showVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white ml-0.5" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </span>
                </div>
            )}

            <div
                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${showVideo ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            >
                {showVideo && (
                    <iframe
                        src={getYouTubeEmbedUrl(posterVideoId, true)}
                        title={name}
                        className="w-full h-full scale-[1.6] object-cover"
                        allow="autoplay; encrypted-media"
                        allowFullScreen={false}
                        frameBorder={0}
                    />
                )}
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>
    );
}

// A single tile in the video gallery grid — click to load into the hero player
function GalleryTile({
    video,
    isActive,
    onSelect,
}: {
    video: { id: string; label: string };
    isActive: boolean;
    onSelect: () => void;
}) {
    return (
        <button
            onClick={onSelect}
            className={`group relative rounded-xl overflow-hidden bg-gray-100 aspect-video transition-all duration-300 ${isActive ? "ring-2 ring-blue-500" : "hover:ring-2 hover:ring-blue-300"
                }`}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={getYouTubeThumbnail(video.id)}
                alt={video.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-white ml-0.5" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </span>
            </div>
            <span className="absolute bottom-1.5 left-1.5 right-1.5 text-[11px] font-medium text-white truncate text-left drop-shadow">
                {video.label}
            </span>
        </button>
    );
}

export default function ThimphuTshechu() {
    const event = thimphuTshechu;
    const isLive = getIsLive(event.startDate, event.endDate);
    const [activeVideo, setActiveVideo] = useState(event.videos[0]);
    const [expanded, setExpanded] = useState(false);
    const playerRef = useRef<HTMLDivElement>(null);

    if (!event.status) return null;

    const paragraphs = event.fullDescription.trim().split("\n\n");

    return (
        <section className="max-w-6xl mx-auto px-4 py-10 rounded-3xl shadow-lg relative overflow-hidden my-5">
            <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-blue-50 p-5 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <span className="mb-1 inline-flex animate-pulse items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-600 shadow-sm">
                            <span className="h-2 w-2 animate-ping rounded-full bg-red-600"></span>
                            🎉 Upcoming Event
                        </span>

                        <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
                            {event.name}
                        </h1>

                        <p className="mt-1 text-sm font-medium text-gray-600">
                            Limited seats available! Don&apos;t miss out — book your place now.
                        </p>
                    </div>

                    <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-red-700 hover:shadow-lg" onClick={() => window.open("https://www.indrukatours.com/support")}>
                        Book Now
                    </button>
                </div>
            </div>


            <motion.article
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`relative rounded-2xl border bg-white shadow-sm overflow-hidden ${isLive ? "border-red-400 ring-2 ring-red-300/50" : "border-blue-200/60"
                    }`}
            >
                {/* Badges */}
                <div className="absolute top-3 left-3 right-3 z-10 flex items-start justify-between">
                    {isLive ? (
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: [1, 1.06, 1] }}
                            transition={{ scale: { duration: 1.4, repeat: Infinity, ease: "easeInOut" } }}
                            className="flex items-center gap-1.5 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            LIVE NOW
                        </motion.span>
                    ) : (
                        <span />
                    )}
                    {event.popular && (
                        <span className="bg-blue-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow">
                            Popular
                        </span>
                    )}
                </div>

                {/* Hero media — plays the currently selected gallery video */}
                <div ref={playerRef}>
                    <HeroMedia posterVideoId={activeVideo.id} isLive={isLive} name={event.name} />
                </div>

                <div className="p-6 flex flex-col gap-5">
                    <div>
                        <h1 className="text-2xl font-extrabold text-gray-900">{event.name}</h1>
                        <p className="text-sm text-blue-600 font-medium mt-1">
                            {event.venue}, {event.dzongkhag}
                        </p>
                    </div>

                    <div className="flex items-center justify-between border-y border-gray-100 py-3">
                        <span className="text-sm font-semibold text-gray-800">{event.date}</span>
                        <span className="text-xs uppercase tracking-wide text-gray-400">
                            {event.month}
                        </span>
                    </div>

                    {/* Full description */}
                    <div className="text-sm text-gray-600 leading-relaxed space-y-4">
                        {(expanded ? paragraphs : paragraphs.slice(0, 1)).map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>

                    {paragraphs.length > 1 && (
                        <button
                            onClick={() => setExpanded((prev) => !prev)}
                            className="self-start text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                        >
                            {expanded ? "Show less ↑" : "Read full description ↓"}
                        </button>
                    )}

                    {/* Video gallery */}
                    <div>
                        <h2 className="text-sm font-bold text-gray-900 mb-3">
                            More videos of Thimphu Tshechu
                        </h2>
                        <div className="grid grid-cols-3 gap-3">
                            {event.videos.map((video) => (
                                <GalleryTile
                                    key={video.id}
                                    video={video}
                                    isActive={activeVideo.id === video.id}
                                    onSelect={() => {
                                        setActiveVideo(video);
                                        playerRef.current?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.article>
        </section>
    );
}