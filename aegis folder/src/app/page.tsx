import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FeaturedProduct } from "@/components/FeaturedProduct";
import { GitHubSection } from "@/components/GitHubSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-void text-slate-100">
      <AnimatedBackground />
      <Header />
      <Hero />
      <About />
      <FeaturedProduct />
      <Skills />
      <Projects />
      <Achievements />
      <GitHubSection />
      <Contact />
      <Footer />
    </main>
  );
}
