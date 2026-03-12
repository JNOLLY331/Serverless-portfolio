import { Briefcase, Code, User, Network, MessageSquare, FileText } from "lucide-react";

export const AboutSection = () => {
  const skills = [
    {
      title: "Web Apps Development",
      desc: "Building scalable apps with React, Tailwind, and modern frameworks.",
      icon: Code,
    },
    {
      title: "UI/UX Design",
      desc: "Crafting intuitive interfaces that prioritize user journey and aesthetics.",
      icon: User,
    },
    {
      title: "Project Management",
      desc: "Utilizing Agile methodologies to deliver projects on time and in scope.",
      icon: Briefcase,
    },
    {
      title: "Computer Networks",
      desc: "Designing and maintaining robust network infrastructures and security.",
      icon: Network,
    },
  ];

  return (
    <section id="about" className="py-5 px-4 relative overflow-hidden bg-background text-foreground">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            About <span className="text-primary text-glow">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>
 
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bio */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in-delay-1 bg-card border border-border p-8 md:p-10 rounded-3xl shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              Passionate <span className="text-primary">Web Developer</span> & <br className="hidden md:block" /> Tech Enthusiast
            </h3>
            
            <div className="space-y-6 text-left">
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
                With a deep focus on modern web ecosystems, I specialize in creating 
                <span className="text-foreground font-medium"> responsive, accessible, and performant</span> web applications. 
              </p>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
                I thrive on turning complex problems into elegant, functional solutions. My approach 
                is rooted in continuous learning—I embrace challenges and mistakes as 
                essential steps toward mastering the ever-evolving tech landscape.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6 justify-start">
              <a href="#contact" className="cosmic-button flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Get In Touch
              </a>

              <a
                href="/resumee.pdf"
                download="japheth_Anold_Resumee"
                className="group flex items-center gap-2 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300 font-medium"
              >
                <FileText className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column: Skill Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4 animate-fade-in-delay-2">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="gradient-border p-5 card-hover group bg-card/50">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {skill.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-snug mt-1">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};