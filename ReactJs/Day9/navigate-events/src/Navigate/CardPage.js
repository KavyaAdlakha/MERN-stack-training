import { useLocation } from "react-router-dom";

const CartPage = () => {
    const location = useLocation();
    const product = location.state?.product;

    return(
        <div>
            <h1>Cart Page</h1>
            <hr></hr>
            {product ? (
                <div>
                    <h2>Added Product</h2>
                    <p>Name: {product.name}</p>
                    <p>Price: ${product.price}</p>
                </div>
            ) : (
                <p>No products in your caart.</p>
            )}
        </div>
    );
};
export default CartPage;