import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Testimonials/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;