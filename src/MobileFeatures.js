import React, { useState } from "react";
import FeaturesTemplateForm from "./FeaturesTemplateForm";

const MobileFeatures = ({ category, onSave }) => {
  const [mobileFeatures, setMobileFeatures] = useState([]);

  const handleAddFeature = (featureDetails) => {
    setMobileFeatures((prevFeatures) => [...prevFeatures, featureDetails]);
  };

  const handleSaveMobile = () => {
    onSave({ category, features: mobileFeatures });
  };

  return (
    <div>
      <h2>{category} Features</h2>
      <FeaturesTemplateForm onSubmit={handleAddFeature} />
      <ul>
        {mobileFeatures.map((feature, index) => (
          <li key={index}>
            {feature.featureName} - {feature.dataType} -{" "}
            {feature.isRequired ? "Required" : "Not Required"} -{" "}
            {feature.inputType}
          </li>
        ))}
      </ul>
      <button onClick={handleSaveMobile}>Save Mobile</button>
    </div>
  );
};

export default MobileFeatures;
