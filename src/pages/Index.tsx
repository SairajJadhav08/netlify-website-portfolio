import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import OpenSourceSection from "@/components/sections/OpenSourceSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import PublicationsSection from "@/components/sections/PublicationsSection";
import StrengthsSection from "@/components/sections/StrengthsSection";
import InterestsSection from "@/components/sections/InterestsSection";
import LanguagesSection from "@/components/sections/LanguagesSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <OpenSourceSection />
      <AchievementsSection />
      <CertificationsSection />
      <PublicationsSection />
      <StrengthsSection />
      <InterestsSection />
      <LanguagesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 Sairaj Jadhav. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
