//1. Importar mongoose (nota: el schema es la coleccion de mongodb)
const mongoose = require("mongoose")
//2. Llamar a la clase Schema
const {Schema} = mongoose
//3.Crear el schema de lo que se necesite - instanciar
const userSchema =  new Schema(
    {
        /* firstName, lastName, email, password, isAdmin - true || false */
        name: {type: String, require: true},
        lastName: {type: String, require: true},
        email: {type: String, require: true},
        password: {type: String, require: true},
        isAdmin: {type: Boolean, require: true},

    }, //las llaves de la coleccion.
    {
        versionKey: false,
        timestamps: true
    }, // Que deseamos capturar cada vez que se inserte un dato
)
//4.Exportar como un modelo
module.exports = mongoose.model("user", userSchema)//nombre de coleccion y el schema de la coleccion