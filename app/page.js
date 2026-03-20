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

<section id="home">
  <TopHero />
</section>

<section id="about">
  <Hero />
</section>

<section id="skills">
  <Skills />
</section>

<section id="education">
  <Education/>
</section>

<section id="projects">
  <Projects />
</section>

<section id="contact">
  <Contact/>
</section>

      <Footer />
      </PageWrapper>
    </>
  );
}