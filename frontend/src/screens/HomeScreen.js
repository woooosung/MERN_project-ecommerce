import { Link } from "react-router-dom";
import { useEffect, useReducer } from "react";
import axios from 'axios';
import logger from 'use-reducer-logger';

const reducer= (state, action) => { //by using reducer hook, we can depart state logic with component 
  switch(action.type){
    case 'FETCH_REQUEST':
      return {...state, loading : true}; //returning state keep the previous value
    case 'FETCH_SUCCESS':
      return {...state, products: action.payload, loading: false}; //action.payload contains all data from backend
    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
}

function HomeScreen() {
    const [{loading, error, products}, dispatch] = useReducer(logger(reducer), {
      products: [], loading : true, error : '',
    });
    //const [products, setProducts] = useState([]);
    useEffect(()=>{
      const fetchData = async () => {
        dispatch({type: 'FETCH_REQUEST'});
        try {
          const result = await axios.get('/api/products'); // by calling axios.get method, send ajax request to this url and store it in var 
          dispatch({type:'FETCH_SUCCESS', payload : result.data}) //result.data is data in backend
        } catch (error) {
          dispatch({type: 'FETCH_FAIL', payload : error.message});
        }
      };
      fetchData();
    },[])

    return (
    <div>
        <h1>Featured Products</h1>
        <div className="products">
          {
            loading ? (<div>Loading...</div>)
            :
            error ? (<div>{error}</div>)
            :
            (
            products.map((product) => (
              <div className="product" key={product.slug}>
                <Link to={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </Link>
                <div className="product-info">
                  <Link to={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </Link>
                  <p>
                    <strong>${product.price}</strong>
                  </p>
                  <button>Add to cart</button>
                </div>
              </div>
            )))
          }
        </div>
    </div>)
}

export default HomeScreen;