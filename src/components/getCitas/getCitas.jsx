import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Detalle from "../Detalle/detalle";
import "./getCitas.css";
import { getCitas } from "../../redux/actions/actions";

const GetCitas = () => {
  const [filtro, setFiltro] = useState("");
  const [selectedCita, setSelectedCita] = useState(null);
  const citas = useSelector((state) => state.citas.citas) ?? [];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCitas());
  }, [dispatch]);

  const citasFiltered = citas.filter((cita) =>
    cita.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  const handleDetalleClick = useCallback((selectedCita) => {
    setSelectedCita(selectedCita);
  }, []);

  const handleObtenerClick = useCallback(() => {
    navigate("/crearCita");
  }, [navigate]);

  const handleDeleteClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);
  
  const handleActualizarClick = useCallback(() => {
    navigate("/crearCita");
  }, [navigate]);
  
  const handleExitClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  

  return (
    <div className="buscar-form">
      <h2 className="title">Lista de citas</h2>
      <div className="label-container">
        <label htmlFor="filtro">Buscar cita:</label>
        <input
          type="text"
          id="filtro"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </div>
      {citasFiltered.length ? (
        <ul>
          {citasFiltered.map((cita) => (
            <li key={cita.id}>
              <div>
                <strong className="strong">Nombre:</strong> {cita.nombre}
              </div>
              <div>
                <strong>Fecha:</strong> {cita.fecha}
              </div>
              <div>
                <strong>Hora:</strong> {cita.hora}
              </div>
              <div className="button-detalles">
                <button onClick={() => handleDetalleClick(cita)}>
                  Ver detalles
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>No hay citas que coincidan.</div>
      )}
      {selectedCita && (
        <Detalle
          cita={selectedCita}
          onClose={() => setSelectedCita(null)}
          key={selectedCita.id}
        />
      )}
      <div>
      <button
        type="button"
        className={handleObtenerClick ? 'button-clicked' : ''}
        onClick={handleObtenerClick}
      >
        Obtener Cita
      </button>
      </div>
      <div>
        <button
          type="button"
          className={handleDeleteClick ? 'button-clicked' : ''}
          onClick={handleDeleteClick}
        >
          Eliminar
        </button>
      </div>
      <div>
        <button
          type="button"
          className={handleActualizarClick ? 'button-clicked' : ''}
          onClick={handleActualizarClick}
        >
          Actualizar
        </button>
      </div>
      <div>
        <button
          type="button"
          className={handleExitClick ? 'button-clicked' : ''}
          onClick={handleExitClick}
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default GetCitas;
