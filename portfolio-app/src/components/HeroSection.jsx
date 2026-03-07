import { ArrowDown } from "lucide-react";
import hero_image from "../assets/hero_image.png";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-12"
    >
      {/* Container to keep content from hitting screen edges */}
      <div className="container  mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT SIDE: Text Content (Occupies 7 columns) */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10 text-left  mt-25">
          <div className="space-y-3 max-w-2xl ">
            <h1 className="text-3xl sm:text-3xl md:text-7xl font-bold tracking-tight leading-tight text-center lg:text-left">
              <span className="opacity-0 animate-fade-in block"> Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Japheth Anold
              </span>
              <span className="text-gradient block opacity-0 animate-fade-in-delay-2">
                {" "}
                Dindi
              </span>
            </h1>

            <p className="text-xl text-center md:text-left md:text-3xl text-muted-foreground opacity-0 animate-fade-in-delay-3 leading-relaxed">
              I create stellar web experiences with modern technologies.
              I focus on <span className="text-primary/90">Fullstack.</span> Am a tech enthusiast with deep passion in web applications,computer Networks and Machine Learning
            </p>

            <div className="pt-2 opacity-0 animate-fade-in-delay-4 flex justify-center lg:justify-start">
              <a
                href="#projects"
                className="cosmic-button px-8 py-3 rounded-full font-medium transition-all"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Contained Image (Occupies 5 columns) */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center">
          <div className="relative aspect-square lg:aspect-auto w-full max-w-400px] md:max-w-md lg:max-w-full h-auto lg:h-[70vh] overflow-hidden rounded-full lg:rounded-2xl border-2 border-[primary] p-1.5 shadow-2xl bg-gray-200">
            <img
              src={hero_image}
              alt="Japheth Anold Dindi (Portrait)"
              className="w-full h-full object-cover scale-120 rounded-full lg:rounded-xl transform hover:scale-140 transition-transform duration-700"
              style={{ objectPosition: "top" }}
            />
          </div>
        </div>
      </div>

      {/* CENTERED Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-20">
        <span className="text-xs uppercase tracking-widest text-muted-foreground mb-3 opacity-70">
          {" "}
          Scroll{" "}
        </span>
        <div className="p-2 rounded-full border border-primary/30">
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>
    </section>
  );
};
