import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import ClickToAction from "./components/ClickToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <ClickToAction />
      <Footer />
    </div>
  );
}

export default App;
