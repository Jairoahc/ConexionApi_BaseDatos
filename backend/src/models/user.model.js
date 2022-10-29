//1. Importar mongoose (nota: el schema es la coleccion de mongodb)
const mongoose = require("mongoose")
//2. Llamar a la clase Schema
const {Schema} = mongoose
//3.Crear el schema de lo que se necesite - instanciar
const userSchema =  new Schema(
    {
        /* firstName, lastName, email, password, isAdmin - true || false */
        name: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        isAdmin: {type: Boolean, required: true},

    }, //las llaves de la coleccion.
    {
        versionKey: false,
        timestamps: true
    }, // Que deseamos capturar cada vez que se inserte un dato
)
//4.Exportar como un modelo
module.exports = mongoose.model("user", userSchema)//nombre de coleccion y el schema de la coleccion