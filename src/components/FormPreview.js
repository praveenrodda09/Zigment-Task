import React from "react";

const FormPreview = ({ schema }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());
    console.log("Form Data:", formValues);
    alert("Form submitted successfully!");
  };

  if (!schema) {
    return <p className="placeholder">Preview will appear here...</p>;
  }

  return (
    <div className="form-container">
      <h2>{schema.formTitle || "Form"}</h2>
      <p>{schema.formDescription}</p>
      <form onSubmit={handleSubmit}>
        {schema.fields?.map((field) => (
          <div key={field.id} className="form-field">
            <label htmlFor={field.id}>{field.label}</label>
            {field.type === "text" && (
              <input
                type="text"
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
            {field.type === "email" && (
              <input
                type="email"
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                required={field.required}
                pattern={field.validation?.pattern}
                title={field.validation?.message}
              />
            )}
            {field.type === "select" && (
              <select id={field.id} name={field.id} required={field.required}>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
            {field.type === "radio" &&
              field.options?.map((option) => (
                <div key={option.value}>
                  <input
                    type="radio"
                    id={`${field.id}-${option.value}`}
                    name={field.id}
                    value={option.value}
                    required={field.required}
                  />
                  <label htmlFor={`${field.id}-${option.value}`}>
                    {option.label}
                  </label>
                </div>
              ))}
            {field.type === "textarea" && (
              <textarea
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
          </div>
        ))}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPreview;
