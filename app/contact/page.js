import PageHeader from "@/components/PageHeader";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";

export const metadata = { title: "Contact Us" };

export default function Page() {
  return (
    <main>
      <PageHeader eyebrow="Contact" title="Get in touch">
        Questions about PEEGO, orders or working with us? We&apos;d love to
        hear from you.
      </PageHeader>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-peego-gray p-8 rounded-3xl border border-gray-100">
            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-peego-dark text-xl mb-4">
              <FaEnvelope />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Email</h2>
            <a
              href="mailto:info@peego.com"
              className="text-peego-dark font-medium hover:text-peego-accent"
            >
              info@peego.com
            </a>
          </div>

          <div className="bg-peego-gray p-8 rounded-3xl border border-gray-100">
            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-peego-dark text-xl mb-4">
              <FaLocationDot />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Based in</h2>
            <p className="text-gray-600">Australia</p>
          </div>
        </div>
      </section>
    </main>
  );
}
