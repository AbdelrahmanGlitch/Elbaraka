"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Container from "../layout/Container";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
      }}
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-background backdrop-blur-xl shadow-xl py-3"
            : "bg-background backdrop-blur-xl py-5"
        }
      `}
    >
      <Container className="flex items-center justify-between">
        <Logo />

        <DesktopNav />

        <MobileNav />
      </Container>
    </motion.header>
  );
}