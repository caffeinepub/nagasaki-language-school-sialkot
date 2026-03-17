import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import {
  AlertCircle,
  CheckCircle,
  Loader2,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) {
      toast.error("Please wait, connecting to server...");
      return;
    }
    setStatus("loading");
    try {
      const id = crypto.randomUUID();
      await actor.submitContactForm(
        id,
        form.name,
        form.email,
        form.phone,
        form.message,
      );
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
      toast.success("Message sent! We'll be in touch soon.");
    } catch {
      setStatus("error");
      toast.error("Failed to send. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Location &amp; Contact
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            Ready to start your language journey? Send us a message or visit us
            in Sialkot.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-secondary/40 rounded-2xl p-8">
              <h3 className="font-display font-bold text-2xl text-foreground mb-6">
                Send Us a Message
              </h3>

              {status === "success" && (
                <div
                  data-ocid="contact.success_state"
                  className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-green-700"
                >
                  <CheckCircle size={20} />
                  <span className="font-medium">
                    Message sent successfully! We&apos;ll contact you soon.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div
                  data-ocid="contact.error_state"
                  className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-red-700"
                >
                  <AlertCircle size={20} />
                  <span className="font-medium">
                    Failed to send. Please try again.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="font-medium mb-2 block">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    data-ocid="contact.input"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="font-medium mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    data-ocid="contact.search_input"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="font-medium mb-2 block">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    data-ocid="contact.input"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+92-XXX-XXXXXXX"
                    className="bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="font-medium mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    data-ocid="contact.textarea"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your language learning goals..."
                    rows={4}
                    required
                    className="bg-white resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={status === "loading"}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-6 text-base"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Address Card */}
            <div className="bg-secondary/40 rounded-2xl p-8">
              <h3 className="font-display font-bold text-2xl text-foreground mb-6">
                Find Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      Address
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      First Floor, Habib Mall
                      <br />
                      Kashmir Road, near Mag Town
                      <br />
                      Pakka Garha Ghumman
                      <br />
                      Sialkot, 51310, Pakistan
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-0.5">
                      Phone
                    </div>
                    <span className="text-muted-foreground">
                      +92-XXX-XXXXXXX
                    </span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/92XXXXXXXXX"
                data-ocid="contact.whatsapp_button"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl px-6 py-3 transition-colors"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-card flex-1 min-h-64">
              <iframe
                title="Nagasaki Language School Sialkot Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.1234567890!2d74.5269!3d32.4945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ef57f02000001%3A0x1234567890abcdef!2sHabib%20Mall%2C%20Kashmir%20Road%2C%20Sialkot!5e0!3m2!1sen!2spk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "256px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-ocid="contact.map_marker"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
