"use client";

import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

import Container from "../layout/Container";
import Button from "../ui/Button";

import { bestSeller } from "../../hooks/data/bestSeller";
import { useLanguage } from "../../app/providers/LanguageProvider";

export default function BestSeller() {
  const { language, messages } = useLanguage();

  return (
    <section className="py-24">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-semibold uppercase tracking-widest">
            🔥 {language === "ar" ? "الأكثر طلباً" : "Most Ordered"}
          </span>

          <h2 className="mt-3 text-4xl font-bold text-foreground">
            {messages.home.bestSellerTitle}
          </h2>

          <p className="mt-4 text-muted">
            {messages.home.bestSellerDescription}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {bestSeller.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-border
                bg-card
                shadow-md
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Badge */}
                <span className="absolute left-5 top-5 rounded-full bg-primary px-4 py-2 text-xs font-bold text-white">
                  {item.badge}
                </span>

                {/* Favorite */}
                <button
                  className="
                    absolute
                    right-5
                    top-5
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white/90
                    text-primary
                    transition
                    hover:bg-primary
                    hover:text-white
                  "
                >
                  <Heart size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground">
                  {language === "ar" ? item.arabic : item.title}
                </h3>

                <p className="mt-3 text-muted leading-7">
                  {language === "ar"
                    ? item.arabicDescription
                    : item.description}
                </p>

                {/* Sauces OR Sizes */}
                {item.sauces && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {(language === "ar"
                      ? item.arabicSauces
                      : item.sauces
                    ).map((sauce) => (
                      <span
                        key={sauce}
                        className="
                          rounded-full
                          bg-primary/10
                          px-3
                          py-1
                          text-xs
                          font-medium
                          text-primary
                        "
                      >
                        {sauce}
                      </span>
                    ))}
                  </div>
                )}

                {item.sizes && (
                  <div className="mt-5 space-y-2">
                    {item.sizes.map((size) => (
                      <div
                        key={size.pieces}
                        className="
                          flex
                          items-center
                          justify-between
                          rounded-xl
                          border
                          border-border
                          px-4
                          py-3
                        "
                      >
                        <span className="font-medium text-foreground">
                          {language === "ar"
                            ? `${size.pieces} قطع`
                            : `${size.pieces} Pieces`}
                        </span>

                        <span className="font-bold text-primary">
                          {size.price} EGP
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Footer */}
                <div className="mt-8 flex items-center justify-between">
                  {!item.sizes && (
                    <span className="text-3xl font-bold text-primary">
                      {item.price} EGP
                    </span>
                  )}
                  <Button className="flex cursor-pointer items-center gap-2">
                    <ShoppingCart size={18} />
                    {messages.home.bestSellerButton}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}