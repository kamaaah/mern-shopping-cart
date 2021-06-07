import express from 'express';
import Product from '../models/Product.js';
import mongoose from 'mongoose';


const router = express.Router();

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server error"})
    }
}
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
// if(!mongoose.Types.ObjectId.isValid(id))
//     return res.status(400).send("No record with given id : " + id);
    
    res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server error"})
    }
}

export default router;