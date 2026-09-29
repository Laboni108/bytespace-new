import { Palette, Code2, Laptop, Briefcase, Megaphone, Camera } from "lucide-react";

const categories = [
  { label: "Design", icon: Palette },
  { label: "Development", icon: Code2 },
  { label: "IT & Software", icon: Laptop },
  { label: "Business", icon: Briefcase },
  { label: "Marketing", icon: Megaphone },
  { label: "Photography", icon: Camera },
];

export default function CategoryIcons() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-[1200px] px-5 xl:px-0">
      <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[24px] sm:text-[30px]">Explore Diverse Learning Paths at Bytespace</h2>
          <p className="mt-4 text-sm text-shuttle-500">
            At Bytespace, we believe in empowering individuals through knowledge. Our
            diverse range of courses spans various fields, ensuring there's something
            for everyone. Unleash your potential and explore our carefully curated
            categories.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-shuttle-100 px-4 py-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-400">
                <Icon size={22} className="text-shuttle-950" />
              </div>
              <p className="text-sm font-medium text-shuttle-700">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}