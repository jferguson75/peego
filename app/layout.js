import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "PEEGO | Restoring Dignity",
    template: "%s | PEEGO",
  },
  description:
    "A hygienic, portable and discreet disposable urine solution that gives millions of people the freedom to live without compromise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="font-sans antialiased bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
