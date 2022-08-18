import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products) //send data to frontend
}) //get method has two parameter, 1st is url, 2nd is function that returns products to frontend

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})