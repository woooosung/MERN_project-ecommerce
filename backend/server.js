import express from 'express';
import data from './data.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 8080;

dotenv.config({path : 'config.env'});

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(bodyParser.json());

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.use((err, req, res, next) => {
    res.status(500).send({ message : err.message});
})

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser : true, useUnifiedTopology:true})
    .then(()=> app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message))

