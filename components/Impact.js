import Link from "next/link";
import { FaStar, FaStarHalfStroke, FaRotateRight } from "react-icons/fa6";

export default function Impact() {
  return (
    <section id="traction" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real people. Real results.
          </h2>
          <p className="text-lg text-gray-600">
            PEEGO is already making a measurable difference in the lives of
            users and carers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <div className="p-6">
            <div className="text-5xl font-bold text-peego-dark mb-2">98%</div>
            <div className="flex justify-center text-yellow-400 text-sm mb-2 gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <div className="text-xl font-semibold text-gray-900 mb-1">
              User Satisfaction
            </div>
            <p className="text-gray-500">From rigorous global testing</p>
          </div>

          <div className="p-6">
            <div className="text-5xl font-bold text-peego-dark mb-2">4.8/5</div>
            <div className="flex justify-center text-yellow-400 text-sm mb-2 gap-1">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <FaStarHalfStroke />
            </div>
            <div className="text-xl font-semibold text-gray-900 mb-1">
              Average Rating
            </div>
            <p className="text-gray-500">Across independent reviews</p>
          </div>

          <div className="p-6">
            <div className="text-5xl font-bold text-peego-dark mb-2">70%</div>
            <div className="flex justify-center text-peego-accent text-sm mb-2 gap-1">
              <FaRotateRight />
            </div>
            <div className="text-xl font-semibold text-gray-900 mb-1">
              Repeat Customers
            </div>
            <p className="text-gray-500">Trust us for their daily needs</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/product"
            className="inline-block bg-peego-dark hover:bg-peego-accent text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-peego-dark/30 transform hover:-translate-y-1"
          >
            Try PEEGO Today
          </Link>
        </div>
      </div>
    </section>
  );
}
