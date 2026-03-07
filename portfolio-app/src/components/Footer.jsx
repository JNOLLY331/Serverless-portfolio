import {
  ArrowUp,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Facebook,
} from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────── */

const navLinks = [
  { label: "Home",     href: "#hero"     },
  { label: "About",    href: "#about"    },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills"   },
  { label: "Contact",  href: "#contact"  },
];

const socialLinks = [
  { icon: Github,    href: "https://github.com/JNOLLY331", label: "GitHub"    },
  { icon: Linkedin,  href: "#", label: "LinkedIn"  },
  { icon: Twitter,   href: "#", label: "Twitter"   },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook,  href: "https://www.facebook.com/profile.php?id=100089754631582", label: "Facebook"    },
];

/* ─── Component ─────────────────────────────────────────────── */

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden text-lg">

      {/* ── Decorative background ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[220px] rounded-full bg-primary/5 blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="fgrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fgrid)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto max-w-5xl px-5">

        {/* ── Top section ── */}
        <div className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

          {/* ── Col 1: Brand ── */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <a href="#hero" className="inline-block">
              <span className="text-xl font-bold tracking-tight">
                Japheth<span className="text-primary">.</span>
              </span>
            </a>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[260px]">
              Crafting thoughtful digital experiences — one line of code at a time.
            </p>
            {/* Socials */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                >
                  <Icon className="h-7 w-7" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[15px] font-bold tracking-[0.25em] uppercase text-muted-foreground/60 mb-4">
              Quick Links
            </p>
            {/* Mobile: horizontal pill row | Desktop: vertical list */}
            <ul className="flex flex-wrap justify-center md:justify-start md:flex-col gap-2 md:gap-0 md:space-y-2.5">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  {/* Mobile pill */}
                  <a
                    href={href}
                    className="md:hidden inline-flex px-3 py-1.5 rounded-full border border-border/50 text-lg font-medium text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                  >
                    {label}
                  </a>
                  {/* Desktop list item */}
                  <a
                    href={href}
                    className="hidden md:flex items-center gap-1.5 text-lg text-muted-foreground hover:text-primary transition-colors duration-200 group"
                  >
                    <span className="h-px w-3 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact ── */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-[15px] font-bold tracking-[0.25em] uppercase text-muted-foreground/60 mb-4">
              Get In Touch
            </p>
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <a
                href="mailto:japhethanold2@gmail.com"
                className="inline-flex items-center gap-2.5 text-lg text-muted-foreground hover:text-primary transition-colors duration-200 group"
              >
                <div className="shrink-0 p-1.5 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                  <Mail className="h-3 w-3 text-primary" />
                </div>
                <span className="text-lg sm:text-lg break-all">japhethanold2@gmail.com</span>
              </a>
              <p className="text-lg text-muted-foreground/60 leading-relaxed max-w-[220px]">
                Open to freelance, full-time roles, and exciting collaborations.
              </p>
              <a
                href="#contact"
                className="cosmic-button inline-flex items-center gap-2 px-4 py-2 text-lg font-semibold tracking-wide mt-1"
              >
                Start a Conversation
              </a>
            </div>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* ── Bottom bar ── */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">

          {/* Back to top — first on mobile for thumb reach */}
          <a
            href="#hero"
            aria-label="Back to top"
            className="group flex items-center gap-2 text-lg text-muted-foreground hover:text-primary transition-colors duration-200 order-1 sm:order-3"
          >
            <span className="font-bold">Back to top</span>
            <div className="p-1.5 animate-bounce font-bold text-primary/60 rounded-full border border-border/60 group-hover:border-primary/40 border-primary/40 group-hover:bg-primary/10 transition-all duration-200">
              <ArrowUp
                size={15}
                className="group-hover:-translate-y-0.5 transition-transform duration-500 text-primary"
              />
            </div>
          </a>

          <p className="text-lg text-muted-foreground/40 order-2 text-center font-bold">
            Designed &amp; Maintained by{" "}
            <span className="text-primary/60 font-bold">Japheth Anold</span>
          </p>

          <p className="text-lg font-bold text-muted-foreground/50 text-center order-3 sm:order-1">
            &copy; {year} Japheth Anold. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};