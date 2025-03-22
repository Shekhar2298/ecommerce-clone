import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../css/ProductDetails.module.css'; // Import CSS module
import { fetchProductDetails } from '../services/api';
import Review from './Review';

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProductDetails = async () => {
      try {
        const data = await fetchProductDetails(id);
        setProduct(data);
      } catch (error) {
        setError('Failed to load product details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadProductDetails();
  }, [id]);

  const handleAddReview = (reviewText) => {
    setReviews((prevReviews) => [...prevReviews, reviewText]);
  };

  if (loading) {
    return <div className="text-center py-8">Loading product details...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">{product.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.images[0]}
          alt={product.title}
          className={`${styles.productImage} w-full h-96 object-cover rounded-lg`}
        />
        <div>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold">${product.price}</p>
          <button
            className={`${styles.addToCartBtn} mt-4`}
          >
            Add to Cart
          </button>
          <Review reviews={reviews} onAddReview={handleAddReview} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;