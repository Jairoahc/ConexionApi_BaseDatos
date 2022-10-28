//llamar librerias
const { Router } = require("express")
const express = require ("express")

const router = express.Router() //enrutador

//importar modelo
const Product = require ("../models/product.model")

//Rutas
//router.get("ruta", () => {})
router.get("/get-products", (req, res) =>{
    res.status(200).json({data: []})
})
// La ruta post es para crear en bd
router.post("/create-product", async (req, res) => {

    const newProduct = new Product (req.body) //Para que la bd tome lo que se escriba en el body
    await newProduct.save() //Para guardar un producto en la base de datos
    console.log(newProduct)
    /* console.log(req.body) //Para imprimir en la consola lo que se coloco en el body */
    res.status(201).json({msg: "mensaje"})


})

//Ruta para listar los productos de la bd
router.get("/search-products", async (req, res) => {
    const products = await Product.find() //si el parentesis va vacio busca todo
    res.status(200).json({data: products})
})

//Ruta para eliminar producto/registro
router.delete("/delete-product", async (req, res) => {
    await Product.findByIdAndDelete(req.query.id)
    return res.status(200).json({msg: "Producto eliminado", id: req.query.id})
})

//Actualizar un producto
router.put("/update-product", async (req, res) => {
    await Product.findByIdAndUpdate(req.query.id, {$set: req.body})//primer parametro id, segundo que se reemplaza
    res.status(200).json({msg: "Producto Actualizado"})
})

//exportar las rutas exportando todo el router:
module.exports = router