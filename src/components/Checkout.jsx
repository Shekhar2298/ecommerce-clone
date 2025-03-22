import React from 'react';
import { useCart } from '../context/CartContext';

export const Checkout = () => {
  const { totalPrice, clearCart } = useCart();

  return (
    <div className="container mx-auto p-4">
      {/* Internal CSS for animations and hover effects */}
      <style>
        {`
          .place-order-btn {
            transition: transform 0.3s ease, background-color 0.3s ease;
          }

          .place-order-btn:hover {
            transform: scale(1.05);
            background-color: #1e40af; /* Darker shade of blue */
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }

          .total-price {
            animation: pulse 2s infinite;
          }
        `}
      </style>

      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <p className="total-price text-xl font-semibold">
        Total Amount: ${totalPrice.toFixed(2)}
      </p>
      <button
        onClick={clearCart}
        className="place-order-btn bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mt-4"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;