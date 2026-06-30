import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero (Load immediately without scroll reveal for fast LCP) */}
      <Hero />
      
      {/* Divider */}
      <div className="divider" />
      
      {/* About Section */}
      <ScrollReveal>
        <About />
      </ScrollReveal>
      
      {/* Divider */}
      <div className="divider" />
      
      {/* Skills/Expertise Section */}
      <ScrollReveal>
        <Skills />
      </ScrollReveal>
      
      {/* Divider */}
      <div className="divider" />
      
      {/* Experience Section */}
      <ScrollReveal>
        <Experience />
      </ScrollReveal>
      
      {/* Divider */}
      <div className="divider" />
      
      {/* Contact Section */}
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
