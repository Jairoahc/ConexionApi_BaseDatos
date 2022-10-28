//1. Importar mongoose (nota: el schema es la coleccion de mongodb)
const mongoose = require("mongoose")
//2. Llamar a la clase Schema
const {Schema} = mongoose
//3.Crear el schema de lo que se necesite - instanciar
const productSchema =  new Schema(
    {
        name: {type: String, require: true},
        price: {type: Number, require: true},
        description: {type: String, default:"El vendedor no ha añadido una descripcion"},
        image: {type: String, default: "Sin imagen adjunta"},
        stock: {type: Number, default: 0},
        keyWords: {type: Array, default: []}, // default habra un array o lista vacia/o

    }, //las llaves de la coleccion.
    {
        versionKey: false,
        timestamps: true
    }, // Que deseamos capturar cada vez que se inserte un dato
)
//4.Exportar como un modelo
module.exports = mongoose.model("product", productSchema)//nombre de coleccion y el schema de la coleccion