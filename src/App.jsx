import { useEffect, useState } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    });
  }, []);
  return (
    <div id="top" className="container">
      <Header />
      <div id="about" />
      <Hero />
      <div id="main" className="divider" />
      <Main />
      <div id="contact" className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a
        style={{ opacity: showScroll ? 1 : 0, transition: "0.6s" }}
        href="#top"
      >
        <button className="icon-arrow-up2 scroll2top"></button>
      </a>
    </div>
  );
}

export default App;
