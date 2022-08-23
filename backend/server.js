import express from 'express';
import data from './data.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 8080;

dotenv.config({path : 'config.env'});

app.get('/api/products', (req, res) => {
    res.send(data.products) //send data to frontend
}) //get method has two parameter, 1st is url, 2nd is function that returns products to frontend

app.get('/api/products/slug/:slug', (req, res) => {
    const product = data.products.find(x => x.slug == req.params.slug);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message : 'Product Not Found'});
    }
}) //by colon slug, we can get slug that user enterd

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message : 'Product Not Found'});
    }    
})

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser : true, useUnifiedTopology:true})
    .then(()=> app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message))

