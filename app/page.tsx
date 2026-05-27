import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import CustomCursor from "@/components/custom-cursor";
import ExperienceSection from "@/components/experience-section";
import HeroSection from "@/components/hero-section";
import Navigation from "@/components/navigation";
import ScrollProgress from "@/components/scroll-progress";
import ProjectsSection from "@/components/services-section";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />

        <section id="about">
          <AboutSection />
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
