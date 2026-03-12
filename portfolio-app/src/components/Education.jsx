import React from 'react';
import { 
  PenTool, 
  Palette, 
  Code, 
  GraduationCap, 
  BookOpen, 
  CheckCircle,
  Award
} from 'lucide-react';

const Education = () => {
  const experiences = [
    {
      title: "Academic Content Writer",
      company: "Freelance & Educational Platforms",
      period: "2023 - Present",
      icon: <PenTool className="w-6 h-6" />,
      isCurrent: true,
      description: "Specializing in high-quality academic research, technical documentation, and educational content. Synthesizing complex Computer Science concepts into clear, structured prose.",
      skills: ["Technical Writing", "Research", "Content Strategy"]
    },
    {
      title: "UI/UX & Visual Designer",
      company: "Creative Pulse Studio",
      period: "2023 - Present",
      icon: <Palette className="w-6 h-6" />,
      description: "Designing intuitive user interfaces and building cohesive brand identities. Focused on creating user-centric digital experiences.",
      skills: ["Figma", "Adobe Suite", "Prototyping"]
    },
    {
      title: "Junior Web Developer",
      company: "Freelance Projects",
      period: "2023 - Present",
      icon: <Code className="w-6 h-6" />,
      description: "Developed responsive web applications using modern frontend technologies. Collaborated with clients to translate business requirements into efficient code."
    }
  ];

  return (
    <section id="resume" className="py-16 md:py-24 bg-background text-foreground overflow-hidden">
     <h1 className='font-bold text-4xl uppercase text-primary/40 pb-5'>Education</h1>
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Grid - Stacks on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          <div className="animate-fade-in text-left">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-lg">
              Bridging the gap between technical implementation and creative communication.
            </p>
          </div>
          <div className="animate-fade-in-delay-1 text-left hidden lg:block">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Education
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Background</h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-lg">
              A solid academic foundation supplemented by professional certification.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          
          {/* Experience Column */}
          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className={`card-hover bg-card border border-border p-6 md:p-8 rounded-2xl relative animate-fade-in-delay-${i+1}`}>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    {exp.icon}
                  </div>
                  {exp.isCurrent && (
                    <span className="text-[10px] font-bold text-primary border border-primary/30 px-2 py-0.5 rounded uppercase tracking-tighter">
                      Current
                    </span>
                  )}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-1">{exp.title}</h3>
                <p className="text-slate-400 font-medium text-sm md:text-base mb-2">{exp.company}</p>
                <span className="inline-block bg-primary/10 text-primary text-[10px] md:text-[11px] font-bold px-3 py-1 rounded-md mb-4 italic">
                  {exp.period}
                </span>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base mb-6">
                  {exp.description}
                </p>
                {exp.skills && (
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <span key={skill} className="text-[9px] md:text-[10px] font-bold border border-primary/20 text-primary/80 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Education Header for Mobile (Only visible when stacked) */}
          <div className="lg:hidden animate-fade-in mt-4">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Education
            </span>
            <h2 className="text-3xl font-bold mb-2">Academic Background</h2>
          </div>

          {/* Education Column */}
          <div className="relative pl-8 md:pl-12 space-y-10 md:space-y-12">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border"></div>

            {/* Edu Item 1 */}
            <div className="relative animate-fade-in-delay-2">
              <div className="absolute -left-[30px] md:-left-[38px] top-0 w-10 h-10 md:w-12 md:h-12 bg-card border border-border rounded-full flex items-center justify-center text-primary z-10">
                <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="bg-card border border-border p-6 md:p-8 rounded-2xl card-hover">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-3">
                  <span className="text-primary font-bold text-xs md:text-sm italic">2022 - Present</span>
                  <span className="text-slate-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest">Bachelor's Degree</span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold mb-1">BSc. Computer Science</h4>
                <p className="text-slate-400 font-medium mb-4 text-sm md:text-base">Moi University, Kenya</p>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base mb-6">
                  Focus on Software Engineering and System Design. Actively engaged in technical research.
                </p>
                <div className="flex items-center gap-2 text-primary font-bold text-xs md:text-sm bg-primary/5 w-fit px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-primary/10">
                  <Award className="w-4 h-4" />
                  <span>First Class Honours Track</span>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="relative animate-fade-in-delay-4">
              <div className="absolute -left-[30px] md:-left-[38px] top-0 w-10 h-10 md:w-12 md:h-12 bg-primary border-4 border-background rounded-full flex items-center justify-center text-white z-10">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="bg-card border border-border p-6 md:p-8 rounded-2xl card-hover">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-4">
                  <span className="text-primary font-bold text-xs md:text-sm italic">2023 - 2026</span>
                  <span className="text-slate-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest">Professional Development</span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold mb-6">Technical Certifications</h4>
                <div className="space-y-3">
                  {[
                    { name: "UI/UX Design", year: "2026" },
                    { name: "AI & Machine Learning", year: "2025" },
                    { name: "Google Data Analytics", year: "2024" }
                  ].map((cert, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="text-slate-300 font-medium text-sm md:text-base">{cert.name}</span>
                      <span className="bg-primary/10 text-primary text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded">
                        {cert.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Education;