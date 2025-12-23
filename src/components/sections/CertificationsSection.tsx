import { useState } from "react";
import { Award, ExternalLink, ChevronDown, ChevronUp, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, staggerItemVariants } from "@/components/ui/animated-section";
import pythonDsaCert from "@/assets/certificates/python-dsa-infosys.jpg";

const LINKEDIN_CERTIFICATIONS_URL = "https://www.linkedin.com/in/sairaj-jadhav-a79181287/details/certifications/";

// Featured certifications (shown by default)
const featuredCertifications = [
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
];

// Additional certifications (shown on expand)
const moreCertifications = [
  {
    title: "Git and GitHub",
    issuer: "IBM",
    description: "Mastered version control with Git and GitHub, including repository management, branching strategies, pull requests, and collaborative workflows.",
    image: "/images/git and github.jpg",
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "IBM",
    description: "Comprehensive introduction to cloud computing concepts, deployment models, service models (IaaS, PaaS, SaaS), and cloud architecture.",
    image: "/images/Introduction to cloud computing.jpg",
  },
  {
    title: "Introduction to Software Engineering",
    issuer: "IBM",
    description: "Foundational software engineering principles including SDLC, agile methodologies, software design patterns, and best practices for building quality software.",
    image: "/images/introduction to software engineering.jpg",
  },
  {
    title: "Python Data Structures and Algorithms",
    issuer: "Infosys Springboard",
    description: "Comprehensive certification covering Python data structures, algorithms, problem-solving techniques, and computational thinking for efficient software development.",
    image: pythonDsaCert,
  },
];

const CertificationCard = ({ cert }: { cert: typeof featuredCertifications[0] }) => (
  <motion.div
    className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
    variants={staggerItemVariants}
    whileHover={{ y: -8, scale: 1.02 }}
  >
    <div className="relative h-40 overflow-hidden flex-shrink-0 bg-secondary">
      <img
        src={cert.image}
        alt={cert.title}
        loading="lazy"
        decoding="async"
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

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center gap-2 mb-2">
        <Award className="w-4 h-4 text-primary" />
        <span className="text-primary text-sm font-medium">{cert.issuer}</span>
      </div>
      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {cert.title}
      </h3>
      <p className="text-muted-foreground text-sm line-clamp-3 flex-grow">
        {cert.description}
      </p>

      {/* View Certificate Button */}
      <div className="mt-4">
        <Button variant="outline" size="sm" className="w-full gap-2" asChild>
          <a
            href={cert.image}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Eye className="w-4 h-4" />
            View Certificate
          </a>
        </Button>
      </div>
    </div>
  </motion.div>
);

const CertificationsSection = () => {
  const [showMore, setShowMore] = useState(false);

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

        {/* Featured Certifications */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {featuredCertifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} />
          ))}
        </StaggerContainer>

        {/* More Certifications (Expandable) */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6" staggerDelay={0.1}>
                {moreCertifications.map((cert, index) => (
                  <CertificationCard key={index} cert={cert} />
                ))}
              </StaggerContainer>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All / View Less Button */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="gap-2"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? (
              <>
                Show Less
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                View All Certifications
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
