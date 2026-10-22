import Image from "next/image";
import Link from "next/link";
import CurrentYear from "@/components/CurrentYear";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";

const social = [
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaFacebook, label: "Facebook", href: "#" },
  { icon: FaLinkedin, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/logo.png" alt="" width={32} height={32} />
              <span className="font-bold text-2xl tracking-tight text-peego-dark">
                PEEGO
              </span>
            </div>
            <p className="text-gray-500 max-w-sm">
              Restoring dignity, one innovation at a time. A hygienic, portable
              and discreet disposable urine solution.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/product" className="text-gray-500 hover:text-peego-dark transition-colors">
                  Shop Products
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-gray-500 hover:text-peego-dark transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#problem" className="text-gray-500 hover:text-peego-dark transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-500 hover:text-peego-dark transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-peego-dark transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@peego.com" className="text-gray-500 hover:text-peego-dark transition-colors">
                  info@peego.com
                </a>
              </li>
              <li>
                <a href="https://www.peego.com" className="text-gray-500 hover:text-peego-dark transition-colors">
                  www.peego.com
                </a>
              </li>
              <li className="text-gray-500">Australia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; <CurrentYear /> PEEGO. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-peego-dark transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-peego-dark transition-colors">Terms</Link>
            <Link href="/shipping-returns" className="hover:text-peego-dark transition-colors">Shipping &amp; Returns</Link>
          </div>
          <div className="flex space-x-4 text-gray-400">
            {social.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-peego-dark transition-colors"
              >
                <Icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
