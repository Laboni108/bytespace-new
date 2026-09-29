import { CheckCircle2, Star } from "lucide-react";
import heroPhoto from "../../assets/images/hero-photo.png";
import growthPhoto2 from "../../assets/images/growth-photo-2.png";
import squiggleLime from "../../assets/images/squiggle-lime.svg";
import course1 from "../../assets/images/course-1.jpg";
import avatars from "../../assets/images/avatars.png";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const checklist = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const posIn = (stageW, stageH) => (leftPx, topPx, widthPx, heightPx) => ({
  left: `${(leftPx / stageW) * 100}%`,
  top: `${(topPx / stageH) * 100}%`,
  width: `${(widthPx / stageW) * 100}%`,
  height: `${(heightPx / stageH) * 100}%`,
});

const malePos = posIn(621, 552);
const femalePos = posIn(541, 596);

export default function Growth() {
  return (
    <section
      className="py-20"
      style={{
        background:
          "radial-gradient(circle at 20% 5%, #e5ea9d 0%, transparent 25%), " +
          "radial-gradient(circle at 12% 92%, #e5ea9d 0%, transparent 15%), " +
          "radial-gradient(circle at 92% 88%, #c6e4f7 0%, transparent 28%), " +
          "#ffffff",
      }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-24 px-5 xl:px-0">
        {/* Row 1: text (574px) + photo stage (621px), gap 63px */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-[63px]">
          <div className="flex w-full flex-col gap-6 lg:w-[574px] lg:shrink-0">
            <div>
              <h2 className="text-[28px] sm:text-[36px]">
                Your Path to Professional Growth Starts Here!
              </h2>
              <p className="mt-4 text-sm text-shuttle-500">
                Explore our curated selection of courses tailored to enhance<br/>
                your capabilities and accelerate your career journey.<br/> Whether
                you are looking to sharpen specific skills, gain<br/> industry
                expertise, or embark on a new career path entirely,<br/> we have
                the resources you need.
              </p>
            </div>
            <div className="flex gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-semibold text-primary-800">{s.value}</p>
                  <p className="text-xs text-shuttle-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual stage: 621 x 552 */}
          <div
            className="relative w-full lg:min-w-0 lg:max-w-[621px] lg:flex-1"
            style={{ aspectRatio: "621 / 552" }}
          >
            {/* Mini course card, behind everything */}
            <div
              className="absolute z-0 overflow-hidden rounded-2xl border border-shuttle-200 bg-white"
              style={malePos(0, 0, 373, 384)}
            >
              <img src={course1} alt="" className="h-1/2 w-full object-cover" />
              <div className="flex flex-col gap-1 p-3">
                <p className="text-xs font-semibold text-shuttle-950">Learn Figma from...</p>
                <p className="text-[10px] text-primary-700">by purepixel studio</p>
                <span className="mt-1 w-fit rounded-full bg-shuttle-50 px-2 py-1 text-[10px] text-shuttle-600">
                  Beginner
                </span>
                <p className="mt-1 text-xs font-semibold text-primary-800">
                  $25 <span className="text-[10px] font-normal text-shuttle-400">/lifetime</span>
                </p>
              </div>
            </div>

            {/* Photo, middle layer */}
            <img
              src={heroPhoto}
              alt="Student learning online"
              className="absolute z-10 object-contain"
              style={malePos(22, 12, 577, 540)}
            />

            {/* Learning Progress card */}
            <div
              className="absolute z-20 flex flex-col gap-2 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur"
              style={malePos(345, 213, 232, 138)}
            >
              <p className="text-[10px] text-shuttle-400">Learning Progress</p>
              <p className="text-xl font-semibold text-shuttle-950">55%</p>
              <div className="h-1.5 w-full rounded-full bg-shuttle-100">
                <div className="h-1.5 w-[55%] rounded-full bg-lime-400" />
              </div>
            </div>

            {/* Squiggle, topmost — sits in front of the white card */}
            <img
              src={squiggleLime}
              alt=""
              className="absolute z-30 hidden opacity-90 sm:block"
              style={malePos(406, 67, 215, 215)}
            />
          </div>
        </div>

        {/* Row 2: photo stage (541px) + text (620px), gap 79px, top-aligned */}
        <div className="flex flex-col items-center gap-10 lg:flex-row-reverse lg:items-start lg:gap-[79px]">
          <div className="flex w-full flex-col gap-6 pt-2 lg:w-[620px] lg:shrink-0">
            <div>
              <h2 className="text-[30px] sm:text-[38px]">Create &amp; Manage<br/> Courses Easily.</h2>
              <p className="mt-4 text-base text-shuttle-500">
                <span className="font-medium text-shuttle-700">ByteSpace</span>{" "}
                supports individuals or entities in the creation, publication,<br/>
                and administration of educational courses.
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-shuttle-700">
                  <CheckCircle2 size={18} className="shrink-0 fill-primary-700 text-white" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual stage: 541 x 596 */}
          <div
            className="relative w-full lg:min-w-0 lg:max-w-[541px] lg:flex-1"
            style={{ aspectRatio: "541 / 596" }}
          >
            {/* Blue cards, behind the photo */}
            <div
              className="absolute z-0 flex flex-col gap-2 rounded-2xl bg-primary-800 p-4 shadow-lg"
              style={femalePos(0, 44, 232, 119)}
            >
              <p className="text-[10px] text-white/70">Total Revenue</p>
              <p className="text-sm font-semibold text-white">$120.29</p>
              <div className="h-1 w-full rounded-full bg-white/20">
                <div className="h-1 w-2/3 rounded-full bg-lime-400" />
              </div>
            </div>

            <div
              className="absolute z-0 flex flex-col gap-1 rounded-2xl bg-primary-800 p-3 shadow-lg"
              style={femalePos(0, 194, 134, 135)}
            >
              <p className="text-[10px] text-white/70">Year to Date</p>
              <p className="text-sm font-semibold text-white">$1,200.38</p>
              <span className="mt-1 w-fit rounded-full bg-lime-400 px-2 py-0.5 text-[10px] font-medium text-shuttle-950">
                +12%
              </span>
            </div>

            {/* Photo, middle layer — must be a transparent PNG */}
            <img
              src={growthPhoto2}
              alt="Course creator"
              className="absolute z-10 object-contain"
              style={femalePos(28, 0, 435, 596)}
            />

            {/* Squiggle, sits beside her head, in front of the photo's transparent area */}
            <img
              src={squiggleLime}
              alt=""
              className="absolute z-20 hidden opacity-90 sm:block"
              style={femalePos(305, 114, 215, 215)}
            />

            {/* White card, moved up slightly and on top of everything */}
            <div
              className="absolute z-30 flex flex-col gap-2 rounded-2xl bg-white p-4 shadow-lg"
              style={femalePos(283, 380, 258, 123)}
            >
              <p className="text-xs font-medium text-shuttle-950">Happy Students</p>
              <div className="flex items-center gap-1">
                <Star size={12} className="fill-lime-500 text-lime-500" />
                <span className="text-[10px] text-shuttle-400">4.5 (240)</span>
              </div>
              <img src={avatars} alt="" className="h-6 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}