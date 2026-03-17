import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  {
    label: "Speaking Practice",
    desc: "Real conversation-focused sessions from day one",
  },
  {
    label: "Professional Instruction",
    desc: "Experienced teachers with international certifications",
  },
  {
    label: "Student Success",
    desc: "Proven track record of JLPT and career outcomes",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              About Our School
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              About Nagasaki
              <br />
              <span className="text-primary">Language School</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nagasaki Language School Sialkot is a language institute dedicated
              to helping students learn Japanese and other international
              languages in a supportive, professional environment. We believe
              every student can achieve fluency with the right guidance.
            </p>

            <div className="space-y-4">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle size={14} className="text-primary" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">
                      {item.label}
                    </span>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl -rotate-2" />
            <img
              src="/assets/generated/about-classroom.dim_700x500.jpg"
              alt="Nagasaki Language School classroom"
              className="relative rounded-2xl w-full object-cover shadow-card"
              style={{ aspectRatio: "700/500" }}
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-xl">
              <div className="font-display font-bold text-3xl">500+</div>
              <div className="text-sm font-medium opacity-90">
                Students Enrolled
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
