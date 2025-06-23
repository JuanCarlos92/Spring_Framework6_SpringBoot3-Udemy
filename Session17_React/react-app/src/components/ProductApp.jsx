import { useEffect, useState } from 'react';
import { listProducts } from '../services/ProductService';
import { ProductGrip } from './ProductGrip';



export const ProductApp = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const result = listProducts();
        setProducts(result);
    }, []);
    return (
        <>
            <h1>Hola mundo react!</h1>
            <ProductGrip products ={products}/>
        </>
    );
}