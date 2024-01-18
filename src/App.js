import React, { useState } from "react";
import MobileCategorySelection from "./MobileCategorySelection";
import MobileFeatures from "./MobileFeatures";

const App = () => {
  const mobileCategories = [
    "Android Mobiles",
    "iPhones",
    "Keypad Mobiles",
    "Non-Android Screen Touch Mobiles",
    "Windows Mobiles",
    "MP3 Mobiles",
  ];

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };

  const handleSaveMobileFeatures = (mobileDetails) => {
    console.log("Saved Mobile Features:", mobileDetails);
  };

  return (
    <div>
      <h1>Mobile Features Management</h1>
      <MobileCategorySelection
        categories={mobileCategories}
        onSelectCategory={handleCategorySelection}
      />
      {selectedCategory && (
        <MobileFeatures
          category={selectedCategory}
          onSave={handleSaveMobileFeatures}
        />
      )}
    </div>
  );
};

export default App;
