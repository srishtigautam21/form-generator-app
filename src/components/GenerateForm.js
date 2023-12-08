import React from "react";
import "./GenerateForm.css";

const GenerateForm = ({ formInputs }) => {
  return (
    <div className='newFormWrapper'>
      {formInputs.map((item) => {
        const { name, type, validate, min, max, options } = item;
        return type === "checkbox" || type === "radio" ? (
          <label>
            <input type={type} />
            {name}
          </label>
        ) : validate ? (
          <label>
            {name}
            <input type={type} required maxlength={max} minlength={min} />
          </label>
        ) : type === "select" ? (
          <label>
            {name}
            <select>
              <option></option>
              {options.split(",").map((op) => (
                <option key={op}>{op}</option>
              ))}
            </select>
          </label>
        ) : (
          <label>
            {name}
            <input type={type} />
          </label>
        );
      })}
      <button className='submit-btn'>Submit</button>
    </div>
  );
};

export default GenerateForm;
