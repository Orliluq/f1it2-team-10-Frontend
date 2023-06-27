import api from './api';

export const getCitas = () => api.get('/cita');
export const crearCita = (cita) => api.post('/citas', cita);
export const actualizarCita = (id, cita) => api.put(`/citas/${id}`, cita);
export const deleteCita = (id) => api.delete(`/citas/${id}`);
