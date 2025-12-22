import { Cpu, Brain, Users, Zap, Heart, Target } from "lucide-react";

const strengths = [
  {
    icon: Cpu,
    title: "Technical Versatility",
    description: "Able to work across full-stack development, embedded systems, and AI/ML applications, with experience building impactful solutions such as viral analytics platforms, IoT alert systems, and assistive technologies.",
  },
  {
    icon: Brain,
    title: "Analytical Problem-Solving",
    description: "Strong ability to dissect complex challenges and design efficient, scalable solutions—whether in wireless communication networks, embedded firmware, or machine learning pipelines.",
  },
  {
    icon: Users,
    title: "Leadership & Ownership",
    description: "Led end-to-end development for projects like Viro-AI and the Smart Regional Alert & Navigation System, managing architecture, implementation, and cross-functional decision-making.",
  },
  {
    icon: Zap,
    title: "Rapid Learning & Adaptability",
    description: "Quick at mastering new tools, frameworks, and technologies. Comfortable working in fast-evolving fields like AI, IoT, bioinformatics, and full-stack development.",
  },
  {
    icon: Heart,
    title: "User-Centered Design Thinking",
    description: "Consistently integrates accessibility and usability into engineering solutions, demonstrated through devices like Braillear, designed for visually impaired learners.",
  },
  {
    icon: Target,
    title: "Attention to Detail & System Reliability",
    description: "Capable of designing systems that emphasize precision, reliability, and stability—whether handling sensitive genomic data, implementing long-range communication, or developing embedded hardware interfaces.",
  },
];

const StrengthsSection = () => {
  return (
    <section id="strengths" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">09.</span>
          <h2 className="section-heading mb-0">Strengths</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((strength, index) => {
            const IconComponent = strength.icon;
            return (
              <div 
                key={index}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                  {strength.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {strength.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
