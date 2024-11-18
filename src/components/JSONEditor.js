import React, { useState } from "react";

const JSONEditor = ({ onJSONChange, error }) => {
  const [jsonInput, setJsonInput] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setJsonInput(value);
    onJSONChange(value);
  };

  return (
    <div className="editor-container">
      <textarea
        value={jsonInput}
        onChange={handleInputChange}
        placeholder="Enter JSON schema here..."
        className="json-editor"
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default JSONEditor;