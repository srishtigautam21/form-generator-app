import React from "react";
import "./UserInputForForm.css";
import { useForm } from "../context/formContext";

const UserInputsForForm = () => {
  const { state, dispatch } = useForm();
  console.log(state);
  let options = [
    "text",
    "password",
    "email",
    "select",
    "number",
    "radio",
    "checkbox",
    "text area",
  ];
  return (
    <div className='formWrapper'>
      <label>
        Name of Input:
        <input type='text' />
      </label>
      <label>
        Type:
        <select>
          <option></option>
          {options.map((op) => (
            <option key={op}>{op}</option>
          ))}
        </select>
      </label>

      <label>
        <input type='checkbox'></input>
        Add Validation
      </label>
      <label>
        <input type='checkbox' />
        Required
      </label>
      <label>
        Max Length:
        <input type='number' />
      </label>
      <label>
        Min Length:
        <input type='number' />
      </label>
      {/* <label>
        Pattern:
        <input type='text' />
      </label> */}
    </div>
  );
};

export default UserInputsForForm;
