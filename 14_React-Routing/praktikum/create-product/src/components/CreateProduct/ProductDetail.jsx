import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    const products = location.state?.products || []; // Use optional chaining to safely access state

    const [product, setProduct] = useState({});

    useEffect(() => {
        const foundProduct = products.find((product) => product.id === id);
        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [id, products]);

    return (
        <div>
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
