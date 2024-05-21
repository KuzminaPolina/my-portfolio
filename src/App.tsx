import About from "./components/About";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import { websitePreview } from "./assets";

function App() {
  return (
    <div className={`bg-slate-50 text-black flex flex-col`}>
      <header className="px-6 sm:px-16 flex flex-col justify-center items-center">
        <Navbar />
        <Hero />
        <div className="visually-hidden">
          <img src={websitePreview}/>
        </div>
      </header>

      <main
        className={`bg-slate-50 max-w-screen-xl flex flex-col self-center w-[100%]`}
      >
        <Resume />
        <Portfolio />
        <About />
        <Game />
      </main>

      <footer className={`bg-slate-50`}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
