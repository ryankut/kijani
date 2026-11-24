import { methodology } from "@/lib/site-content";

export default function Methodology() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          {methodology.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {methodology.steps.map((s, i) => (
            <div key={s.title} className="text-center">
              <div className="text-5xl font-bold text-primary/20 mb-4">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}