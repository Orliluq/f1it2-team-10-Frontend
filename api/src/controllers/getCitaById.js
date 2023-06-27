const axios = require('axios');

const getCitaById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}/${id}`);

    if (!data.cita) throw Error(`Faltan datos del ID: ${id}`);

    if (data.error) {
      res.status(404).json({ message: "Not found" });
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

      res.json(cita);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getCitaById,
};
