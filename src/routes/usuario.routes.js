// RUTAS DE USUARIOS

const router = require("express").Router(); // importar express.Router()
const usuarioController = require('../controllers/usuario.controller') // importar el archivo de controladores de usuarios
const validate = require('../middlewares/validate') // importar el middleware de validacion de datos
const usuarioScheme = require('../middlewares/schemes/usuario.scheme') // importar el scheme de validacion de datos


router.get('/prueba', usuarioController.prueba)
router.get('/', usuarioController.listar)
router.post('/', validate(usuarioScheme.crearUsuario), usuarioController.crear)
router.get('/:idUsuario', usuarioController.listarInfo)



module.exports = router;