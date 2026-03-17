import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Award,
  BookOpen,
  Globe,
  GraduationCap,
  MessageCircle,
  Star,
} from "lucide-react";
import { motion } from "motion/react";

const courses = [
  {
    icon: <Star className="text-primary" size={24} />,
    name: "Japanese Language Course",
    desc: "Comprehensive Japanese from basics to advanced, covering all four language skills.",
    level: "All Levels",
    duration: "6 Months",
  },
  {
    icon: <Globe className="text-primary" size={24} />,
    name: "English Language Course",
    desc: "Build fluent English for academic and professional use with structured curriculum.",
    level: "All Levels",
    duration: "4 Months",
  },
  {
    icon: <MessageCircle className="text-primary" size={24} />,
    name: "Spoken English",
    desc: "Focus on confidence and daily communication skills through interactive sessions.",
    level: "Beginner–Intermediate",
    duration: "2 Months",
  },
  {
    icon: <BookOpen className="text-primary" size={24} />,
    name: "Beginner Japanese",
    desc: "Introduction to hiragana, katakana, and basic conversational phrases.",
    level: "Beginner",
    duration: "3 Months",
  },
  {
    icon: <GraduationCap className="text-primary" size={24} />,
    name: "Intermediate Japanese",
    desc: "Deepen grammar, kanji, and conversation skills with structured practice.",
    level: "Intermediate",
    duration: "3 Months",
  },
  {
    icon: <Award className="text-primary" size={24} />,
    name: "JLPT Preparation",
    desc: "Targeted exam preparation for JLPT N5–N2 with mock tests and strategies.",
    level: "Intermediate–Advanced",
    duration: "4 Months",
  },
];

const ocidMap = [
  "courses.item.1",
  "courses.item.2",
  "courses.item.3",
  "courses.item.4",
  "courses.item.5",
  "courses.item.6",
];

const enrollOcidMap = [
  "courses.enroll_button.1",
  "courses.enroll_button.2",
  "courses.enroll_button.3",
  "courses.enroll_button.4",
  "courses.enroll_button.5",
  "courses.enroll_button.6",
];

export default function CoursesSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="courses" className="py-24 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Our Programs
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Courses We Offer
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            From beginner to advanced — find the right program to reach your
            language goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <motion.div
              key={course.name}
              data-ocid={ocidMap[idx]}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                {course.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                {course.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {course.desc}
              </p>
              <div className="flex items-center gap-2 mb-5">
                <Badge variant="secondary" className="text-xs font-medium">
                  {course.level}
                </Badge>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground font-medium">
                  {course.duration}
                </span>
              </div>
              <Button
                data-ocid={enrollOcidMap[idx]}
                onClick={scrollToContact}
                variant="outline"
                className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-semibold"
              >
                Enroll
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
