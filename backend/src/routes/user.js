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

    const newUser = new User (req.body) //Para que la bd tome lo que se escriba en el body
    await newUser.save() //Para guardar un producto en la base de datos
    console.log(newUser)
    /* console.log(req.body) //Para imprimir en la consola lo que se coloco en el body */
    res.status(201).json({msg: "Usuario creado"})


})

//exportar las rutas exportando todo el router:
module.exports = router

//Como tomar los datos del body desde un html y guardarlos en la base de datos en json.?