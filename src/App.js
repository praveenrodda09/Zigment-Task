import React, { useState } from "react";
import JSONEditor from "./components/JSONEditor"
import FormPreview from "./components/FormPreview";
import "./index.css";

const App = () => {
  const [jsonSchema, setJsonSchema] = useState(null);
  const [error, setError] = useState("");

  const handleJSONChange = (input) => {
    try {
      const parsed = JSON.parse(input);
      setJsonSchema(parsed);
      setError("");
    } catch (err) {
      setError("Invalid JSON");
      setJsonSchema(null);
    }
  };

  return (
    <div className="app-container">
      <div className="split">
        <div className="left">
          <JSONEditor onJSONChange={handleJSONChange} error={error} />
        </div>
        <div className="right">
          <FormPreview schema={jsonSchema} />
        </div>
      </div>
    </div>
  );
};

export default App;