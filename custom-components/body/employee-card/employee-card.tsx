"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Home,
  LeafIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Profile = {
  id: number;
  name: string;
  role: string;
  image: string;
};

const profiles: Profile[] = [

  {
    id: 1,
    name: "Govin Sharma",
    role: "Founder",
    image: "/jina.jpeg",
  },
   {
    id: 2,
    name: "Ratna Rana Mongar",
    role: "Director Operation & IT",
    image: "/ratnay.jpeg",
  },
    {
    id: 3,
    name: "Jina Sharma",
    role: "Operation Manager",
    image: "/govinda.jpeg",
  }, 
];

export default function SocialCardSlider() {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Responsive
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // 🔥 IMPORTANT CHANGE
  const maxIndex = profiles.length - visibleCards;

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto py-10">
        <p className="text-blue-600 font-semibold uppercase text-sm mb-2">
          Our Team
        </p>

        <h3 className="text-3xl md:text-5xl font-bold">
          Meet Our <span className="text-blue-600">Team</span>
        </h3>

        <div className="w-20 h-1 bg-blue-600 mx-auto my-4 rounded-full" />
      </div>

      {/* SLIDER */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / visibleCards)}%)`,
          }}
        >
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className={`
                min-w-full
                sm:min-w-[50%]
                lg:min-w-[33.333%]
              `}
            >
              <Card className="group relative overflow-hidden rounded-3xl shadow-2xl border-0">
                <div className="relative h-[350px] sm:h-[400px] w-full">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 p-5 w-full backdrop-blur-md border-t border-white/20">
                  <h3 className="text-white text-lg font-semibold">
                    {profile.name}
                  </h3>
                  <p className="text-gray-200 text-sm mb-3">
                    {profile.role}
                  </p>

                  <div className="flex gap-2">
                    {/* <Button size="icon" className="rounded-full ">
                      <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
                    </Button>
                    <Button size="icon" className="rounded-full ">
                      <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
                    </Button>
                    <Button size="icon" className="rounded-full ">
                      <Image src="/whatsapp.png" alt="Twitter" width={24} height={24} />
                    </Button> */}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* CONTROLS */}
      <div className="flex justify-center gap-4 mt-6">
        <Button onClick={prev} variant="outline" className="rounded-full w-10 h-10">
          <ChevronLeft />
        </Button>

        <Button onClick={next} className="rounded-full w-10 h-10 bg-blue-600 text-white">
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}