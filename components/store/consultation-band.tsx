import Link from "next/link";
import { consultation } from "@/lib/site-content";

export default function ConsultationBand() {
  return (
    <section className="py-12 px-4 bg-background">
      <div className="max-w-7xl mx-auto bg-primary text-primary-foreground rounded-3xl px-6 py-12 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">{consultation.title}</h2>
          <p className="text-primary-foreground/90 text-base md:text-lg">{consultation.text}</p>
        </div>
        <Link
          href={consultation.href}
          className="inline-block bg-accent text-accent-foreground font-semibold px-8 py-3 rounded-full hover:opacity-90 transition text-center"
        >
          {consultation.cta}
        </Link>
      </div>
    </section>
  );
}