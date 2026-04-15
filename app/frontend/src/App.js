import "./App.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LogoShowcase from "./components/LogoShowcase";

function App() {
  // Check if we're on the logo showcase route
  const showLogoShowcase = window.location.pathname === '/logos' || window.location.hash === '#logos';

  if (showLogoShowcase) {
    return (
      <ThemeProvider>
        <div className="App min-h-screen bg-background">
          <LogoShowcase />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;