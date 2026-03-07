import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const SkillCounter = ({ targetLevel, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000; 
    const incrementTime = duration / targetLevel;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= targetLevel) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [targetLevel, isVisible]);

  return <>{count}%</>;
};

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Django", level: 80, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-10 px-4 relative bg-background overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center tracking-tighter">
          TECHNICAL <span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]">SKILLS</span>
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-7 py-2 rounded-lg transition-all duration-500 capitalize font-bold border-2",
                activeCategory === category
                  ? "bg-primary border-primary text-primary-foreground shadow-[0_0_25px_rgba(var(--primary),0.6)] scale-110"
                  : "bg-transparent border-white/10 text-muted-foreground hover:border-primary/50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredSkills.map((skill, idx) => (
            <div
              key={`${activeCategory}-${skill.name}`}
              className={cn(
                "bg-card p-6 rounded-lg shadow-xs card-hover relative bg-secondary/5 border border-white/10 p-10 transition-all gradient-border p-6",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="flex justify-between items-end mb-8">
                <h3 className="font-black text-2xl group-hover:text-primary transition-colors"> 
                  {skill.name}
                </h3>
                <span className="text-xl font-mono font-black text-primary italic">
                  <SkillCounter targetLevel={skill.level} isVisible={isVisible} />
                </span>
              </div>

              {/* Progress Bar with High Shadow */}
              <div className="w-full bg-gray-500 rounded-full overflow-hidden p-0 border border-white/5 shadow-lg">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ 
                    width: isVisible ? `${skill.level}%` : "0%",
                    boxShadow: "0 0 20px 2px rgba(var(--primary), 0.8)" // High Glow Shadow
                  }}
                >
                  {/* Glass sheen effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-30" />
                </div>
              </div>
              
              {/* Bottom Decorative Shadow */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-1 bg-primary/0 group-hover:bg-primary/40 blur-md transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};