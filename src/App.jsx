import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Packages from './components/Packages';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Packages />
        <Contact />
        <footer className="py-10 text-center text-slate-500">© {new Date().getFullYear()} Flames Design — All rights reserved.</footer>
      </main>
    </div>
  );
}

export default App;
