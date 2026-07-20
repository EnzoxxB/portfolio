import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './styles/index.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">

      <video
        className="fixed inset-0 w-screen h-screen object-cover -z-20"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="./images/Fondo.mp4" type="video/mp4" />
      </video>

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido */}
      <div className="relative z-10 min-h-screen flex flex-col">

        <LanguageSwitcher />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <footer className="bg-blue-950/50 text-gray-300 text-center py-4 mt-4 text-2xl animate-soft-glow">
          © 2026 TechbeSolutions
        </footer>

      </div>

    </div>
  );
}

export default App
