import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Facebook,
  Twitter,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";

/* ─── Data ─────────────────────────────────────────────────── */

const socialLinks = [
  { icon: Linkedin,  href: "#", label: "LinkedIn"  },
  { icon: Twitter,   href: "#", label: "Twitter"   },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook,    href: "#", label: "Facebook"    },
];

const contactInfo = [
  { icon: Mail,   label: "Email",    display: "japhethanold03@gmail.com",       href: "mailto:hello@gmail.com" },
  { icon: Phone,  label: "Phone",    display: "+254(7)-04345035",     href: "tel:+254704345035"        },
  { icon: MapPin, label: "Location", display: "Eldoret, Kenya", href: null                     },
];

/* ─── Intersection observer hook ───────────────────────────── */

const useInView = (ref) => {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
};

/* ─── Component ─────────────────────────────────────────────── */

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast]               = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const sectionRef                      = useRef(null);
  const inView                          = useInView(sectionRef);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 4500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      showToast("Message sent! I'll get back to you soon.");
      setIsSubmitting(false);
      e.target.reset();
    }, 1500);
  };

  const inputBase =
    "w-full px-4 pt-7 pb-2.5 rounded-lg border bg-background text-sm transition-all duration-300 placeholder:text-muted-foreground/40 focus:outline-none";

  const fieldClass = (id) =>
    cn(
      inputBase,
      focusedField === id
        ? "border-primary ring-2 ring-primary/20"
        : "border-input hover:border-muted-foreground/40"
    );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-10 px-4 bg-secondary/30 overflow-hidden text-lg"
    >
      {/* ── Background geometry ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cgrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cgrid)" />
        </svg>
      </div>

      {/* ── Toast notification ── */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
      `}</style>
      {toast && (
        <div
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-card border border-primary/30 shadow-2xl shadow-primary/10 rounded-2xl px-5 py-4"
          style={{ animation: "slideUp 0.4s cubic-bezier(.16,1,.3,1) forwards" }}
        >
          <div className="p-1.5 rounded-full bg-primary/15">
            <CheckCircle2 className="h-4 w-4 text-primary" />
          </div>
          <p className="text-sm font-medium">{toast}</p>
        </div>
      )}

      <div className="sm:container mx-auto max-w-5xl relative z-10">

        {/* ── Eyebrow + Heading ── */}
        <div
          className="mb-16 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(28px)" }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Got a project?{" "}
            <span className="text-primary relative inline-block">
              Let's talk.
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-primary/30"
              />
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed text-center">
            I'm always open to new opportunities, collaborations, or just a
            friendly chat about your next big idea.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* ── LEFT: Contact info + socials ── */}
          <div
            className="lg:col-span-2 space-y-6 transition-all duration-700 delay-100"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(32px)" }}
          >

            {/* Info cards */}
            {contactInfo.map(({ icon: Icon, label, display, href }, i) => (
              <div
                key={label}
                className="group flex items-center gap-4 p-2 rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 transition-all duration-300"
                style={{ transitionDelay: `${120 + i * 60}ms` }}
              >
                <div className="shrink-0 p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-semibold hover:text-primary transition-colors duration-200 inline-flex items-center gap-1 group/link"
                    >
                      <span className="truncate">{display}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover/link:opacity-100 -translate-y-0.5 translate-x-0.5 transition-all duration-200" />
                    </a>
                  ) : (
                    <span className="text-sm font-semibold">{display}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Divider */}
            <div className="flex items-center gap-3 py-1">
              <div className="h-px flex-1 bg-border/50" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-muted-foreground/60">
                Find me on
              </span>
              <div className="h-px flex-1 bg-border/50" />
            </div>

            {/* Social grid */}
            <div className="grid grid-cols-4 gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex flex-col items-center gap-1.5 py-1.5 px-2 rounded-xl border border-border/50 bg-card/60 hover:border-primary/50 hover:bg-primary/5 hover:shadow-sm transition-all duration-300"
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                  <span className="text-[10px] font-semibold tracking-wide uppercase text-muted-foreground/50 group-hover:text-primary/60 transition-colors duration-200">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div
            className="lg:col-span-3 transition-all duration-700 delay-200"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(36px)" }}
          >
            <div className="relative bg-card border border-border/60 rounded-2xl p-8 md:p-10 shadow-xl shadow-black/5">

              {/* Corner accent lines */}
              <div aria-hidden className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl pointer-events-none">
                <div className="absolute top-0 right-0 w-px h-14 bg-gradient-to-b from-primary/50 to-transparent" />
                <div className="absolute top-0 right-0 h-px w-14 bg-gradient-to-l from-primary/50 to-transparent" />
              </div>
              <div aria-hidden className="absolute bottom-0 left-0 w-20 h-20 overflow-hidden rounded-bl-2xl pointer-events-none">
                <div className="absolute bottom-0 left-0 w-px h-14 bg-gradient-to-t from-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 h-px w-14 bg-gradient-to-r from-primary/30 to-transparent" />
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold">Send a Message</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  I typically respond within 24 hours.
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>

                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: "name",  type: "text",  label: "Full Name",  placeholder: "Julie tr"   },
                    { id: "email", type: "email", label: "Email",       placeholder: "jnolly123@email.com" },
                  ].map(({ id, type, label, placeholder }) => (
                    <div key={id} className="relative">
                      <label
                        htmlFor={id}
                        className="absolute left-4 top-3 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground/70 pointer-events-none select-none z-10"
                      >
                        {label}
                      </label>
                      <input
                        type={type}
                        id={id}
                        name={id}
                        required
                        placeholder={placeholder}
                        onFocus={() => setFocusedField(id)}
                        onBlur={() => setFocusedField(null)}
                        className={fieldClass(id)}
                      />
                    </div>
                  ))}
                </div>

                {/* Subject */}
                <div className="relative">
                  <label
                    htmlFor="subject"
                    className="absolute left-4 top-3 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground/70 pointer-events-none select-none z-10"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project inquiry, collaboration…"
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    className={fieldClass("subject")}
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-3 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground/70 pointer-events-none select-none z-10"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Hello, I'd like to talk about…"
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={cn(fieldClass("message"), "resize-none")}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button group relative w-full flex items-center justify-center gap-2.5 py-3.5 font-semibold tracking-wide overflow-hidden transition-all duration-300",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {/* Shimmer effect */}
                  <span
                    aria-hidden
                    className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                  />
                  <span>{isSubmitting ? "Sending…" : "Send Message"}</span>
                  <Send
                    size={15}
                    className={cn(
                      "transition-all duration-300",
                      isSubmitting
                        ? "animate-pulse"
                        : "group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    )}
                  />
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};