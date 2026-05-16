"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Stat {
  value: string;
  label: string;
}

interface Review {
  id: number;
  text: string;
  author: string;
  date: string;
  // avatar: string;
  initials: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const stats: Stat[] = [
  { value: "140+", label: "Years of Legacy" },
  { value: "4,000+", label: "Tours" },
  { value: "1M+", label: "Happy Travelers" },
  { value: "50+", label: "Awards" },
];

const reviews: Review[] = [
  {
    id: 1,
    text: "We completed our Chardham Yatra by helicopter on 6th June 2025 as a group of six. Despite initial hiccups and weather challenges, the Indruka Tours team ensured smooth darshan and timely return to Dehradun. A special thanks to Mr. Mandar for ensuring that my husband and I could continue the journey together after completing the first two dhams.",
    author: "Kanan Nanavati",
    date: "June, 2025",
    // avatar: "/avatars/kanan.jpg",
    initials: "KN",
  },
  {
    id: 2,
    text: "It was a pleasure traveling with Indruka Tours again—first Europe, now Vietnam—both trips were fantastic! We loved the hotels, itinerary, food, and especially Tour Manager Dr. Mehak's engaging guidance. Looking forward to more memorable trips with Indruka Tours.",
    author: "Geetha Guruswamy",
    date: "January, 2026",
    // avatar: "/avatars/geetha.jpg",
    initials: "GG",
  },
  {
    id: 3,
    text: "My family and I enjoyed a wonderful Europe holiday with Indruka Tours last Christmas. The entire trip was well-planned, seamless, and truly memorable. We also appreciate the smooth handling of our visa process, which made our journey even easier. We plan to do more such holidays with Indruka Tours in the future.",
    author: "Lawrence Yesudass",
    date: "December, 2025",
    // avatar: "/avatars/lawrence.jpg",
    initials: "LY",
  },
  {
    id: 4,
    text: "Booked a Rajasthan heritage tour for our anniversary and it exceeded every expectation. The accommodations were luxurious, guides were knowledgeable, and the itinerary perfectly balanced sightseeing with leisure. Indruka Tours truly knows how to craft unforgettable journeys.",
    author: "Priya Sharma",
    date: "March, 2026",
    // avatar: "/avatars/priya.jpg",
    initials: "PS",
  },
  {
    id: 5,
    text: "Our group of 15 people went on a Thailand trip organized by Indruka Tours. Everything from flights to hotels to local transfers was perfectly coordinated. The tour manager was exceptional — always available and extremely helpful. Highly recommended!",
    author: "Arjun Mehta",
    date: "February, 2026",
    // avatar: "/avatars/arjun.jpg",
    initials: "AM",
  },
];

// // ─── Stat Card ─────────────────────────────────────────────────────────────────
// function StatItem({ value, label, isLast }: Stat & { isLast: boolean }) {
//   return (
//     <div className="flex items-center gap-0">
//       <div className="flex flex-col items-center px-6 md:px-10 py-4 text-center">
//         <span className="text-4xl md:text-5xl font-extrabold text-blue-600 tracking-tight">
//           {value}
//         </span>
//         <span className="mt-1 text-sm md:text-base text-slate-500 font-medium uppercase tracking-widest">
//           {label}
//         </span>
//       </div>
//       {!isLast && (
//         <div className="h-12 w-px bg-blue-200 shrink-0" aria-hidden="true" />
//       )}
//     </div>
//   );
// }

// ─── Review Card ───────────────────────────────────────────────────────────────
function ReviewCard({ review }: { review: Review }) {
  return (
    <Card className="h-full border border-blue-100 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
      <CardContent className="flex flex-col h-full p-6 md:p-8 gap-5">
        {/* Quote icon */}
        <div className="flex items-center justify-start">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <Quote className="w-5 h-5 text-blue-500 fill-blue-200" />
          </div>
        </div>

        {/* Review text */}
        <p className="text-slate-600 leading-relaxed text-sm md:text-base flex-1 font-['Lora',serif] italic">
          {review.text}
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-blue-100 via-blue-300 to-transparent" />

        {/* Author */}
        <div className="flex items-center gap-3">
          <Avatar className="w-11 h-11 border-2 border-blue-200">
            {/* <AvatarImage src={review.avatar} alt={review.author} /> */}
            <AvatarFallback className="bg-blue-600 text-white text-sm font-bold">
              {review.initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-slate-800 text-sm md:text-base">
              {review.author}
            </p>
            <p className="text-xs text-blue-500 font-medium">{review.date}</p>
          </div>
          {/* Star rating */}
          <div className="ml-auto flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400 fill-yellow-400"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function CustomerReviews() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-white">
      {/* Decorative background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-100/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Heading ── */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 tracking-tight font-['Playfair_Display',serif]">
            Why Customers{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Love Us
            </span>
          </h2>
          <p className="mt-3 text-slate-500 text-base md:text-lg max-w-xl mx-auto">
            Thousands of travelers trust us to craft journeys they&lsquo;ll remember
            forever.
          </p>
        </div>

        {/* ── Stats Bar ──
        <div className="flex flex-wrap justify-center items-center mb-14 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-blue-100 w-fit mx-auto px-2 py-2">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              {...stat}
              isLast={i === stats.length - 1}
            />
          ))}
        </div> */}

        {/* ── Carousel ── */}
        <Carousel
          opts={{ align: "start", loop: true }}
        //   plugins={[plugin.current]}
        //   onMouseEnter={plugin.current.stop}
        //   onMouseLeave={plugin.current.reset}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full p-1">
                  <ReviewCard review={review} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 w-11 h-11 rounded-full border-2 border-blue-200 bg-white text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 shadow-sm" />
            <CarouselNext className="static translate-y-0 w-11 h-11 rounded-full border-2 border-blue-200 bg-white text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 shadow-sm" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}