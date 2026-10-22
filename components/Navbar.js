"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/product", label: "Product" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt=""
              width={36}
              height={36}
              priority
            />
            <span className="font-bold text-3xl tracking-tight text-peego-dark">
              PEEGO
            </span>
            <span className="text-xs text-peego-dark align-top">&trade;</span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-600 hover:text-peego-dark font-medium transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/product"
              className="bg-peego-dark hover:bg-peego-accent text-white px-6 py-2.5 rounded-full font-semibold transition-colors shadow-md shadow-peego-dark/20"
            >
              Shop Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="text-gray-600 hover:text-peego-dark focus:outline-none"
            >
              {open ? <FaXmark className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-gray-600 hover:text-peego-dark font-medium"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/product"
            onClick={() => setOpen(false)}
            className="block text-center bg-peego-dark text-white px-6 py-2.5 rounded-full font-semibold"
          >
            Shop Now
          </Link>
        </div>
      )}
    </nav>
  );
}
