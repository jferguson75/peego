import PageHeader from "@/components/PageHeader";
import { FaChevronDown } from "react-icons/fa6";

export const metadata = { title: "FAQ" };

const faqs = [
  {
    q: "What is PEEGO?",
    a: "PEEGO is a hygienic, portable and discreet disposable urine bag with advanced solidifying technology, designed to give people the freedom to live without compromise.",
  },
  {
    q: "How does it work?",
    a: "PEEGO uses absorbent polymers that turn liquid into a manageable gel within seconds, locking in both liquid and odour.",
  },
  {
    q: "How much can a bag hold?",
    a: "Each bag has a capacity of 700ML.",
  },
  {
    q: "Is it discreet?",
    a: "Yes. PEEGO looks like an ordinary pouch and is lightweight and compact, so it is easy to carry wherever you go.",
  },
  {
    q: "Is it leak resistant?",
    a: "PEEGO is engineered with durable materials and secure seals for peace of mind.",
  },
  {
    q: "Who is PEEGO for?",
    a: "PEEGO is designed for people who need a better urine management solution, and for the carers who support them.",
  },
  {
    q: "Where can I buy PEEGO?",
    a: "We are based in Australia and are preparing to open online ordering. To enquire about an order in the meantime, email info@peego.com.",
  },
];

export default function Page() {
  return (
    <main>
      <PageHeader eyebrow="FAQ" title="Frequently asked questions">
        Quick answers about PEEGO. Can&apos;t find what you need? Get in touch.
      </PageHeader>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group bg-peego-gray rounded-2xl border border-gray-100 p-6"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-gray-900 text-lg">
                {q}
                <FaChevronDown className="text-peego-dark shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
