export default function HeroHeading() {
  return (
    <div
      className="
        mx-auto
        mt-7
        flex
        w-full
        max-w-[1120px]
        flex-col
        items-center
        text-center
        sm:mt-8
      "
    >
      {/* Main heading */}

      <h1
        className="
          text-[clamp(3rem,7vw,6.8rem)]
          font-extrabold
          leading-[1]
          tracking-[-0.065em]
          text-[var(--foreground)]
        "
      >
        We create digital
        <br className="hidden sm:block" />

        <span className="relative inline-block">
          <span className="text-[var(--primary)]">
            experiences that grow brands.
          </span>
        </span>
      </h1>

      {/* Description */}

      <p
        className="
          mt-8
          max-w-[950px]
          text-base
          leading-8
          text-[var(--muted)]
          sm:text-lg
          sm:leading-9
          lg:text-xl
        "
      >
        Pixorely helps startups and growing businesses build a
        stronger digital presence through premium websites,
        WordPress, Shopify, digital marketing, and professional
        email solutions.
      </p>
    </div>
  );
}