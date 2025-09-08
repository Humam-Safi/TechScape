import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedBackground from "./components/AnimatedBackground";
import "./App.css";
import Home from "./pages/Home.tsx";
import SpecialtyPage from "./pages/SpecialtyPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-dvh text-slate-100 relative">
        <AnimatedBackground />
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/70 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <Link to="/" className="font-black tracking-tight text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400">
                TechScape
              </span>
            </Link>
            <nav className="text-sm text-slate-300">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
            </nav>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/specialty/:id" element={<SpecialtyPage />} />
          </Routes>
        </main>
        <footer className="border-t border-white/10 mt-16">
          <div className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-slate-400">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Crafted with ✨ animations to inspire your tech journey.
            </motion.p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
