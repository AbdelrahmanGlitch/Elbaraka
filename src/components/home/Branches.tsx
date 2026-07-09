"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "../layout/Container";
import Button from "../ui/Button";

import { branches } from "../../hooks/data/branches";
import { useLanguage } from "../../app/providers/LanguageProvider";

export default function Branches() {
  const { language, messages } = useLanguage();

  const [showAll, setShowAll] = useState(false);

  const visibleBranches = showAll ? branches : branches.slice(0, 3);

  return (
    <section className="relative py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.3em] text-primary">
            📍 {language === "ar" ? "فروعنا" : "Our Branches"}
          </span>

          <h2 className="mt-4 text-4xl font-bold text-foreground">
            {messages.home.branchesTitle}
          </h2>

          <p className="mt-5 text-muted leading-8">
            {messages.home.branchesDescription}
          </p>
        </div>

        {/* Cards */}
        <motion.div
          layout
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence>
            {visibleBranches.map((branch, index) => (
              <motion.div
                layout
                key={branch.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -40,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-border
                  bg-card
                  shadow-lg
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                {/* Map */}
                <Link
                  href={branch.googleMaps}
                  target="_blank"
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={branch.image}
                      alt={branch.name}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    <div className="absolute bottom-5 left-5 text-white">
                      <h3 className="text-2xl font-bold">
                        {language === "ar"
                          ? branch.arabic
                          : branch.name}
                      </h3>

                      <p className="text-sm text-white/90">
                        {language === "ar"
                          ? branch.arabicCity
                          : branch.city}
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="space-y-5 p-6">
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="mt-1 text-primary"
                      size={20}
                    />

                    <span className="text-muted">
                      {language === "ar"
                        ? branch.arabicAddress
                        : branch.address}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock
                      className="text-primary"
                      size={20}
                    />

                    <span className="text-muted">
                      {branch.hours}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone
                      className="text-primary"
                      size={20}
                    />

                    <span className="text-muted">
                      {branch.phone}
                    </span>
                  </div>

                  <Link
                    href={branch.googleMaps}
                    target="_blank"
                    className="block"
                  >
                    <Button className="w-full flex items-center justify-center gap-2">
                      <Navigation size={18} />
                      {messages.home.directions}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gradient Fade */}
        {!showAll && branches.length > 3 && (
          <div className="relative -mt-28 h-32 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
          </div>
        )}

        {/* Show More Button */}
        {branches.length > 3 && (
          <div className="-mt-6 relative z-20 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-border
                bg-card/90
                backdrop-blur-md
                px-8
                py-3
                shadow-xl
                transition-all
                duration-300
                hover:scale-105
                hover:border-primary
                hover:text-primary
              "
            >
              <span className="font-medium">
                {showAll
                  ? language === "ar"
                    ? "عرض أقل"
                    : "Show Less"
                  : language === "ar"
                  ? "عرض المزيد"
                  : "Show More"}
              </span>

              <motion.div
                animate={{
                  rotate: showAll ? 180 : 0,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                {showAll ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </motion.div>
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}