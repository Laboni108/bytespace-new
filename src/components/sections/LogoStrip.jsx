import { Sparkle, Zap, CircleDot, Hexagon, Radio } from "lucide-react";

const partnerLogos = [
  { name: "Logoipsum", icon: Sparkle },
  { name: "Logoipsum", icon: Zap },
  { name: "Logoipsum", icon: CircleDot },
  { name: "Logoipsum", icon: Hexagon },
  { name: "Logoipsum", icon: Radio },
];

export default function LogoStrip() {
  return (
    <section className="bg-shuttle-50 py-10">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 xl:px-0">
        {partnerLogos.map(({ name, icon: Icon }, i) => (
          <div key={i} className="flex items-center gap-2 text-shuttle-500">
            <Icon size={18} />
            <span className="text-sm">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}