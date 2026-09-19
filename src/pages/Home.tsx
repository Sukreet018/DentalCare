import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import ContactCTA from "../components/sections/ContactCTA";
import Doctors from "../components/sections/Doctors";
import Gallery from "../components/sections/Gallery";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";

function Home() {
  return (
    <div className="min-h-screen bg-clinic-surface text-clinic-text">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Doctors />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
