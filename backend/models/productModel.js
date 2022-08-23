import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name : { type : String, required : true, unique : true },
        slug : { type : String, required : true, unique : true},
        image : { type : String, required : true },
        brand : { type : String, required : true },
        category : { type : String, required : true },
        description : { type : String, required : true },
        price : { type : Number, required : true },
        countInStock : { type : String, required : true },
        rating : { type : String, required : true },
        numReviews : { type : String, required : true },
    },
    {
        timestamps : true //create a record or document in the product colelction, and automatically add 2 new fields(createdAt, updatedAt)
    }
);

const Product = mongoose.model('Product', productSchema);

export default Product;