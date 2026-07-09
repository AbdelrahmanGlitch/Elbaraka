"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { title: "Home", href: "/" },
  { title: "Menu", href: "/menu" },
  { title: "Offers", href: "/offers" },
  { title: "Branches", href: "/branches" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];
const NavLinks = ({ mobile = false, onNavigate }) => {
  const pathname = usePathname();

  if (mobile) {
    return (
      <>
        {links.map((link, index) => {
          const active = pathname === link.href;

          return (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <Link
                href={link.href}
                onClick={onNavigate}
                className={`block text-lg font-medium transition ${
                  active
                    ? "text-[#C8102E]"
                    : "text-gray-700 hover:text-[#C8102E]"
                }`}
              >
                {link.title}
              </Link>
            </motion.div>
          );
        })}
      </>
    );
  }

  return (
    <nav className="flex items-center gap-10">
      {links.map((link) => {
        const active = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className="relative py-2"
          >
            <span
              className={`font-medium transition ${
                active
                  ? "text-[#C8102E]"
                  : "text-gray-700 hover:text-[#C8102E]"
              }`}
            >
              {link.title}
            </span>

            {active && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-[#C8102E]"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;