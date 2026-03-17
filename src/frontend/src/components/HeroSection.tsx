import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-banner.dim_1400x600.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-primary/70 to-foreground/60" />

      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-8 text-sm font-medium">
            <span>🎌</span>
            <span>Sialkot's Premier Language Institute</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            Master Japanese &amp;
            <br />
            <span className="text-white/90">Global Languages</span>
            <br />
            <span className="text-white/80 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              in Sialkot.
            </span>
          </h1>

          <p className="font-body text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            Nagasaki Language School helps students build language skills for
            study, career, and international opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              data-ocid="hero.primary_button"
              size="lg"
              onClick={() => scrollTo("#contact")}
              className="bg-white text-primary hover:bg-white/90 font-bold text-base px-8 py-6 shadow-xl"
            >
              Enroll Now
            </Button>
            <Button
              data-ocid="hero.secondary_button"
              size="lg"
              variant="outline"
              onClick={() => scrollTo("#contact")}
              className="border-white/70 text-white bg-transparent hover:bg-white/10 font-semibold text-base px-8 py-6"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            type="button"
            onClick={() => scrollTo("#about")}
            className="text-white/70 hover:text-white transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
