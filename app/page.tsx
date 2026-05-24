import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/hero-section";
import Navigation from "@/components/navigation";
import ServicesSection from "@/components/services-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50">
      <Navigation />
      <section id="home" className="mt-6">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="projects">
        <ServicesSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
