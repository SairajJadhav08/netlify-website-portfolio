import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, staggerItemVariants } from "@/components/ui/animated-section";
import pythonDsaCert from "@/assets/certificates/python-dsa-infosys.jpg";

const LINKEDIN_CERTIFICATIONS_URL = "https://www.linkedin.com/in/sairaj-jadhav-/details/certifications/";

const certifications = [
  {
    title: "Developing Back-End Apps with Node.js and Express",
    issuer: "IBM",
    description: "Mastered server-side JavaScript development, RESTful API design, database integration, and Express.js framework for building scalable backend applications.",
    image: "/images/Developing Back-End Apps with Node.js and Express.jpg",
  },
  {
    title: "Developing Front-End Apps with React",
    issuer: "IBM",
    description: "Learned modern React.js development including components, hooks, state management, and building interactive, responsive user interfaces.",
    image: "/images/Developing Front-End Apps with React.jpg",
  },
  {
    title: "Developing AI Applications with Python and Flask",
    issuer: "IBM",
    description: "Gained expertise in building AI-powered web applications using Python and Flask, integrating machine learning models.",
    image: "/images/Developing AI Applications with Python and Flask _page-0001.jpg",
  },
  {
    title: "Django Application Development with SQL and Databases",
    issuer: "IBM",
    description: "Comprehensive training in Django web framework, SQL database management, ORM, and building full-stack web applications with Python.",
    image: "/images/Django Application Development with SQL and Databases..jpg",
  },
  {
    title: "Introduction to HTML, CSS and JavaScript",
    issuer: "IBM",
    description: "Foundational certification covering web development fundamentals including semantic HTML, modern CSS styling, and JavaScript programming.",
    image: "/images/Introduction to HTML, CSS and JavaScript.jpg",
  },
  {
    title: "Python for Data Science, AI and Development",
    issuer: "IBM",
    description: "Comprehensive Python programming certification covering data manipulation, analysis, AI/ML libraries, and building data-driven applications.",
    image: "/images/Python for data science , ai and development.jpg",
  },
  {
    title: "Git and GitHub",
    issuer: "IBM",
    description: "Mastered version control with Git and GitHub, including repository management, branching strategies, pull requests, and collaborative workflows.",
    image: "/images/git and github.jpg",
  },
  {
    title: "Python Data Structures and Algorithms",
    issuer: "Infosys Springboard",
    description: "Comprehensive certification covering Python data structures, algorithms, problem-solving techniques, and computational thinking for efficient software development.",
    image: pythonDsaCert,
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono">07.</span>
            <h2 className="section-heading mb-0">Professional Certifications</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={LINKEDIN_CERTIFICATIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-300 cursor-pointer block"
              variants={staggerItemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                >
                  <ExternalLink className="w-5 h-5 text-primary" />
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-medium">{cert.issuer}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {cert.description}
                </p>
              </div>
            </motion.a>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default CertificationsSection;
