import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Features from "@/components/Features";

export const metadata = { title: "Product" };

const facts = [
  { label: "Capacity", value: "700ML per bag" },
  { label: "Pack sizes", value: "1 bag or 20 bags" },
  { label: "Technology", value: "Advanced solidifying polymers" },
];

export default function Page() {
  return (
    <main>
      <PageHeader eyebrow="Product" title="PEEGO Disposable Urine Bag">
        With Advanced Solidifying Technology.
      </PageHeader>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-peego-dark p-8 shadow-xl">
            <Image
              src="/images/peego-packaging.png"
              alt="PEEGO disposable urine bags and box"
              width={1284}
              height={592}
              priority
              className="w-full h-auto"
            />
          </div>

          <dl className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {facts.map(({ label, value }) => (
              <div
                key={label}
                className="bg-peego-gray rounded-2xl border border-gray-100 p-6"
              >
                <dt className="text-sm font-semibold uppercase tracking-wider text-peego-accent mb-1">
                  {label}
                </dt>
                <dd className="text-lg font-semibold text-gray-900">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Features />

      <section className="pb-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Interested in PEEGO?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Online ordering is coming soon. To enquire about an order, get in
            touch with us.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-peego-dark hover:bg-peego-accent text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-peego-dark/30 transform hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
