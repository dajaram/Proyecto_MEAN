import express from "express"
import orderSchema from "../../models/order.model.js"


const router = express.Router()

router.post('/create-order',(require, response) => {
    const servProducts = orderSchema(require.body);
    servProducts
    .save()
    .then((data) => response.json(data))
    .catch((error)=>response.json({ message: error}))
});

export default router;