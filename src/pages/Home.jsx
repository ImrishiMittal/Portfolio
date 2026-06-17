import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/Experience/Experience";
import Education from "@/components/Education/Education";
import Certifications from "@/components/Certifications/Certifications";
import Skills from "@/components/Skills/Skills";
import BeyondCoding from "@/components/BeyondCoding/BeyondCoding";
import OpenForWork from "@/components/OpenForWork/OpenForWork";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Experience />

      <Education/>

      <Certifications />

      <Skills />

      <BeyondCoding/>

      <OpenForWork />

      <Contact />

      <Footer />
    </>
  );
};

export default Home;