export default function PageHeader({ eyebrow, title, children }) {
  return (
    <header className="pt-32 pb-12 lg:pt-40 lg:pb-16 hero-pattern">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <span className="text-peego-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
          {title}
        </h1>
        {children && <p className="text-lg text-gray-600">{children}</p>}
      </div>
    </header>
  );
}
