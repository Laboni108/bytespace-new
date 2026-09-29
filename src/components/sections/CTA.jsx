import squiggleWhite from "../../assets/images/squiggle-white.svg";
import squiggleLime from "../../assets/images/squiggle-lime.svg";
import triangle from "../../assets/images/triangle.svg";
import blobLime from "../../assets/images/blob-lime.svg";
import ring from "../../assets/images/ring.svg";

// All positions are relative to the CTA frame's full 1440px width and 488px height.
const pos = (leftPx, topPx, widthPx, heightPx) => ({
  left: `${(leftPx / 1440) * 100}%`,
  top: `${(topPx / 488) * 100}%`,
  width: `${(widthPx / 1440) * 100}%`,
  height: `${(heightPx / 488) * 100}%`,
});

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary-800 py-20">
      {/* 7 decorative shapes, exact Figma measurements */}
      <img src={squiggleLime} alt="" className="absolute hidden opacity-90 sm:block" style={pos(-118, -162, 385, 385)} />
      <img src={squiggleWhite} alt="" className="absolute hidden rotate-180 opacity-90 sm:block" style={pos(178, 5, 175, 175)} />
      <img src={triangle} alt="" className="absolute hidden opacity-90 sm:block" style={pos(-48, 225, 188, 188)} />
      <img src={triangle} alt="" className="absolute hidden opacity-90 sm:block" style={pos(1080, 180, 188, 188)} />
      <img src={blobLime} alt="" className="absolute hidden opacity-90 sm:block" style={pos(1226, 6, 370, 370)} />
      <img src={ring} alt="" className="absolute hidden opacity-90 sm:block" style={pos(20, 299, 342, 342)} />
      <img src={squiggleLime} alt="" className="absolute hidden opacity-90 sm:block" style={pos(1110, 289, 330, 330)} />

      <div className="relative mx-auto max-w-[700px] px-5 text-center">
        <h2 className="text-[28px] text-white sm:text-[36px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm text-white/80 sm:text-base">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <button className="mt-8 cursor-pointer rounded-full bg-lime-400 px-8 py-3 text-sm font-medium text-shuttle-950 transition-opacity hover:opacity-90">
          Join as Creator
        </button>
      </div>
    </section>
  );
}