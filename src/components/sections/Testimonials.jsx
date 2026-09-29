import testimonial1 from "../../assets/images/testimonial-1.jpg";
import testimonial2 from "../../assets/images/testimonial-2.jpg";
import testimonial3 from "../../assets/images/testimonial-3.jpg";

const testimonials = [
  {
    photo: testimonial1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    photo: testimonial2,
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    photo: testimonial3,
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function Testimonials() {
  return (
    <section
  className="py-20"
  style={{
    background:
      "radial-gradient(circle at 63% 30%, #ebf096 0%, transparent 25%), " +
      "radial-gradient(circle at 99% 30%, #edf0b4 0%, transparent 10%), " +
      "radial-gradient(circle at 12% 92%, #c4d7f1 0%, transparent 20%), " +
      "#ffffff",
  }}
>
      <div className="mx-auto max-w-[1200px] px-5 xl:px-0">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-sm text-[28px] sm:text-[36px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-md text-sm text-shuttle-500">
            At ByteSpace, our vibrant community of learners and creators is at
            the<br/> heart of what we do. Hear directly from those who have
            experienced the<br/> transformative journey of learning and creating on
            our platform. Explore<br/> testimonials that reflect the diverse
            perspectives of enthusiastic learners<br/> and accomplished creators.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white p-6 shadow-sm">
              <img src={t.photo} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
              <p className="mt-4 text-sm font-semibold text-shuttle-950">{t.name}</p>
              <p className="text-xs text-primary-700">{t.role}</p>
              <p className="mt-4 text-sm italic text-shuttle-500">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}