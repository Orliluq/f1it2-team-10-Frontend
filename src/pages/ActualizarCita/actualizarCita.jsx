import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { crearCita, actualizarCita, recuperarCita, eliminarCita } from '../../redux/actions/actions';
import CrearCita from '../CrearCita/crearCita';
import axios from 'axios';
import './actualizarCita.css';

export default function Actualizar() {
  const citas = useSelector((state) => state.citas);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleActualizarCita = useCallback((cita) => {
    const citaToUpdate = citas.find((c) => c.id === cita.id);
    if (citaToUpdate) {
      dispatch(actualizarCita(cita));
      navigate('/detalle');
    } else {
      console.error('Cita to update not found');
    }
  }, [citas, dispatch, navigate]);
  
  const handleGuardarCita = useCallback((cita) => {
    const citaExists = citas.some((c) => c.id === cita.id);
    if (citaExists) {
      console.error('Cita with the same id already exists');
    } else {
      dispatch(crearCita(cita));
      navigate('/detalle');
    }
  }, [citas, dispatch, navigate]);

  const handleRecuperarCita = useCallback((id) => {
    const cita = citas.find((cita) => cita.id === id);
    if (cita) {
      dispatch(recuperarCita(cita));
      navigate('/detalle');
    } else {
      console.error('Cita not found');
    }
  }, [citas, dispatch, navigate]);

  const handleEliminarCita = useCallback((id) => {
    const cita = citas.find((cita) => cita.id === id);
    if (cita) {
      dispatch(eliminarCita(cita));
      navigate('/exit');
    } else {
      console.error('Cita not found');
    }
  }, [citas, dispatch, navigate]);

  const [citaSelectId, setCitaSelectId] = useState(null);
  const citaSelect = useSelector((state) => 
    state.citas.find((cita) => cita.id === citaSelectId));

  const [cita, setCita] = useState({
    id: '',
    nombre: '',
    fecha: '',
    hora: '',
    duracion: '',
    ubicacion: '',
    detalles: '',
    estado: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCita((prevCita) => ({
      ...prevCita,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://citasync.onrender.com/citas', cita)
      .then((response) => {
        console.log(response.data);
        navigate('/detalle');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="cita-form">
      <form onSubmit={handleSubmit}>
        <h2 className="encabezado">Actualizar cita</h2>
        <div className="input-container">
          <label htmlFor="id" className="label">
            Id:
            <input
              type="number"
              name="id"
              value={cita.id}
              onChange={handleInputChange}
              required/>
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="nombre" className="label">
            Nombre:
            <input
              type="text"
              name="nombre"
              value={cita.nombre}
              onChange={handleInputChange}
              required/>
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="fecha" className="label">
            Fecha:
            <input
              type="date"
              name="fecha"
              value={cita.fecha}
              onChange={handleInputChange}
              required/>
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="hora" className="label">
            Hora:
            <input
              type="time"
              name="hora"
              value={cita.hora}
              onChange={handleInputChange}
              required/>
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="ubicacion" className="label">
            Ubicación:
            <input
              type="text"
              name="ubicacion"
              value={cita.ubicacion}
              onChange={handleInputChange}
              required/>
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="duracion" className="label">
          Duración:
            <input
              type="text"
              name="duracion"
              value={cita.duracion}
              onChange={handleInputChange}
              required/>
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="detalles" className="label">
            Detalles:
            <textarea
              name="detalles"
              value={cita.detalles}
              onChange={handleInputChange}
              required/>
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="estado" className="label">
            Estado:
            <select
              name="estado"
              value={cita.estado}
              onChange={handleInputChange}
              required>
              <option value="">Seleccione un estado</option>
              <option value="Pendiente">Pendiente</option>
              <option value="Confirmada">Confirmada</option>
              <option value="Cancelada">Cancelada</option>
            </select>
          </label>
        </div>
        <div className="button-container">
          <button type="submit" className="button-submit">Guardar</button>
        </div>
      </form>
      <CrearCita
        cita={citaSelect}
        handleActualizarCita={handleActualizarCita}
        handleGuardarCita={handleGuardarCita}
        handleRecuperarCita={handleRecuperarCita}
        handleEliminarCita={handleEliminarCita}/>
    </div>
  );
}
