import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function HomePage() {
  return (
    <main>
      <Hero />

      <div className="divider" />

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <div className="divider" />

      <ScrollReveal>
        <Skills />
      </ScrollReveal>

      <div className="divider" />

      <ScrollReveal>
        <Experience />
      </ScrollReveal>

      <div className="divider" />

      <ScrollReveal>
        <Contact />
      </ScrollReveal>

      <Footer />
    </main>
  );
}
