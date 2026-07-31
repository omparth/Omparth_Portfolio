import ParticleStar from '@/components/ParticleStar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030207] text-white">
      {/* Fixed Background Layer */}
      <ParticleStar />

      {/* Transparent Content Wrapper */}
      <div className="relative z-10 bg-transparent">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}