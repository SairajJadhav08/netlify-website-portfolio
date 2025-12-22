import { Globe } from "lucide-react";

const languages = [
  { name: "English", proficiency: "Professional Proficiency", level: 90 },
  { name: "Marathi", proficiency: "Native Speaker", level: 100 },
  { name: "Hindi", proficiency: "Fluent", level: 95 },
];

const LanguagesSection = () => {
  return (
    <section id="languages" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">11.</span>
          <h2 className="section-heading mb-0">Languages Spoken</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {languages.map((language, index) => (
            <div 
              key={index}
              className="glass-card p-6 text-center hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                {language.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {language.proficiency}
              </p>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-1000"
                  style={{ width: `${language.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
