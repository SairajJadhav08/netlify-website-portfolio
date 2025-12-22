import { GraduationCap } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";

const education = [
  {
    period: "2015 – 2021",
    title: "Secondary Education",
    institution: "Jog English Medium Secondary School and Jr.college",
    grade: "SSC 82.40%",
    description: "Completed secondary education with strong academic performance.",
  },
  {
    period: "2021 - 2023",
    title: "Higher Secondary Education (HSC)",
    institution: "Abasaheb Garware College of Arts and Science, Pune",
    grade: "HSC 70.33%",
    description: "Science stream with focus on Mathematics and Computer Science.",
  },
  {
    period: "2023 - 2027",
    title: "BTech in AI & Data Science",
    institution: "Dr. D.Y. Patil College of Engineering, Pune",
    grade: "Overall 8.11 CGPA",
    semesters: [
      { sem: "Sem 1", grade: "9.03" },
      { sem: "Sem 2", grade: "7.71" },
      { sem: "Sem 3", grade: "7.47" },
      { sem: "Sem 4", grade: "8.23" },
    ],
    description: "Specializing in Artificial Intelligence, Machine Learning, Data Science, and Full-Stack Development.",
  },
];

const cardVariants: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? 60 : -60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono">02.</span>
            <h2 className="section-heading mb-0">Education</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </AnimatedSection>
        
        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          />
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-6 z-10 shadow-lg shadow-primary/50"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                />
                
                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div 
                    className="glass-card p-6 hover:border-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <span className="text-primary font-mono text-sm">{edu.period}</span>
                    <h3 className="text-xl font-bold mt-2 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      {edu.title}
                    </h3>
                    <p className="text-muted-foreground mt-1">{edu.institution}</p>
                    <p className="text-primary font-semibold mt-2">{edu.grade}</p>
                    
                    {edu.semesters && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {edu.semesters.map((sem, i) => (
                          <motion.span 
                            key={i} 
                            className="px-3 py-1 bg-secondary rounded-full text-xs"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {sem.sem}: <span className="text-primary">{sem.grade}</span>
                          </motion.span>
                        ))}
                      </div>
                    )}
                    
                    <p className="text-muted-foreground text-sm mt-3">{edu.description}</p>
                  </motion.div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
