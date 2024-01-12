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
    <div className={`bg-slate-50 text-black flex flex-col`}>
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

      <main
        className={`bg-slate-50 max-w-screen-xl flex flex-col self-center w-[100%]`}
      >
        <Resume />
        <About />
        <Skills />
        <Portfolio />
        <Contacts />
        <Game />
      </main>

      <footer className={`bg-slate-50`}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
