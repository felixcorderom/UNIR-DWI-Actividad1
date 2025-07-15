// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


import Home from './pages/Home';
import AulaVirtual from './pages/AulaVirtual';
import Contacto from './pages/Contacto';
import Especializaciones from './pages/Especializaciones';
import FormularioInteres from "./components/FormularioInteres";


import './styles/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aula" element={<AulaVirtual />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/especializaciones" element={<Especializaciones />} />
        <Route path="/components/FormularioInteres" element={<FormularioInteres />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
