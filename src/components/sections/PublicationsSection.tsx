import { FileText, ExternalLink } from "lucide-react";

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">08.</span>
          <h2 className="section-heading mb-0">Publications</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        <div className="glass-card p-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">
                Smart Regional Alert and Navigation System
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                <span className="text-primary">Authors:</span> Sairaj Jadhav, Sujata Jadhav, Minakshi Ghodella, Hardik Jain, Dipannita Mondal
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                <span className="text-primary">Published in:</span> International Journal on Advanced Computer Theory and Engineering
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                Volume 14, Issue 1 (2025) | Published: June 6, 2025
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Internet of Things", "Security", "RF", "Attacks"].map((keyword, i) => (
                  <span key={i} className="px-3 py-1 bg-secondary rounded-full text-xs">
                    {keyword}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6">
                The Internet of Things (IoT) is reshaping security systems by enabling real-time communication 
                and surveillance through cloud integration. This study proposes a smart, cost-effective emergency 
                response framework that combines IoT and RF technology.
              </p>
              <a 
                href="https://journals.mriindia.com/index.php/ijacte/article/view/608"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-4 h-4" />
                View Paper
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
