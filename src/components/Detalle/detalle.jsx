import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getCita, actualizarCita, eliminarCita } from '../../redux/actions/actions';
import './detalle.css';

const Detalle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cita = useSelector(state => state.cita);

  useEffect(() => {
    const fetchCitaDetails = async (id) => {
      try {
        const response = await axios.get(`https://citasync.onrender.com/citas/${id}`);
        const data = response.data;
        dispatch(actualizarCita(data)); 
      } catch (error) {
        console.error(error);
      }
    };

    if (cita?.id) {
      fetchCitaDetails(cita.id);
    }
  }, [dispatch, cita]);

  const handleDeleteClick = () => {
    if (cita && cita.id) {
      dispatch(eliminarCita(cita.id));
    }
    navigate('/menu');
  };

  const handleToggle = () => {
    if (cita && cita.id) {
      const updatedCita = {
        ...cita,
        estado: !cita.estado,
      };
      dispatch(actualizarCita(updatedCita));
    }
  };

  const handleObtenerClick = () => {
    navigate('/crearCita');
  };

  const handleMenuClick = () => {
    navigate('/menu');
  };

  const handleExitClick = () => {
    navigate('/');
  };

  const defaultCita = {
    id: '',
    nombre: '',
    fecha: '',
    hora: '',
    duracion: '',
    ubicacion: '',
    detalles: '',
    estado: false,
  };

  const displayCita = cita ?? defaultCita;

  return (
    <div>
      <div className="detalle-form">
        <h2 className="title">Detalles de la cita</h2>
        <div>
          <strong className="strong">Id:</strong> {displayCita.id}
        </div>
        <div>
          <strong className="strong">Nombre:</strong> {displayCita.nombre}
        </div>
        <div>
          <strong>Fecha:</strong> {displayCita.fecha}
        </div>
        <div>
          <strong>Hora:</strong> {displayCita.hora}
        </div>
        <div>
          <strong>Duración:</strong> {displayCita.duracion} minutos
        </div>
        <div>
          <strong>Ubicación:</strong> {displayCita.ubicacion}
        </div>
        <div>
          <strong>Detalles:</strong> {displayCita.detalles}
        </div>
        <div>
          <strong>Estado:</strong> {displayCita.estado ? 'Agendada' : 'No agendada'}
        </div>
      </div>
      {!cita ? (
        <div className="cita-detalles">
          <h2>No hay cita creada</h2>
          <p>Por favor, crea una cita para ver sus detalles</p>
        </div>
      ) : (
        <div className="button-detalle">
          <button onClick={handleToggle} type="submit" disabled={!cita}>
            {displayCita.estado ? 'Marcar como no agendada' : 'Marcar como agendada'}
          </button>
        </div>
      )}
      <div>
        <button className="button-add" onClick={handleObtenerClick}>
          Obtener Cita
        </button>
      </div>
      <div>
        <button className="button-delete" onClick={handleDeleteClick}>
          Eliminar Cita
        </button>
      </div>
      <div>
        <button className="button-menu" onClick={handleMenuClick}>
          Menú
        </button>
      </div>
      <div>
        <button className="button-exit" onClick={handleExitClick}>
          Exit
        </button>
      </div>
    </div>
  );
};

export default Detalle;
