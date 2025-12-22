import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, staggerItemVariants } from "@/components/ui/animated-section";

const projects = [
  {
    title: "Smart Regional Alert & Navigation System",
    role: "Backend & Frontend Developer • Team Leader",
    category: "Full-Stack Development",
    description: "Developed a web-based platform that provides real-time regional alerts and navigation assistance for events like power cuts, disease outbreaks, construction work, and disasters.",
    features: [
      "Real-time regional alerts for power cuts, outbreaks & disasters",
      "Alternate route navigation assistance",
      "Interactive map visualization",
      "Community-driven alert system",
      "Emergency notification system",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Firebase"],
    image: "/images/smart-regional-alert.png",
  },
  {
    title: "LiveStream-Card-Recognition-System-LCRS",
    role: "Backend & Frontend Developer • Team Leader",
    category: "Computer Vision",
    description: "Created a real-time playing card detection system using computer vision to identify and classify cards from a live camera feed.",
    features: [
      "Real-time live camera feed processing",
      "Accurate card identification & classification",
      "Deep learning-based object detection",
      "High-speed recognition performance",
      "Interactive gaming integration",
    ],
    technologies: ["Python", "OpenCV", "Deep Learning", "Object Detection", "Pygame"],
    image: "/images/real-time-card-detector.png",
  },
  {
    title: "NutriCare-360",
    role: "Backend & Frontend Developer • Team Leader",
    category: "Healthcare Tech",
    description: "A Flask-based health app that manages prescriptions, medication reminders, nutrition tips, and yoga guidance with a simple, user-friendly interface.",
    features: [
      "Prescription management system",
      "Smart medication reminders",
      "Nutrition tips & guidance",
      "Yoga exercise recommendations",
      "Personalized healthcare dashboard",
    ],
    technologies: ["Python", "Flask", "HTML/CSS", "API Integration"],
    image: "/images/MedVault.png",
  },
  {
    title: "AI Meme Generator",
    role: "Backend & Frontend Developer",
    category: "AI/ML",
    description: "A creative tool that uses artificial intelligence to generate humorous memes from user-provided text, blending creativity with technical skills in NLP and image processing.",
    features: [
      "AI-powered meme generation",
      "Text-to-meme conversion",
      "Natural Language Processing",
      "Image processing & manipulation",
      "Export & share functionality",
    ],
    technologies: ["Python", "NLP", "Pillow", "API"],
    image: "/images/ai-meme-generator.png",
  },
  {
    title: "Viro-AI: Viral Insight Rapid Optimization",
    role: "Backend Developer • Team Leader",
    category: "Machine Learning",
    description: "A comprehensive machine learning platform that combines genomic analysis, drug-virus binding prediction, and clinical outcome forecasting.",
    features: [
      "Genomic sequence analysis",
      "Drug-virus binding prediction",
      "Clinical outcome forecasting",
      "Antiviral drug discovery acceleration",
      "Pandemic preparedness analytics",
    ],
    technologies: ["Python", "Machine Learning", "Deep Learning", "Data Science", "AI"],
    image: "/images/ViroAI.png",
  },
  {
    title: "NetKey-Reveal GUI",
    role: "Backend & Frontend Developer • Team Leader",
    category: "Desktop Application",
    description: "A simple and intuitive desktop tool for Windows that retrieves saved Wi-Fi passwords and displays them in a clean, modern web-based graphical user interface.",
    features: [
      "Retrieve saved Wi-Fi passwords",
      "Modern web-based GUI interface",
      "Display all network credentials",
      "Easy password copying functionality",
      "Secure local storage access",
    ],
    technologies: ["Python", "GUI", "Web", "API"],
    image: "/images/Wifi Password.png",
  },
  {
    title: "AIVORA Labs",
    role: "Research analysis & Development Developer",
    category: "AI & Research Automation",
    description: "Artificial Intelligence for Virtual Observation Research Automation Labs - An advanced AI-powered platform designed to automate virtual observation research processes.",
    features: [
      "AI-powered research automation",
      "Automated data collection & processing",
      "Advanced analytics & insights",
      "Virtual observation capabilities",
      "Intelligent workflow automation",
    ],
    technologies: ["Python", "AI/ML", "Automation", "Research"],
    image: "/images/AIVORA Logo.png",
  },
  {
    title: "BRAILLEAR",
    role: "AI / IoT Developer",
    category: "Assistive Technology",
    description: "Smart Touch-To-Speech Learning System For The Visually Impaired - converts braille text input into audible speech.",
    features: [
      "Touch-based braille input system",
      "Real-time text-to-speech conversion",
      "Accessibility-focused design",
      "Enhanced learning experience",
      "IoT-enabled connectivity",
    ],
    technologies: ["Python", "Text-to-Speech", "Assistive Tech", "IoT"],
    image: "/images/Baillear Logo.png",
  },
  {
    title: "DriveU",
    role: "Frontend Developer",
    category: "Mobility Solutions",
    description: "Effortless Reliable Personal Mobility Access - A comprehensive mobility platform designed to provide seamless and reliable access to personal transportation services.",
    features: [
      "Seamless transportation booking",
      "Real-time location tracking",
      "Transparent pricing & payment",
      "Intuitive mobile interface",
      "Reliable scheduling system",
    ],
    technologies: ["Web Development", "Mobility", "API Integration", "User Experience"],
    image: "/images/Drive uLogo.png",
  },
  {
    title: "MEDLOCUS",
    role: "Lead Developer",
    category: "Healthcare Technology",
    description: "Precision Care Through Smart Management - A smart healthcare management system that leverages intelligent technology to provide precise, personalized care solutions.",
    features: [
      "Medicine inventory management",
      "Expiry tracking & alerts",
      "Advanced search functionality",
      "Supplier management system",
      "RESTful API integration",
    ],
    technologies: ["Healthcare Tech", "Smart Management", "Precision Care", "Data Analytics"],
    image: "/images/Medlocus Logo.png",
  },
  {
    title: "LocalChat-AI (Mike)",
    role: "Lead Developer",
    category: "AI & Chatbot",
    description: "An AI chatbot powered by Ollama, built for fast and private on-device conversations with ChatGPT-style interface.",
    features: [
      "Private on-device processing",
      "ChatGPT-style interface",
      "Conversation history management",
      "Real-time streaming responses",
      "Custom instructions & personalization",
    ],
    technologies: ["Python", "FastAPI", "Ollama", "Llama 3", "AI/ML"],
    image: "/images/Localchat-Ai.png",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono">04.</span>
            <h2 className="section-heading mb-0">Featured Projects</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-300"
              variants={staggerItemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <motion.span
                  className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs rounded-full"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {project.category}
                </motion.span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-primary text-sm mb-3">{project.role}</p>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="space-y-2 mb-4">
                  <p className="text-xs text-muted-foreground font-semibold">Key Features:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-2 py-1 bg-secondary text-xs rounded"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ProjectsSection;
