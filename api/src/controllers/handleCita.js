const { getCita } = require("../../../Cliente/src/redux/actions/actions");

let getCita = [];

function postCita(req, res) {
  try {
    const cita = req.body.cita;

    if (citaFound) throw Error("La cita ya existe");

    getCita.push(cita);
    res.status(200).json(getCita);
  } catch (error) {
    res.status(404).send(error.message);
  }
}

function deleteCita(req, res) {
  const citaId = req.params.id;
  getCita = getCita.filter((cita) => cita.id !== citaId);
  res.status(200).json(getCita);
}

module.exports = {
  postCita,
  deleteCita,
};
