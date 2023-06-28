import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actualizarCita } from '../../redux/actions/actions';
import axios from 'axios';
import './actualizarCita.css';

export default function ActualizarCita() {
  const [cita, setCita] = useState({
    id: '',
    nombre: '',
    fecha: '',
    hora: '',
    duracion: '',
    ubicacion: '',
    detalles: '',
    estado: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('https://citasync.onrender.com', cita);
      console.log(response.data);
      navigate('/detalle');
    } catch (error) {
      console.error('Error al actualizar la cita:', error);
    }
  }, [cita, navigate]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setCita((prevCita) => ({
      ...prevCita,
      [name]: value,
    }));
  }, []);

  const handleActualizarCita = useCallback(() => {
    dispatch(actualizarCita(cita));
  }, [cita, dispatch]);

  const handleSaveClick = useCallback(() => {
    navigate('/detalle');
  }, [navigate]);

  const handleMenuClick = useCallback(() => {
    navigate('/menu');
  }, [navigate]);

  return (
    <div className="background-forms">
      <div className="citas-forms">
        <form onSubmit={handleSubmit}>
          <div className="encabezados">
            <h2>Actualizar cita</h2>
          </div>
          <div className="inputs-containers">
            <label htmlFor="id">Id:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={cita.id}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="inputs-containers">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={cita.nombre}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="inputs-containers">
            <label htmlFor="fecha">Fecha:</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={cita.fecha}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="inputs-containers">
            <label htmlFor="hora">Hora:</label>
            <input
              type="time"
              id="hora"
              name="hora"
              value={cita.hora}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="inputs-containers">
            <label htmlFor="duracion">Duración:</label>
            <input
              type="number"
              id="duracion"
              name="duracion"
              value={cita.duracion}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="inputs-containers">
            <label htmlFor="ubicacion">Ubicación:</label>
            <input
              type="text"
              id="ubicacion"
              name="ubicacion"
              value={cita.ubicacion}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="inputs-containers">
            <label htmlFor="detalles">Detalles:</label>
            <textarea
              id="detalles"
              name="detalles"
              value={cita.detalles}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="inputs-containers">
            <label htmlFor="estado">Estado:</label>
            <select
              name="estado"
              id="estado"
              value={cita.estado}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccione un estado</option>
              <option value="Pendiente">Pendiente</option>
              <option value="Confirmada">Confirmada</option>
              <option value="Cancelada">Cancelada</option>
            </select>
          </div>
          <div className="buttons-container">
            <button type="button" className="buttons-clicked" onClick={handleActualizarCita}>
              Actualizar Cita
            </button>
          </div>
          <div className="buttons-container">
            <button type="button" className="buttons-clicked" onClick={handleSaveClick}>
              Guardar Cita
            </button>
          </div>
        <div className="button-container">
          <button type="button" className="buttons-clicked" onClick={handleMenuClick}>
            Menu
          </button>
        </div>
        <div className="buttons-container">
          <button type="button" className="buttons-clicked" onClick={() => navigate('/')}>
            Exit
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}