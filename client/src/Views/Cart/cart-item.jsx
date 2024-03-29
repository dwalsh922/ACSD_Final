import React, {useContext} from "react";
import { ShopContext } from "../../context/shop-context";
import "./cart.css";

export const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);


    return(
        <div className="cart-item">
            <img src={productImage}/>
            <div className="description">
                <p>
                    <b>
                        {productName}
                    </b>
                </p>
                <p>
                    €{price}
                </p>
                <div className="countHandler">
                    <button className="bttn" onClick={() => removeFromCart(id)}> - </button>
                    <input className="input" value={cartItems[id]} onChange={(e) => updateCartItemCount (Number(e.target.value), id)}/>
                    <button className="bttn" onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    )
}