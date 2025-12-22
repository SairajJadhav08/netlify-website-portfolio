import { Trophy, Award, Medal } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, staggerItemVariants } from "@/components/ui/animated-section";

const achievements = [
  {
    rank: "1st",
    title: "Ideathon Winner",
    organization: "Dr. D.Y. Patil College of Engineering",
    description: "Led team that pitched the project idea which was also selected for Smart India Hackathon 2025.",
    icon: Trophy,
  },
  {
    rank: "2nd",
    title: "National Level Sci-Tech Hackathon 2025",
    organization: "AISSMS College of Engineering, Pune",
    description: "Secured second place for Viro-AI, earning a ₹3000 cash prize and project development support.",
    icon: Award,
  },
  {
    rank: "3rd",
    title: "Hackathought Competition",
    organization: "Dr. D.Y. Patil College of Engineering",
    description: "Recognized for innovative problem-solving and exceptional teamwork.",
    icon: Medal,
  },
  {
    rank: "1st",
    title: "Poster Making Competition - Women's Safety",
    organization: "Dr. D.Y. Patil College of Engineering and Innovation",
    description: "Secured first place for creating an impactful poster advocating for societal accountability and systemic reform.",
    icon: Trophy,
  },
  {
    rank: "R2",
    title: "SciTech Innovation Hackathon 2025 - Round 2",
    organization: "SciTech Park, Pune",
    description: "Team Rakshanu selected for Round 2, recognized for innovative solution demonstrating technical depth and potential real-world impact.",
    icon: Award,
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono">06.</span>
            <h2 className="section-heading mb-0">Achievements & Recognition</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </AnimatedSection>
        
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
              variants={staggerItemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="flex-shrink-0"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{achievement.rank}</span>
                  </div>
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-primary text-sm mb-2">{achievement.organization}</p>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default AchievementsSection;
