import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import cors from 'cors';

connectDB();

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({origin: "http://localhost:3000"}))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use("/api/products", productRoutes);
