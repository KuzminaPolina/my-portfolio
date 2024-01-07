import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import styles from "./style";

function App() {
  return (
    <div className="bg-slate-50 text-black">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-slate-50 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <main className={`bg-slate-50 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Skills />
          <Portfolio />
          <Resume />
          <Contacts />
          <Game />
        </div>
      </main>

      <footer className={`bg-slate-50 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
