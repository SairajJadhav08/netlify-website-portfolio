import { ExternalLink, GitBranch } from "lucide-react";

const OpenSourceSection = () => {
  return (
    <section id="opensource" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">05.</span>
          <h2 className="section-heading mb-0">Open Source Contribution</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        <div className="glass-card p-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <GitBranch className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">brkrs</h3>
              <p className="text-muted-foreground">Start of My OSS Journey</p>
            </div>
            <a 
              href="https://github.com/cleder/brkrs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-2 text-primary hover:underline"
            >
              View Repository <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          <p className="text-muted-foreground mb-6">
            This project marks the beginning of my open-source journey. I intentionally started with
            beginner-friendly issues to understand the project structure, contribution workflow, and
            collaboration style before moving on to more complex bug fixes and feature development.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">My Initial Contributions</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Took up introductory issues to get familiar with the codebase and the maintainer's development process.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Worked on entry-level tasks such as enhancing the demo webpage and clarifying documentation.
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">My Next Steps</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Tackling Core Logic & Bug Fixes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Implementing New Features & Enhancements
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Deepening My Involvement in the OSS Workflow
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="font-semibold text-primary mb-3">Skills Being Built</h4>
            <div className="flex flex-wrap gap-2">
              {["Rust & Bevy ecosystem", "Frontend polishing (HTML/CSS)", "Open-source collaboration", "Technical communication"].map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-secondary rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
