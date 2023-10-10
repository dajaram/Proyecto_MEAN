import express from "express";
import usersRoutes from "./users.js"
import checkToken from "../../utils/middlewares.js";
import productsRoutes from "./products.js"

const router = express.Router();

router.use('', usersRoutes);
router.use('', checkToken, productsRoutes);



export default router;