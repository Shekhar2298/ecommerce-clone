import React, { useState } from 'react';

export const Review = ({ reviews, onAddReview }) => {
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim()) {
      onAddReview(reviewText);
      setReviewText('');
    }
  };

  return (
    <div className="mt-6">
      {/* Internal CSS for animations and hover effects */}
      <style>
        {`
          .review-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .review-card:hover {
            transform: scale(1.02);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }

          .submit-review-btn {
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
          }

          .submit-review-btn:hover {
            background-color: #1e40af; /* Darker shade of blue */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>

      <h3 className="text-xl font-bold mb-4">Reviews</h3>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write a review..."
          className="w-full p-2 border rounded"
          rows="3"
        />
        <button
          type="submit"
          className="submit-review-btn bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mt-2"
        >
          Submit Review
        </button>
      </form>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="review-card border p-4 rounded-lg">
            <p>{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;