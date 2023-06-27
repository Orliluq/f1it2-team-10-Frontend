import React, { useState, useEffect } from 'react';
import './App.css';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import store from './redux/store';
import Detalle from './components/Detalle/detalle';
import About from './pages/About/about';
import Menu from './components/Menu/menu';
import CrearCita from './pages/CrearCita/crearCita';
import BuscarCitas from './components/BuscarCitas/buscarCitas';
import ActualizarCita from './pages/ActualizarCita/actualizarCita';
import Home from './components/Home';

function App() {

  const navigate = useNavigate();
  const [access, setAccess] = useState(true);
  
  return (
    <Provider store={store}>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/crearCita" element={<CrearCita />} />
          <Route path="/detalle" element={<Detalle />} />
          <Route path="/actualizarCita" element={<ActualizarCita />} />
          <Route path="/buscarCitas" element={<BuscarCitas />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;

