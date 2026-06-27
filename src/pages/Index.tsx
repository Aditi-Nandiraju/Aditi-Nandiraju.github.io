import StarryBackground from "@/components/StarryBackground";
import ProfileSection from "@/components/ProfileSection";
import LinksSection from "@/components/LinksSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import EventsSection from "@/components/EventsSection";

const Index = () => (
  <div className="relative min-h-screen">
    <StarryBackground />
    <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
        My Portfolio
      </h1>
      <p className="text-muted-foreground text-center mb-16 text-lg">Developer • Creator • Problem Solver</p>
      <ProfileSection />
      <LinksSection />
      <ProjectsSection />
      <EventsSection />
      <CertificatesSection />
    </main>
  </div>
);

export default Index;
