import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Product from "./models/Product.js";
import productsData from "./data/products.js";

dotenv.config();
connectDB();

/* very important : Go and see the line 12 in package.json => 
it's the script to initialise import data from commandLine terminal by 
typing => npm run data:import => hit enter.... great !! */
const importData = async () => {
  try {
    /* for delete all datas inserted in the BDD yet */
    await Product.deleteMany({});
    /* for insert all datas into the BDD */
    await Product.insertMany(productsData);
    console.log("Data import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import");
    process.exit(1);
  }
};
importData();
