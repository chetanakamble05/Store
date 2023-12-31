import React, { useEffect, useState } from "react";
import { Trash } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';
import CheckoutModal from "./CheckoutModal";
import toast from "react-hot-toast";
import '../App.css'

export default function CartList({ cart, setCartlist }) {
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [CART, setCART] = useState([]);

  const removeItemFromCart = (cartIndex) => {
    const updatedCart = CART.filter((item, index) => index !== cartIndex);
    setCartlist(updatedCart);
    toast.success('Item Removed');
  };


  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <div className="cart-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {CART?.map((cartItem, cartIndex) => (
            <tr key={cartIndex}>
              <td><img src={cartItem.url} alt={cartItem.description} width={40} className="cart-image" /></td>
              <td>{cartItem.description}</td>
              <td>
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    const _CART = CART.map((item, index) => ({
                      ...item,
                      quantity: cartIndex === index ? (item.quantity > 0 ? item.quantity - 1 : 0) : item.quantity
                    }));
                    setCART(_CART);
                  }}
                >
                  -
                </Button>
                <span className="quantity"> {cartItem.quantity} </span>
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    const _CART = CART.map((item, index) => ({
                      ...item,
                      quantity: cartIndex === index ? item.quantity + 1 : item.quantity
                    }));
                    setCART(_CART);
                  }}
                >
                  +
                </Button>
              </td>
              <td>₹{cartItem.price}</td>
              <td>₹{cartItem.price * cartItem.quantity}</td>
              <td>
                <Trash
                  size={30}
                  className="remove"
                  onClick={() => removeItemFromCart(cartIndex)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="tcprice"><b>Total Cart Price: ₹{CART.map((item) => item.price * item.quantity).reduce((total, value) => total + value, 0)}</b></p>
      <Button className="check" variant='secondary' onClick={() => setShowCheckoutModal(true)}>Proceed to Checkout</Button>

      {showCheckoutModal && (
        <CheckoutModal cart={CART} onClose={() => setShowCheckoutModal(false)} />
      )}
    </div>
  );
}
