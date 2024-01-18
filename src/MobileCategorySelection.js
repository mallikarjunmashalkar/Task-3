import React from "react";

const MobileCategorySelection = ({ categories, onSelectCategory }) => {
  return (
    <div>
      <label>Select Mobile Category:</label>
      <select onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MobileCategorySelection;
