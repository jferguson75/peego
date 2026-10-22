import Image from "next/image";
import Link from "next/link";
import { FaLeaf, FaCheck } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-peego-light text-peego-dark font-semibold text-sm mb-6">
              <FaLeaf /> Advanced Solidifying Technology
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
              Restoring Dignity. <br />
              <span className="text-peego-dark">One innovation at a time.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A hygienic, portable and discreet disposable urine solution that
              gives millions of people the freedom to live without compromise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/product"
                className="bg-peego-dark hover:bg-peego-accent text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-peego-dark/30 transform hover:-translate-y-1 text-center"
              >
                Shop Now
              </Link>
              <Link
                href="#features"
                className="bg-white border-2 border-peego-dark text-peego-dark hover:bg-peego-light px-8 py-4 rounded-full font-semibold text-lg transition-all text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-peego-light to-transparent rounded-3xl transform rotate-3 scale-105" />
            <div className="relative flex items-center justify-center rounded-3xl shadow-2xl bg-peego-dark border-4 border-white p-6 aspect-[6/7]">
              <Image
                src="/images/peego-packaging.png"
                alt="PEEGO disposable urine bags and box"
                width={1284}
                height={592}
                priority
                className="w-full h-auto"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
              <div className="bg-peego-light text-peego-dark w-12 h-12 rounded-full flex items-center justify-center text-xl">
                <FaCheck />
              </div>
              <div>
                <p className="font-bold text-gray-900">700ML</p>
                <p className="text-sm text-gray-500">Large Capacity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
