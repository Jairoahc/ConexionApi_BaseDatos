//LLamar libreria mongoose
const mongoose = require("mongoose")
//Asignarle nombre a la base de datos
const dbName = "bit-shop"

//Conexion con la URL (la que nos da mongo en connect your app)
const url = `mongodb+srv://jairoahc:Anabella12@cluster0.u5jygb5.mongodb.net/${dbName}?retryWrites=true&w=majority`

//Conexion con mongo
//la conexion con mongo recibe una promesa con .then para evento positivo y .catch para errores
mongoose.connect(url)
.then((db) => console.log(" Conexion con api exitosa"))
.catch((err) => console.log(err))

// exportar mongo
module.exports = mongoose
