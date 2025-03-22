import React from 'react';

export const FilterSort = ({ categories, onFilter, onSort }) => {
  return (
    <div className="flex space-x-4 mb-6">
      {/* Internal CSS for animations and hover effects */}
      <style>
        {`
          .filter-sort-dropdown {
            transition: border-color 0.3s ease;
          }

          .filter-sort-dropdown:focus {
            border-color: #3b82f6; /* Blue border */
          }
        `}
      </style>

      <select
        onChange={(e) => onFilter(e.target.value)}
        className="filter-sort-dropdown p-2 border rounded"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => onSort(e.target.value)}
        className="filter-sort-dropdown p-2 border rounded"
      >
        <option value="">Sort By</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
};

export default FilterSort;