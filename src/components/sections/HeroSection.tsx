import { EtheralShadow } from "@/components/ui/etheral-shadow";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Download, Linkedin, Github, Instagram, Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = ["AI Engineer", "ML Enthusiast", "Problem Solver", "Tech Innovator"];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 1 + i * 0.1, duration: 0.4, type: "spring" as const },
    }),
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Ethereal Shadow Background */}
      <div className="absolute inset-0 z-0">
        <EtheralShadow
          color="rgba(0, 180, 216, 0.6)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 0.8, scale: 1.2 }}
          sizing="fill"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="text-primary font-medium text-lg">
              Hello, I'm
            </motion.p>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient">
              Sairaj Jadhav
            </motion.h1>
            <motion.p variants={itemVariants} className="text-2xl md:text-3xl font-semibold">
              I'm a <span className="text-primary">{displayText}</span>
              <span className="animate-pulse text-primary">|</span>
            </motion.p>
            <motion.p variants={itemVariants} className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Third-year engineering student passionate about solving real-world problems through code,
              circuits, and creativity. Building intuitive devices, alert-based systems, and interactive
              simulations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="#contact">
                  Get In Touch <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="/images/Resume new.pdf" target="_blank" rel="noopener noreferrer">
                  <Eye className="w-4 h-4" /> View CV
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="/images/Resume new.pdf" download>
                  <Download className="w-4 h-4" /> Download CV
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { href: "https://www.linkedin.com/in/sairaj-jadhav-a79181287/", icon: Linkedin },
                { href: "https://github.com/SairajJadhav08", icon: Github },
                { href: "https://www.instagram.com/sairajjadhav08/", icon: Instagram },
                { href: "mailto:sairajjadhav433@gmail.com", icon: Mail },
                { href: "tel:+919356860010", icon: Phone },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  custom={i}
                  variants={socialVariants}
                  initial="hidden"
                  animate="visible"
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative">
              <motion.div
                className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/Profile.jpeg"
                  alt="Sairaj Jadhav"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/50 rounded-xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 border-2 border-primary/50 rounded-xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.4 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-1 h-2 bg-muted-foreground rounded-full" />
          </motion.div>
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
