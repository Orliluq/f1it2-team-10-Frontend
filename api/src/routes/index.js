const express = require('express');
const router = express.Router();
const { getCitasById } = require('../controllers/getCitasById');
const { postCita, deleteCita } = require('../controllers/handleCita');

router.get('/cita/:id', getCitasById);
router.post('/cita', postCita);
router.delete('/cita/:id', deleteCita);

module.exports = router;
