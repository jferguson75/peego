import {
  FaPersonWalkingWithCane,
  FaHeartCrack,
  FaUserNurse,
} from "react-icons/fa6";

const challenges = [
  {
    icon: FaPersonWalkingWithCane,
    title: "Loss of Independence",
    text: "Daily challenges reduce confidence and personal freedom, making simple outings feel daunting.",
  },
  {
    icon: FaHeartCrack,
    title: "Impact on Dignity",
    text: "Embarrassment and the fear of public inconvenience heavily affect emotional wellbeing.",
  },
  {
    icon: FaUserNurse,
    title: "Caregiver Burden",
    text: "Traditional urine management is time-consuming, physically demanding, and stressful for carers.",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="py-24 bg-peego-dark text-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-peego-accent rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-5 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-peego-light font-semibold tracking-wider uppercase text-sm mb-2 block">
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Millions live with a daily compromise.
          </h2>
          <p className="text-lg text-peego-light/80">
            Lack of suitable urine management solutions limit freedom, dignity
            and independence. This is more than just an inconvenience. It&apos;s
            a global healthcare challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl mb-6">
                <Icon />
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-peego-light/80">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
