import { useEffect, useReducer } from "react";
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from "react-helmet-async";

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
        <Helmet>
          <title>Amazona</title>
        </Helmet>
        <h1>Featured Products</h1>
        <div className="products">
          {
            loading ? (<div>Loading...</div>)
            :
            error ? (<div>{error}</div>)
            :
            (
              <Row>
                {products.map((product) => (
                  <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                    <Product product={product}></Product>
                  </Col>
                ))}
              </Row>
            )}
        </div>
    </div>)
}

export default HomeScreen;