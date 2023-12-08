import React from "react";
import "./UserInputForForm.css";
import { useForm } from "../context/formContext";
import { useState } from "react";

const UserInputsForForm = () => {
  const { state, dispatch, setShouldGenerateForm, setNewForm, initialState } =
    useForm();
  const [open, setOpen] = useState(false);
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
        Name of Input
        <input
          type='text'
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "NAME_OF_INPUT", payload: e.target.value })
          }
        />
      </label>
      <label>
        Type:
        <select
          value={state.type}
          onChange={(e) =>
            dispatch({ type: "TYPE_OF_INPUT", payload: e.target.value })
          }
        >
          <option></option>
          {options.map((op) => (
            <option key={op}>{op}</option>
          ))}
        </select>
      </label>
      {state.type === "select" && (
        <label>
          Add <span style={{ fontWeight: "bold" }}>options</span> for dropdown{" "}
          <br></br>
          <p style={{ fontStyle: "italic", color: "gray" }}>
            Example: punjab,amritsar,delhi
          </p>
          <textarea
            value={state.options}
            onChange={(e) => {
              dispatch({ type: "ADD_OPTIONS", payload: e.target.value });
            }}
          />
        </label>
      )}

      <label>
        <input
          type='checkbox'
          value={state.validation}
          onChange={(e) => {
            setOpen((open) => !open);
            dispatch({ type: "ADD_VALIDATION", payload: e.target.checked });
          }}
        />
        Add Validation
      </label>
      {open && (
        <>
          <label>
            <input
              type='checkbox'
              value={state.required}
              onChange={(e) =>
                dispatch({ type: "REQUIRED", payload: e.target.checked })
              }
            />
            Required
          </label>
          <label>
            Max Length:
            <input
              type='number'
              value={state.max}
              onChange={(e) =>
                dispatch({ type: "MAX_LENGTH", payload: e.target.value })
              }
            />
          </label>
          <label>
            Min Length:
            <input
              type='number'
              value={state.min}
              onChange={(e) =>
                dispatch({ type: "MIN_LENGTH", payload: e.target.value })
              }
            />
          </label>
        </>
      )}
      <button
        className='generate-btn'
        onClick={() => {
          setShouldGenerateForm(true);
          setNewForm((prev) => [...prev, state]);
          dispatch({ type: "SET_TO_INITIAL", payload: { ...initialState } });
          setOpen(false);
        }}
      >
        Generate Form
      </button>
    </div>
  );
};

export default UserInputsForForm;
