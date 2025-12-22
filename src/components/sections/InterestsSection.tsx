import { Car, Swords, Lightbulb, Wrench, BookOpen } from "lucide-react";

const interests = [
  {
    icon: Car,
    title: "Motorsport & Formula 1",
    description: "I closely follow Formula 1 and major motorsport championships, drawing inspiration from the engineering precision, data-driven decision-making, and continuous innovation that define the sport.",
  },
  {
    icon: Swords,
    title: "UFC & Competitive Sports",
    description: "I enjoy watching UFC and high-intensity sports for the discipline, resilience, and strategic thinking they showcase. These qualities motivate me to maintain consistency and push beyond comfort zones.",
  },
  {
    icon: Lightbulb,
    title: "Exploring Emerging Technologies",
    description: "I regularly explore new advancements in AI, IoT, embedded hardware, and full-stack development. This curiosity helps me stay updated with evolving tools, architectures, and best practices.",
  },
  {
    icon: Wrench,
    title: "Building Personal Projects & Prototypes",
    description: "I frequently experiment with microcontrollers, wireless communication modules, and web technologies to create small-scale systems or test new ideas.",
  },
  {
    icon: BookOpen,
    title: "Tech Innovation & Learning",
    description: "I enjoy diving into research papers, developer documentation, and open-source projects to understand how high-performance systems are designed and optimized.",
  },
];

const InterestsSection = () => {
  return (
    <section id="interests" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">10.</span>
          <h2 className="section-heading mb-0">Inspiration & Interests</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => {
            const IconComponent = interest.icon;
            return (
              <div 
                key={index}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                  {interest.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {interest.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
