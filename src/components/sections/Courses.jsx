import { useState } from "react";
import { Star, BarChart2 } from "lucide-react";
import avatars from "../../assets/images/avatars.png";
import course1 from "../../assets/images/course-1.jpg";
import course2 from "../../assets/images/course-2.jpg";
import course3 from "../../assets/images/course-3.jpg";
import course4 from "../../assets/images/course-4.jpg";
import course5 from "../../assets/images/course-5.jpg";
import course6 from "../../assets/images/course-6.jpg";


const categoryRows = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking", "+ More"],
];

const courses = [
  { image: course1, title: "Learn Figma from Basic", author: "purepixel studio", rating: 4.5, level: "Beginner", price: 25 },
  { image: course2, title: "Build Digital Asset", author: "purepixel studio", rating: 4.5, level: "Beginner", price: 25 },
  { image: course3, title: "the Power of Big Data", author: "purepixel studio", rating: 4.5, level: "Beginner", price: 25 },
  { image: course4, title: "Balancing Productivity and Life", author: "purepixel studio", rating: 4.5, level: "Beginner", price: 25 },
  { image: course5, title: "Mastering Money Management", author: "purepixel studio", rating: 4.5, level: "Beginner", price: 25 },
  { image: course6, title: "From Idea to Startup Success", author: "purepixel studio", rating: 4.5, level: "Beginner", price: 25 },
];

function CourseCard({ course }) {
  return (
     <div className="rounded-2xl border border-shuttle-200 p-3 shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative overflow-hidden rounded-xl">
        <img src={course.image} alt={course.title} className="h-44 w-full object-cover" />
        <div className="absolute bottom-2 left-2 flex gap-1.5">
          <span className="rounded-full bg-black/50 px-2 py-1 text-[10px] text-white">17 Lessons</span>
          <span className="rounded-full bg-black/50 px-2 py-1 text-[10px] text-white">2 hours 16 mins</span>
        </div>
      </div>

      <div className="mt-3 flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-shuttle-950">{course.title}</h3>
        <span className="flex shrink-0 items-center gap-1 text-xs text-shuttle-500">
          <Star size={12} className="fill-lime-500 text-lime-500" />
          {course.rating}
        </span>
      </div>
      <p className="text-xs text-primary-700">by {course.author}</p>

      <div className="mt-3 flex items-center justify-between">
        <span className="flex items-center gap-1 rounded-full bg-shuttle-50 px-3 py-1 text-[11px] text-shuttle-600">
          <BarChart2 size={12} />
          {course.level}
        </span>
        <img src={avatars} alt="" className="h-5 w-auto" />
      </div>

      <p className="mt-3 text-sm font-semibold text-primary-800">
        ${course.price} <span className="text-xs font-normal text-shuttle-400">/lifetime</span>
      </p>
    </div>
  );
}

export default function Courses() {
  const [active, setActive] = useState("Featured");

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1200px] px-5 xl:px-0">
        <div className="mx-auto max-w-[917px] text-center">
          <h2 className="text-[28px] sm:text-[36px]">Discover Your Passion,<br/> Build Your Skills</h2>
          <p className="mt-4 text-sm text-shuttle-500 sm:text-base">
            At Bytespace Courses, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields, from technology to
            the arts, and make a difference in your career and life.
          </p>
        </div>
<div className="mt-8 flex flex-col items-center gap-3">
  {categoryRows.map((row, i) => (
    <div key={i} className="flex flex-wrap justify-center gap-3">
      {row.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`cursor-pointer rounded-full px-4 py-2 text-sm transition-colors ${
            active === cat
              ? "bg-lime-400 text-shuttle-950"
              : "bg-shuttle-50 text-shuttle-600 hover:bg-shuttle-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  ))}
</div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <CourseCard key={i} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}