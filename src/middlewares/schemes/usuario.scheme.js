// ARCHIVO PARA ESCRIBIR SCHEMES DE USUARIOS

const Joi = require('joi') // importar Joi para validar los datos de entrada

let crearUsuario = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().email().optional(),
    edad: Joi.number().optional()
})

module.exports = {
    crearUsuario
}