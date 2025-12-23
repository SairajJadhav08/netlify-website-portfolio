import { Sparkles, Zap, Bot, Workflow, Rocket, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, staggerItemVariants } from "@/components/ui/animated-section";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
      { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
      { name: "C/C++", icon: "https://skillicons.dev/icons?i=cpp" },
      { name: "HTML5/CSS3", icon: "https://skillicons.dev/icons?i=html" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React.js", icon: "https://skillicons.dev/icons?i=react" },
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
      { name: "FastAPI", icon: "https://skillicons.dev/icons?i=fastapi" },
      { name: "Flask", icon: "https://skillicons.dev/icons?i=flask" },
    ],
  },
  {
    title: "AI & IoT",
    skills: [
      { name: "TensorFlow", icon: "https://skillicons.dev/icons?i=tensorflow" },
      { name: "OpenCV", icon: "https://skillicons.dev/icons?i=opencv" },
      { name: "YOLOv8", icon: "https://skillicons.dev/icons?i=python" },
      { name: "ESP32", icon: "https://skillicons.dev/icons?i=arduino" },
      { name: "Raspberry Pi", icon: "https://skillicons.dev/icons?i=raspberrypi" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
      { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
      { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
      { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
      { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
    ],
  },
];

const specialFocus = [
  "Embedded Systems & Firmware",
  "Smart Alert Systems",
  "UI/UX & Prototyping",
  "ML Pipelines & Bio-Analytics",
  "Cloud-integrated IoT Applications",
];

type GenAITool = {
  name: string;
  icon: string | null;
  fallbackIcon: React.ElementType;
};

const genAITools: GenAITool[] = [
  { name: "Cursor", icon: "/images/cursor-logo.png", fallbackIcon: Sparkles },
  { name: "Windsurf", icon: "/images/windsurf-logo.svg", fallbackIcon: Zap },
  { name: "GitHub Copilot", icon: "/images/github-copilot-logo.svg", fallbackIcon: Bot },
  { name: "n8n", icon: "/images/n8n-logo.png", fallbackIcon: Workflow },
  { name: "Antigravity", icon: null, fallbackIcon: Rocket },
  { name: "Onemind", icon: null, fallbackIcon: Brain },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono">03.</span>
            <h2 className="section-heading mb-0">Skills & Technologies</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" staggerDelay={0.1}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="glass-card p-6"
              variants={staggerItemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <img src={skill.icon} alt={skill.name} loading="lazy" className="w-6 h-6" />
                    <span className="text-muted-foreground">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Special Focus */}
        <AnimatedSection delay={0.2}>
          <motion.div
            className="glass-card p-6 mb-6"
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-primary">Special Focus</h3>
            <div className="flex flex-wrap gap-3">
              {specialFocus.map((focus, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-secondary rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  {focus}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* GenAI Tools */}
        <AnimatedSection delay={0.3}>
          <motion.div
            className="glass-card p-6"
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-primary">GenAI Tools</h3>
            <div className="flex flex-wrap gap-4">
              {genAITools.map((tool, index) => {
                const FallbackIcon = tool.fallbackIcon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 px-4 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {tool.icon ? (
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        loading="lazy"
                        className="w-6 h-6 rounded"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    <FallbackIcon className={`w-5 h-5 text-primary ${tool.icon ? 'hidden' : ''}`} />
                    <span>{tool.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SkillsSection;
