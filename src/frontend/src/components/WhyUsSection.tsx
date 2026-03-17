import { BookOpen, Heart, Lightbulb, MessageCircle, Users } from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    icon: <BookOpen size={28} className="text-primary" />,
    title: "Professional Language Instructors",
    desc: "Our teachers are experienced professionals with formal qualifications and a passion for language education.",
  },
  {
    icon: <Heart size={28} className="text-primary" />,
    title: "Friendly Learning Environment",
    desc: "We foster a warm, supportive atmosphere where every student feels confident to practice and grow.",
  },
  {
    icon: <MessageCircle size={28} className="text-primary" />,
    title: "Focus on Communication Skills",
    desc: "Our curriculum emphasizes real-world speaking and listening so you can communicate from day one.",
  },
  {
    icon: <Users size={28} className="text-primary" />,
    title: "Small Class Sizes",
    desc: "Limited enrollment ensures every student gets personal attention and ample speaking opportunities.",
  },
  {
    icon: <Lightbulb size={28} className="text-primary" />,
    title: "Practical Learning Methods",
    desc: "Interactive activities, role-play, and real-world scenarios make learning effective and engaging.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Our Advantage
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Why Choose Nagasaki
            <br />
            <span className="text-primary">Language School?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                {reason.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
