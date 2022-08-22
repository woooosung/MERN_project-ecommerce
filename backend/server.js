import express from 'express';
import data from './data.js';

const app = express();

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
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})