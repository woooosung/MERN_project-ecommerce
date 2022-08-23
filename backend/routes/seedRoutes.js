import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
    try {
        await Product.deleteMany({}); //returns all record in product 
        const createdProducts = await Product.insertMany(data.products);

        await User.deleteMany({}); //returns all record in product 
        const createdUsers = await User.insertMany(data.users);
        res.send({ createdProducts, createdUsers });
    } catch (error) {
        res.status(404).json({ message : error.message });
    }
});

export default seedRouter;
