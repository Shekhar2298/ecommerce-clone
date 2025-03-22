import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from '../css/ProductCard.module.css'; // Import CSS module

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className={styles.productCard}>
      <Link to={`/products/${product.id}`}>
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-600">${product.price}</p>
        </div>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className={styles.addToCartBtn}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;