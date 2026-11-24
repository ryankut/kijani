import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  image: string;
  label?: string;
  href?: string;
  cta?: string;
  as?: "h1" | "h2";
};

export default function ArticleHero({ title, subtitle, image, label, href, cta = "Read article", as = "h2" }: Props) {
  const Heading = as;
  return (
    <section className="py-8 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full aspect-[4/3] sm:aspect-video md:aspect-[16/7] rounded-3xl overflow-hidden shadow-lg">
          <Image
            src={image}
            alt=""
            fill
            priority={as === "h1"}
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center px-6 md:px-12">
            <div className="max-w-xl">
              {label && (
                <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-white/80 mb-2 md:mb-3">
                  {label}
                </p>
              )}
              <Heading className="text-2xl md:text-5xl font-bold text-white leading-tight mb-2 md:mb-4">
                {title}
              </Heading>
              <p className="text-sm md:text-lg text-white/90 mb-4 md:mb-6">{subtitle}</p>
              {href && (
                <Link
                  href={href}
                  className="inline-block bg-primary text-primary-foreground font-semibold px-5 py-2 md:px-8 md:py-3 rounded-sm hover:shadow-lg transition"
                >
                  {cta}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}