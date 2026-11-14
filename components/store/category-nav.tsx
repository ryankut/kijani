import Link from "next/link";

type Props = {
  deptName: string;
  deptSlug: string;
  subs: { id: string; name: string; slug: string }[];
  activeSlug?: string;
};

export default function CategoryNav({ deptName, deptSlug, subs, activeSlug }: Props) {
  const base = "px-4 py-2 rounded-full border text-sm transition";
  const on = "bg-primary text-primary-foreground border-primary";
  const off = "border-border text-foreground hover:bg-muted";

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Link href={`/shop/${deptSlug}`} className={`${base} ${activeSlug ? off : on}`}>
        All {deptName}
      </Link>
      {subs.map((s) => (
        <Link
          key={s.id}
          href={`/shop/${deptSlug}/${s.slug}`}
          className={`${base} ${activeSlug === s.slug ? on : off}`}
        >
          {s.name}
        </Link>
      ))}
    </div>
  );
}
