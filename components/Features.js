import {
  FaShieldHalved,
  FaWind,
  FaStopwatch,
  FaUserSecret,
} from "react-icons/fa6";

const features = [
  {
    icon: FaShieldHalved,
    title: "Leak Resistant",
    text: "Engineered with durable materials and secure seals to ensure absolute peace of mind.",
  },
  {
    icon: FaWind,
    title: "Odour Free",
    text: "Advanced solidifying technology locks in both liquid and unwanted odours instantly.",
  },
  {
    icon: FaStopwatch,
    title: "Fast Solidifying",
    text: "Proprietary absorbent polymers turn liquid into a manageable gel within seconds.",
  },
  {
    icon: FaUserSecret,
    title: "Discreet & Portable",
    text: "Looks like an ordinary pouch. Lightweight and compact to go wherever you go.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple. Smart. Dignified.
          </h2>
          <p className="text-lg text-gray-600">
            Designed with your everyday life in mind. PEEGO offers unmatched
            reliability and discretion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-peego-gray p-8 rounded-3xl hover:shadow-lg transition-shadow border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-peego-dark text-2xl mb-6 group-hover:bg-peego-dark group-hover:text-white transition-colors">
                <Icon />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
