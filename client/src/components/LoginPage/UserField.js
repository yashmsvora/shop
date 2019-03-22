// SurveyField contains logic to render a single
// label and text input
import React from "react";

export default ({ input, label, id, type, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        {...input}
        id={id}
        type={type}
        required
        style={{ marginBottom: "5px" }}
      />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
