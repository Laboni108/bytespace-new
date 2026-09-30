
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
      {/* Heading + Search */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 xl:px-0">
        <div className="mx-auto max-w-4xl pt-8 text-center sm:pt-10">
          <h1 className="text-[34px] font-medium leading-[1.15] text-white sm:text-[48px] md:text-[56px] lg:text-[64px]">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>

          <p className="mx-auto mt-4 max-w-[850px] text-sm leading-6 text-white/80 sm:text-base">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          {/* Search */}
          <form className="mx-auto mt-7 flex w-full max-w-[581px] flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex min-h-[48px] w-full items-center gap-2 rounded-full bg-white px-5 py-3 sm:flex-1 sm:px-6">
              <Search
                size={18}
                className="shrink-0 text-shuttle-400"
              />

              <input
                type="text"
                placeholder="Course, topic, creator"
                className="min-w-0 w-full bg-transparent text-sm outline-none placeholder:text-shuttle-400"
              />
            </div>

            <button
              type="submit"
              className="min-h-[48px] shrink-0 cursor-pointer rounded-full bg-lime-400 px-7 py-3 text-sm font-medium text-shuttle-950 transition-opacity hover:opacity-90"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="relative mx-auto mt-10 min-h-[390px] w-full max-w-[1440px] sm:mt-8 sm:min-h-[480px] lg:min-h-[541px]">
        {/* Lime Circle */}
        <div
          className="
            absolute
            left-1/2
            top-[70px]
            aspect-square
            w-[90%]
            -translate-x-1/2
            rounded-full
            bg-lime-400
            sm:top-[70px]
            sm:w-[80%]
            lg:left-[10.07%]
            lg:top-[12.94%]
            lg:w-[79.79%]
            lg:translate-x-0
          "
        />

        {/* Decorative Shapes - Desktop */}
        <img
          src={squiggleLime}
          alt=""
          className="absolute hidden sm:block lg:block"
          style={stagePos(-118, -291, 385, 385)}
        />

        <img
          src={squiggleWhite}
          alt=""
          className="absolute hidden rotate-180 sm:block"
          style={stagePos(183, -35, 175, 175)}
        />

        <img
          src={ring}
          alt=""
          className="absolute hidden sm:block"
          style={stagePos(60, 170, 342, 342)}
        />

        <img
          src={triangle}
          alt=""
          className="absolute hidden sm:block"
          style={stagePos(1106, -48, 188, 188)}
        />

        <img
          src={squiggleWhite}
          alt=""
          className="absolute hidden sm:block"
          style={stagePos(1127, 160, 330, 330)}
        />

        <img
          src={blobLime}
          alt=""
          className="absolute hidden sm:block"
          style={stagePos(1231, -291, 370, 370)}
        />

        {/* Main Hero Image */}
        <img
          src={heroPhoto}
          alt="Student learning online"
          className="
            relative
            z-10
            mx-auto
            block
            w-[72%]
            max-w-[578px]
            sm:w-[55%]
            lg:w-[40.14%]
          "
        />

        {/* UI/UX Design Card */}
        <div
          className="
            absolute
            z-20
            hidden
            w-52
            flex-col
            gap-1
            rounded-2xl
            bg-white
            p-4
            shadow-lg
            sm:flex
          "
          style={cardPos(404, 127)}
        >
          <p className="text-xs font-medium text-shuttle-950 sm:text-sm">
            UI/UX Design
          </p>

          <p className="text-[10px] text-shuttle-400 sm:text-xs">
            200 Courses · 1000+ Students
          </p>
        </div>

        {/* Learning Progress Card */}
        <div
          className="
            absolute
            z-20
            hidden
            w-56
            flex-col
            gap-2
            rounded-2xl
            bg-white
            p-4
            shadow-lg
            sm:flex
          "
          style={cardPos(842, 139)}
        >
          <p className="text-[10px] text-shuttle-400 sm:text-xs">
            Learning Progress
          </p>

          <p className="text-xl font-semibold text-shuttle-950 sm:text-2xl">
            55%
          </p>

          <div className="h-1.5 w-full rounded-full bg-shuttle-100">
            <div className="h-1.5 w-[55%] rounded-full bg-lime-400" />
          </div>
        </div>

        {/* Happy Students Card */}
        <div
          className="
            absolute
            z-20
            hidden
            w-64
            flex-col
            gap-2
            rounded-2xl
            bg-white
            p-4
            shadow-lg
            sm:flex
          "
          style={cardPos(328, 325)}
        >
          <p className="text-xs font-medium text-shuttle-950 sm:text-sm">
            Happy Students
          </p>

          <div className="flex items-center gap-1">
            <Star
              size={12}
              className="fill-lime-500 text-lime-500"
            />

            <span className="text-[10px] text-shuttle-400 sm:text-xs">
              4.5 (240)
            </span>
          </div>

          <img
            src={avatars}
            alt=""
            className="h-6 w-auto"
          />
        </div>

        {/* Mobile Cards */}
        <div className="relative z-20 mx-auto mt-4 flex w-[90%] max-w-md flex-col gap-3 sm:hidden">
          <div className="rounded-2xl bg-white p-4 text-left shadow-lg">
            <p className="text-sm font-medium text-shuttle-950">
              UI/UX Design
            </p>

            <p className="mt-1 text-xs text-shuttle-400">
              200 Courses · 1000+ Students
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 text-left shadow-lg">
            <p className="text-xs text-shuttle-400">
              Learning Progress
            </p>

            <p className="mt-1 text-2xl font-semibold text-shuttle-950">
              55%
            </p>

            <div className="mt-2 h-1.5 w-full rounded-full bg-shuttle-100">
              <div className="h-1.5 w-[55%] rounded-full bg-lime-400" />
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 text-left shadow-lg">
            <p className="text-sm font-medium text-shuttle-950">
              Happy Students
            </p>

            <div className="mt-2 flex items-center gap-1">
              <Star
                size={12}
                className="fill-lime-500 text-lime-500"
              />

              <span className="text-xs text-shuttle-400">
                4.5 (240)
              </span>
            </div>

            <img
              src={avatars}
              alt=""
              className="mt-2 h-6 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

