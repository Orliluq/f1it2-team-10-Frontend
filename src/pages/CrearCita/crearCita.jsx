import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { crearCita } from '../../redux/actions/actions';
import { useNavigate } from 'react-router-dom';
import './crearCita.css';

const CrearCita = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    id: '',
    nombre: '',
    fecha: '',
    hora: '',
    duracion: '',
    ubicacion: '',
    detalles: '',
    estado: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const citaData = {
      id: formValues.id,
      nombre: formValues.nombre,
      fecha: formValues.fecha,
      hora: formValues.hora,
      duracion: formValues.duracion,
      ubicacion: formValues.ubicacion,
      detalles: formValues.detalles,
      estado: formValues.estado,
    };

    try {
      await dispatch(crearCita(citaData));
      setFormValues({
        id: '',
        nombre: '',
        fecha: '',
        hora: '',
        duracion: '',
        ubicacion: '',
        detalles: '',
        estado: '',
      });
      navigate('/detalle');
    } catch (error) {
      console.error('Fallo al crear la cita: ', error);
    }
  };

  const handleAddClick = () => {
    navigate('/detalle');
  };

  const handleMenuClick = () => {
    navigate('/menu');
  };

  const { id, nombre, fecha, hora, duracion, ubicacion, detalles, estado } = formValues;

  return (
    <div className="background-cita">
      <form className="crear-cita" onSubmit={handleSubmit}>
        <div className="name">
          <h1>CitaSync</h1>
        </div>
        <div className="encabezado">
          <h2>Añadir cita</h2>
        </div>
        <div className="input-container">
          <label htmlFor="id">Id:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="fecha">Fecha:</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={fecha}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="hora">Hora:</label>
          <input
            type="time"
            id="hora"
            name="hora"
            value={hora}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="duracion">Duración:</label>
          <input
            type="number"
            id="duracion"
            name="duracion"
            value={duracion}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="ubicacion">Ubicación:</label>
          <input
            type="text"
            id="ubicacion"
            name="ubicacion"
            value={ubicacion}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="detalles">Detalles:</label>
          <textarea
            id="detalles"
            name="detalles"
            value={detalles}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="nombre">Estado:</label>
          <input
            type="text"
            id="estado"
            name="estado"
            value={estado}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit" className="button-clicked">
            Guardar Cita
          </button>
        </div>
        <div className="button-container">
          <button type="button" className="button-clicked" onClick={handleMenuClick}>
            Menu
          </button>
        </div>
        <div className="button-container">
          <button
            type="button"
            className="button-clicked"
            onClick={() => navigate('/')}>
            Exit
          </button>
        </div>
        </form>
      </div>
  );
};

export default CrearCita;