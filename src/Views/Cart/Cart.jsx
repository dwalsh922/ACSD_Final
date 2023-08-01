import React, {useContext} from "react";
import { Products } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

 const Cart = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return(
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
                    Subtotal: € {totalAmount}
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
    )
};
export default Cart;