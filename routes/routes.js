var express = require('express')
var api = require('../Controllers/api')
var router = express.Router()

//para el docente
router.post('/nueva_asistencia',api.registrar_asistencia)

//para el estudiante
router.post('/nueva_evaluacion',api.registrar_evaluacion)


module.exports = router
