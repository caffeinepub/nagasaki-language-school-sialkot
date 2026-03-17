import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Ali Hassan",
    avatar: "/assets/generated/student-avatar-1.dim_120x120.jpg",
    fallback: "AH",
    text: "This institute is best for everyone. The teachers are supportive and the environment is perfect for learning Japanese.",
    stars: 5,
    course: "Japanese Language Course",
  },
  {
    name: "Sana Malik",
    avatar: "/assets/generated/student-avatar-2.dim_120x120.jpg",
    fallback: "SM",
    text: "The best school for learning Japanese. I passed my JLPT N4 exam thanks to this school's excellent preparation.",
    stars: 5,
    course: "JLPT Preparation",
  },
  {
    name: "Usman Tariq",
    avatar: "/assets/generated/student-avatar-3.dim_120x120.jpg",
    fallback: "UT",
    text: "Amazing experience! The spoken English course gave me confidence to speak fluently in just 2 months.",
    stars: 5,
    course: "Spoken English",
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-1 mb-5">
    {["a", "b", "c", "d", "e"].slice(0, count).map((key) => (
      <Star key={key} size={16} className="fill-amber-400 text-amber-400" />
    ))}
  </div>
);

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Student Reviews
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            What Our Students Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col"
            >
              <StarRating count={t.stars} />

              {/* Quote */}
              <p className="text-foreground/80 leading-relaxed mb-6 flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 ring-2 ring-primary/20">
                  <AvatarImage src={t.avatar} alt={t.name} />
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">
                    {t.fallback}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.course}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
