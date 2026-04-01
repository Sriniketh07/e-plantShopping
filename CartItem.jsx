import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from './CartSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector(state => state.cart);

  const handleCheckout = () => {
    alert("Thank you for shopping at Paradise Nursery!\n\nCheckout is Coming Soon...");
  };

  if (items.length === 0) {
    return <div style={{padding: '50px', textAlign: 'center'}}><h2>Your Cart is Empty</h2></div>;
  }

  return (
    <div style={{ padding: '30px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>Shopping Cart</h1>
      <h2>Total: ₹{totalAmount}</h2>

      {items.map(item => (
        <div key={item.id} style={{ display: 'flex', marginBottom: '20px', border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
          <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '20px' }} />
          <div style={{ flex: 1 }}>
            <h3>{item.name}</h3>
            <p>₹{item.price} × {item.quantity}</p>
          </div>
          <div>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <button onClick={() => dispatch(removeFromCart(item.id))} style={{backgroundColor: 'red', color: 'white', marginLeft: '10px'}}>Delete</button>
          </div>
        </div>
      ))}

      <button onClick={handleCheckout} style={{padding: '15px 30px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '8px'}}>
        Checkout (Coming Soon)
      </button>
    </div>
  );
};

export default CartItem;
