import express from "express";
import usersRoutes from "./users.js"
import checkToken from "../../utils/middlewares.js";
import productsRoutes from "./products.js"
import ordersRoutes from "./orders.js"

const router = express.Router();

router.use('', usersRoutes);
router.use('',  productsRoutes);
router.use('', ordersRoutes);



export default router;