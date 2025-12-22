import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, staggerItemVariants } from "@/components/ui/animated-section";

const stats = [
  { value: "11", label: "Projects Completed" },
  { value: "3", label: "Hackathon Wins" },
  { value: "4", label: "Competition Wins" },
  { value: "8.11", label: "Overall CGPA" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono">01.</span>
            <h2 className="section-heading mb-0">About Me</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-3 gap-12">
          <AnimatedSection className="lg:col-span-2 space-y-6 text-muted-foreground text-lg leading-relaxed" delay={0.1}>
            <p>
              Hi, I'm <span className="text-foreground font-semibold">Sairaj Jadhav</span>, a third-year AI & Data Science
              engineering student at Dr. D. Y. Patil College of Engineering,
              Pune. I focus on creating technology that addresses real-world challenges through
              a blend of AI, embedded systems, and full-stack development.
            </p>
            
            <p>
              I enjoy designing systems where hardware and software work together—whether it's smart alert networks, IoT-driven safety
              tools, or data-powered analytical platforms. My
              work includes building prototypes, improving user experience, and developing AI/ML models
              that scale.
            </p>
            
            <p>
              I'm currently advancing my full-stack skills through IBM's
              certification program, while actively working on projects involving embedded IoT devices, LoRa
              communication networks, ML pipelines, and smart regional alert systems.
            </p>
            
            <p>
              Beyond academics, I spend my time experimenting with new technologies, participating in
              hackathons, and collaborating on projects that push my technical and creative boundaries.
            </p>
          </AnimatedSection>
          
          {/* Stats */}
          <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={staggerItemVariants}
                className="glass-card p-6 text-center hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className="text-4xl font-bold text-gradient mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
