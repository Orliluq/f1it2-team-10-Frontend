import api from './api';

const getCitasById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await api.get(`/citas/${id}`);

    if (!data.cita) {
      throw Error(`Faltan datos del ID: ${id}`);
    }

    if (data.error) {
      res.status(404).json({ message: "No encontrado" });
    } else {
      const cita = {
        id: data.id,
        nombre: data.nombre,
        fecha: data.fecha,
        hora: data.hora,
        duracion: data.duracion,
        ubicacion: data.ubicacion,
        detalles: data.detalles,
        estado: data.estado,
      };

      res.json(201, cita);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export default getCitasById;
