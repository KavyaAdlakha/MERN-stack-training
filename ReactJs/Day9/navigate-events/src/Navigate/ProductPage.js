import React from "react";
import {useNavigate} from "react-router-dom"

const ProductPage = () => {
    const navigate = useNavigate();

    // Liaat of products (in real app it comes from api)
    const products = [
        {id:1, name: "Laptop", price: 1000},
        {id:2, name: "Smartphone", price: 500},
        {id:3, name: "Headphones", price: 150}
    ];

    /// handle addding to the cart and navigae to cart page

    const addToCart = (product) => {
        // pass product as state when navigating
        navigate('/cart', {state:{product}});
    };

    return(
        <div >
            <h1>Product Page</h1>
            <hr></hr>
            <ul style={{listStyle:"none", padding:"10px", textAlign:"center"}}>
                {products.map((product) => (
                    <li key={product.id}>
                        <span>{product.name} - ${product.price}</span>
                        &nbsp;&nbsp;
                        <button onClick={() => addToCart(product)} style={{backgroundColor:"lightgreen"}}>Add To Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ProductPage
