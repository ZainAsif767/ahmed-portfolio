import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import EmploymentStatus from "../components/EmploymentStatus";
import FeaturedProjects from "../components/FeaturedProjects";
import ContactSection from "../components/ContactSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <EmploymentStatus />
      <About />
      <Skills />
      <FeaturedProjects />
      <Testimonials />
      <ContactSection />
    </>
  );
};

export default HomePage;
