import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import Detalle from './components/Detalle/detalle';
import About from './pages/About/about';
import Menu from './components/Menu/menu';
import CrearCita from './pages/CrearCita/crearCita';
import ActualizarCita from './pages/ActualizarCita/actualizarCita';
import Home from './components/Home';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/crearCita" element={<CrearCita />} />
          <Route path="/detalle" element={<Detalle />} />
          <Route path="/actualizarCita" element={<ActualizarCita />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;

