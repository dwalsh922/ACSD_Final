import React, {useContext} from "react";
import { Products } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import "../../Components/Navbar/navbar.css"

 const Cart = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return(
        <div> 
            <Navbar/>
        <div className="cart">
            {totalAmount>0 ?( 
            <div className="title">
                <h1>Your Cart Items</h1>
            </div>
            ):(
                <div></div>
            )}
            <div className="cartItem">
                {Products.map((product) => {
                    if(cartItems[product.id] !==0){
                        return(
                            <CartItem data={product}/>
                        )
                    }
                })}  
            </div>
            {totalAmount>0 ? (

           
            <div className="checkout">
                <p>
                    <h1>Subtotal: € {totalAmount}</h1>
                </p>
                <button onClick={() => navigate("/")}> Continue Shopping </button>
                <button> Checkout </button>
            </div>
            ) : (
                <div className="title">
                    <h1>Your Cart Is Empty</h1>
                </div>
             )}
        </div>
        </div>

    )
};
export default Cart;