import PageHeader from "@/components/PageHeader";

export default function LegalPage({ title }) {
  return (
    <main>
      <PageHeader eyebrow="Legal" title={title} />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-600 leading-relaxed space-y-4">
          <p>
            This page is being finalised and will be published before we open
            online ordering.
          </p>
          <p>
            In the meantime, if you have any questions, please email{" "}
            <a
              href="mailto:info@peego.com"
              className="text-peego-dark font-medium hover:text-peego-accent"
            >
              info@peego.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
