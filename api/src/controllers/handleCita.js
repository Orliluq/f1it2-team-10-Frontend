const express = require('express');
const { getCitas } = require('../../../src/redux/actions/actions');
const app = express();

let getCitasList = [];

function postCita(req, res) {
  try {
    const cita = req.body.cita;

    if (citaExists(cita)) throw new Error("La cita ya existe");

    getCitasList.push(cita);
    res.status(201).json(getCitasList);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

function citaExists(cita) {
  return getCitasList.some(existingCita => JSON.stringify(existingCita) === JSON.stringify(cita));
}

function deleteCita(req, res) {
  const citaId = req.params.id;
  const citaIndex = getCitasList.findIndex(cita => cita.id === citaId);

  if (citaIndex === -1) {
    res.status(404).send("Cita no encontrada");
  } else {
    getCitasList.splice(citaIndex, 1);
    res.status(201).json(getCitasList);
  }
}

// Middleware de manejo de errores
app.use((error, req, res, next) => {
  console.log("Error Handling Middleware called")
  console.log('Path: ', req.path)
  next() 
});

module.exports = {
  postCita,
  deleteCita,
};
