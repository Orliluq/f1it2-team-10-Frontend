const { getCitaById } = require('../controllers/getCitaById');
const { postCita, deleteCita } = require('../controllers/handleCita');

const router = require('express').Router();

router.get('/cita/:id', getCitaById);

router.post('/cita', postCita);

router.delete('/cita/:id', deleteCita);

module.exports = router;
