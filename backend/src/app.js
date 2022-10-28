//instalar librerias
const express = require("express")
const cors = require("cors")

const app = express()
//Establecer puerto
const port = 5000

//middelwares
require("./database")
app.use(cors())
//Para que express entienda el formato json cuando se envia atraves de un body
app.use(express.json())

//Rutas
app.get("/api", (req, res) => {
    res.status(200).json({msg: "Bit-shop API V 1.0.0"})
})
//app.use(/activadorDeRutas, importacion de las rutas que se pueden usar con esta ruta)
app.use("/product", require("./routes/product"))
app.use("/user", require("./routes/user"))


//Listen del puerto
app.listen(port, () => {console.log("Api corriendo en el puerto", port)})