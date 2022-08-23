import express from 'express';
import data from './data.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

const app = express();
const PORT = process.env.PORT || 8080;

dotenv.config({path : 'config.env'});

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser : true, useUnifiedTopology:true})
    .then(()=> app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message))

