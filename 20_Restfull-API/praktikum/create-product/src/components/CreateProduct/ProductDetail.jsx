import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    const products = location.state?.products || [];

    const [product, setProduct] = useState({});

    const navigate = useNavigate();

    const isLoggedIn = localStorage.getItem('isLoggedIn');

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    useEffect(() => {
        // Ensure that products is an array
        const productsArray = Array.isArray(products) ? products : [];

        const foundProduct = productsArray.find((product) => product.id === id);
        console.log(foundProduct);
        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [id, products]);

    return (
        <div className='container my-5'>
            {product ? (
                <div>
                    <h1>Product Details</h1>
                    <p>ID: {product.id}</p>
                    <p>Name: {product.name}</p>
                    <p>Category: {product.category}</p>
                    <p>Description: {product.description}</p>
                    <p>Price: {product.price}</p>
                </div>
            ) : (
                <p>Product not found.</p>
            )}
        </div>
    );
}

export default ProductDetail;
