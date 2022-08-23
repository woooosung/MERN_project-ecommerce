import bcrypt from 'bcryptjs';

const data = {
    users : [
      {
        name : 'woosung',
        email : 'woosung@coect.kr',
        password : bcrypt.hashSync('admin123'),
        isAdmin : true,
      },
      {
        name : 'mingyu',
        email : 'mgpark@coect.kr',
        password : bcrypt.hashSync('coect2022'),
        isAdmin : false,
      }
    ],
    products: [
      {
        name: 'Nike Slim shirt',
        slug: 'nike-slim-shirt',
        category: 'Shirts',
        image: '/images/p1.jpeg', // 679px × 829px
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality shirt',
      },
      {
        name: 'Adidas Fit Shirt',
        slug: 'adidas-fit-shirt',
        category: 'Shirts',
        image: '/images/p2.jpeg',
        price: 250,
        countInStock: 0,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        name: 'Nike Slim Pant',
        slug: 'nike-slim-pant',
        category: 'Pants',
        image: '/images/p3.jpeg',
        price: 25,
        countInStock: 15,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
        name: 'Adidas Fit Pant',
        slug: 'adidas-fit-pant',
        category: 'Pants',
        image: '/images/p4.jpeg',
        price: 65,
        countInStock: 5,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
    ],
  };//inside data object, products is consisted with array of objects
export default data;