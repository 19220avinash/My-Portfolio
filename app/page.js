import Navbar from "./components/Navbar";
import TopHero from "./components/TopHero"; 
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ParticlesBg from "./components/ParticlesBg";
import PageWrapper from "./components/PageWrapper";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
    <PageWrapper> 
      <ParticlesBg />
     <Navbar />

<section id="home" className="scroll-mt-24">
  <TopHero />
</section>

<section id="about" className="scroll-mt-24">
  <Hero />
</section>

<section id="skills" className="scroll-mt-24">
  <Skills />
</section>

<section id="education" className="scroll-mt-24">
  <Education/>
</section>

<section id="projects" className="scroll-mt-24">
  <Projects />
</section>

<section id="contact" className="scroll-mt-24"> 
  <Contact/>
</section>

      <Footer />
      </PageWrapper>
    </>
  );
}