import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    clearCart,
  } = useCart();

  return (
    <div className="container mx-auto p-4">
      {/* Internal CSS for animations and hover effects */}
      <style>
        {`
          .cart-item {
            transition: background-color 0.3s ease, border 0.3s ease;
          }

          .cart-item:hover {
            background-color: #f3f4f6; /* Light gray */
            border-left: 4px solid #3b82f6; /* Blue border */
          }

          .remove-btn {
            transition: transform 0.3s ease, opacity 0.3s ease;
            transform: translateX(-20px);
            opacity: 0;
          }

          .cart-item:hover .remove-btn {
            transform: translateX(0);
            opacity: 1;
          }
        `}
      </style>

      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="cart-item border p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="w-16 p-2 border rounded"
                      min="1"
                    />
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="remove-btn text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <p className="text-xl font-semibold">
              Total Items: {totalItems}
            </p>
            <p className="text-xl font-semibold">
              Total Price: ${totalPrice.toFixed(2)}
            </p>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white p-2 rounded hover:bg-red-600 mt-4"
            >
              Clear Cart
            </button>
            <Link
              to="/checkout"
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 ml-4"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;