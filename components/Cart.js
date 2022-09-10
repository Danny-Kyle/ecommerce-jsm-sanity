import React, { useRef } from "react";
import {
  AiOutlineShopping,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
} from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { TiDeleteOutline } from "react-icons/ti";
import { Toast } from "react-hot-toast";
import { useStateContext } from "../context/stateContext";
import { urlFor } from "../lib/client";
import Link from "next/link";

const Cart = ({}) => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onDelete } =
    useStateContext();
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          onClick={() => setShowCart(false)}
          className="cart-heading"
        >
          <AiOutlineLeft />
          <span className="cart-heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <GiShoppingCart size={150} />
            <h2>Your Cart is currently Empty</h2>
            <Link href={"/"}>
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Start Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span className="minus" onClick={()=> toggleCartItemQuantity(item._id, 'dec')}>
                          <AiOutlineMinus />
                        </span>
                        <span className="num" onClick={""}>
                          {item.quantity}
                        </span>
                        <span className="plus" onClick={()=> toggleCartItemQuantity(item._id, 'inc')}>
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button className="remove-item" type="button" onClick={() => onDelete(item)}>
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>SubTotal: </h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button className="btn" type="button" onClick={""}>
                Pay and Checkout
              </button>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
