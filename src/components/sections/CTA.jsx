import squiggleWhite from "../../assets/images/squiggle-white.svg";
import squiggleLime from "../../assets/images/squiggle-lime.svg";
import triangle from "../../assets/images/triangle.svg";
import ring from "../../assets/images/ring.svg";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary-800 py-20">
      <img src={squiggleLime} alt="" className="absolute left-8 top-10 hidden w-20 opacity-90 sm:block" />
      <img src={triangle} alt="" className="absolute right-10 top-8 hidden w-16 opacity-90 sm:block" />
      <img src={squiggleWhite} alt="" className="absolute bottom-6 left-1/4 hidden w-14 opacity-80 sm:block" />
      <img src={ring} alt="" className="absolute -right-8 bottom-0 hidden w-32 opacity-90 sm:block" />

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