// Filter.js
import React from 'react';

function Filter({ categories, onCategoryChange }) {
  return (
    <div>
      <label htmlFor="category">Filter by category:</label>
      <select id="category" onChange={onCategoryChange}>
        <option value="all">All</option>
        {categories.map(category => (
          <option key={category.id} value={category.value}>{category.label}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
