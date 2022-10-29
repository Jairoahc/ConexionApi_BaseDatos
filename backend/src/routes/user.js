//llamar librerias
const { Router } = require("express")
const express = require ("express")

const router = express.Router() //enrutador

//importar modelo
const User = require ("../models/user.model")

//Rutas
//router.get("ruta", () => {})
// La ruta post es para crear en bd
router.post("/create-user", async (req, res) => {
    //VALIDACION DEL EMAIL EN LA BASE DE DATOS PARA PERMITIR LA CREACION DEL USUARIO.
    let {email} = req.body
    /* let email = req.body.email */
    //Pasar todo lo que se escriba en el email a minuscula para hacer la validacion
    email = email.toLowerCase()
    req.body.email = email
    //Obtener los usuarios que tienen ese email en la base de datos
    let userExists = await User.find({email: email})
    //Validar si el email existe
    if (userExists.length !== 0) {
        return res.status(400).json({msg: "Este correo ya se encuentra registrado en la base de datos"})
    }
    //Guardar o enviar error de creacion 
    

    const newUser = new User (req.body) //Para que la bd tome lo que se escriba en el body
    await newUser.save() //Para guardar un producto en la base de datos
    console.log(newUser)
    /* console.log(req.body) //Para imprimir en la consola lo que se coloco en el body */
    res.status(201).json({msg: "Usuario creado"})


})

//exportar las rutas exportando todo el router:
module.exports = router

//Como tomar los datos del body desde un html y guardarlos en la base de datos en json.?