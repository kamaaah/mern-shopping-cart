import express, { Router } from "express";
import {
  getAllProducts,
  getProductById,
} from "../controllers/productController.js";

const router = express.Router();

/* @des  Get all products from db
@route Get /api/products
@access Public
*/
router.get("/", getAllProducts);

/* @des  Get a product by id from db
@route Get /api/products/:id
@access Public
*/
router.get("/:id", getProductById);

export default router;
