import express from "express"
import productsSchema from "../../models/products.model.js"


const router = express.Router()

//traer todos

router.get ('/products', (require, response) => {
    productsSchema
        .find()
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))

});


//crear uno solo

router.post('/products',(require, response) => {
    const servProducts = productsSchema(require.body);
    servProducts
    .save()
    .then((data) => response.json(data))
    .catch((error)=>response.json({ message: error}))
});

// Crear arreglo

router.post('/productsMany',(require, response) => {
    const productsData = require.body;
    productsSchema.insertMany(productsData)
    .then((data) => response.json(data))
    .catch((error)=>response.json({ message: error}))
});


//traer por id

router.get('/products/:id', (require, response) => {
    const { id } = require.params;
    productsSchema.findById(id)
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))
});


// Actualizar por id

//router.put('/products/:id',(require, response) =>{
//    const {id} = require.params;
//    const {product, size, stock} = require.body;
//    productsSchema.updateOne({_id: id}, {$set:{product, color, price, size}})
//    .then((data) => response.json(data))
//    .catch((error)=> response.json({ message: error }))
//});


//Eliminar usuario
router.delete('/products/:id',(require, response) =>{
    const {id} = require.params;
    productsSchema.deleteOne({_id: id})
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
});




export default router;