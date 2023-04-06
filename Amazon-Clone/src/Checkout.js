import React from 'react';
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>

                <div>
                    <h5 style={{textAlign:"left", marginLeft: "10px"}}>Hello {user?.email}</h5>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                    </h2>
                    {basket.map(item=>(
                        <CheckoutProduct
                        image={item.image}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                         />
                    ))}
                </div>
            </div>    

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
