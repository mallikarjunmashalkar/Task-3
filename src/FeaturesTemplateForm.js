import React, { useState } from "react";

const FeaturesTemplateForm = ({ onSubmit }) => {
  const [featureName, setFeatureName] = useState("");
  const [dataType, setDataType] = useState("");
  const [isRequired, setIsRequired] = useState(false);
  const [inputType, setInputType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const featureDetails = {
      featureName,
      dataType,
      isRequired,
      inputType,
    };
    onSubmit(featureDetails);
    setFeatureName("");
    setDataType("");
    setIsRequired(false);
    setInputType("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Feature Name:
        <input
          type="text"
          value={featureName}
          onChange={(e) => setFeatureName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Data Type:
        <input
          type="text"
          value={dataType}
          onChange={(e) => setDataType(e.target.value)}
        />
      </label>
      <br />
      <label>
        Is Required:
        <input
          type="checkbox"
          checked={isRequired}
          onChange={(e) => setIsRequired(e.target.checked)}
        />
      </label>
      <br />
      <label>
        Input Type:
        <input
          type="text"
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Feature</button>
    </form>
  );
};

export default FeaturesTemplateForm;
