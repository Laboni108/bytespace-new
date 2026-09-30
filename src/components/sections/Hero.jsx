import { Search, Star } from "lucide-react";
import heroPhoto from "../../assets/images/hero-photo.png";
import avatars from "../../assets/images/avatars.png";
import squiggleWhite from "../../assets/images/squiggle-white.svg";
import squiggleLime from "../../assets/images/squiggle-lime.svg";
import triangle from "../../assets/images/triangle.svg";
import ring from "../../assets/images/ring.svg";
import blobLime from "../../assets/images/blob-lime.svg";


const stagePos = (leftPx, topPxFromPhotoTop, widthPx, heightPx) => ({
  left: `${(leftPx / 1440) * 100}%`,
  top: `${(topPxFromPhotoTop / 541) * 100}%`,
  width: `${(widthPx / 1440) * 100}%`,
  height: `${(heightPx / 541) * 100}%`,
});


const cardPos = (leftPx, topPxFromPhotoTop) => ({
  left: `${(leftPx / 1440) * 100}%`,
  top: `${(topPxFromPhotoTop / 541) * 100}%`,
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-800 pt-4">
      {/* Heading + search */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 xl:px-0">
        <div className="relative z-10 mx-auto max-w-4xl pt-10 text-center">
        <h1 className="text-[36px] leading-[1.2] text-white sm:whitespace-nowrap sm:text-[56px] lg:text-[64px]">
  Get Access to Hundreds<br />Courses Available
</h1>
          <p className="mx-auto mt-4 max-w-none text-sm text-white/80 sm:text-base sm:whitespace-nowrap">
  Unlock your creativity, gain valuable knowledge, and grow your business
  with our wide range of courses.
</p>
          <form className="mx-auto mt-8 flex w-full max-w-[581px] flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex w-full items-center gap-2 rounded-full bg-white px-6 py-3 sm:max-w-[461px]">
              <Search size={18} className="shrink-0 text-shuttle-400" />
              <input
                type="text"
                placeholder="Course, topic, creator"
                className="w-full text-sm outline-none placeholder:text-shuttle-400"
              />
            </div>
            <button
              type="submit"
              className="shrink-0 cursor-pointer rounded-full bg-lime-400 px-6 py-3 text-sm font-medium text-shuttle-950 transition-opacity hover:opacity-90"
            >
              Search
            </button>
          </form>
        </div>
      </div>

     
      <div className="relative mx-auto mt-6 w-full max-w-[1440px]">
        {/* Lime circle behind the photo */}
        <div
          className="absolute aspect-square rounded-full bg-lime-400"
          style={{ left: `${(145 / 1440) * 100}%`, top: `${(70 / 541) * 100}%`, width: `${(1149 / 1440) * 100}%` }}
        />

        {/* Decorative shapes */}
        <img src={squiggleLime} alt="" className="absolute hidden  sm:block" style={stagePos(-118, -291, 385, 385)} />
        <img src={squiggleWhite} alt="" className="absolute hidden rotate-180  sm:block" style={stagePos(183, -35, 175, 175)} />
        <img src={ring} alt="" className="absolute hidden  sm:block" style={stagePos(60, 170, 342, 342)} />
        <img src={triangle} alt="" className="absolute hidden  sm:block" style={stagePos(1106, -48, 188, 188)} />
        <img src={squiggleWhite} alt="" className="absolute hidden  sm:block" style={stagePos(1127, 160, 330, 330)} />
        <img src={blobLime} alt="" className="absolute hidden  sm:block" style={stagePos(1231, -291, 370, 370)} />

       
        <img
          src={heroPhoto}
          alt="Student learning online"
          className="relative z-10 mx-auto block"
          style={{ width: `${(578 / 1440) * 100}%` }}
        />

      {/* Floating card: UI/UX Design */}
<div className="absolute z-20 flex w-52 flex-col gap-1 rounded-2xl bg-white p-4 shadow-lg" style={cardPos(404, 127)}>
  <p className="text-xs font-medium text-shuttle-950 sm:text-sm">UI/UX Design</p>
  <p className="text-[10px] text-shuttle-400 sm:text-xs">200 Courses · 1000+ Students</p>
</div>

{/* Floating card: Learning Progress */}
<div className="absolute z-20 flex w-56 flex-col gap-2 rounded-2xl bg-white p-4 shadow-lg" style={cardPos(842, 139)}>
  <p className="text-[10px] text-shuttle-400 sm:text-xs">Learning Progress</p>
  <p className="text-xl font-semibold text-shuttle-950 sm:text-2xl">55%</p>
  <div className="h-1.5 w-full rounded-full bg-shuttle-100">
    <div className="h-1.5 w-[55%] rounded-full bg-lime-400" />
  </div>
</div>

{/* Floating card: Happy Students */}
<div className="absolute z-20 flex w-64 flex-col gap-2 rounded-2xl bg-white p-4 shadow-lg" style={cardPos(328, 325)}>
  <p className="text-xs font-medium text-shuttle-950 sm:text-sm">Happy Students</p>
  <div className="flex items-center gap-1">
    <Star size={12} className="fill-lime-500 text-lime-500" />
    <span className="text-[10px] text-shuttle-400 sm:text-xs">4.5 (240)</span>
  </div>
  <img src={avatars} alt="" className="h-6 w-auto" />
</div>
      </div>
    </section>
  );
}