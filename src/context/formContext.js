import { useContext, createContext, useState, useReducer } from "react";

let FormContext = createContext({});

const GetForm = ({ children }) => {
  let initialState = {
    name: "",
    type: "",
    validation: false,
    required: false,
    max: 0,
    min: 0,
    options: "",
  };
  let [newForm, setNewForm] = useState([]);
  const [shouldGenerateForm, setShouldGenerateForm] = useState(false);

  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "NAME_OF_INPUT":
        return {
          ...state,
          name: action.payload,
        };
      case "TYPE_OF_INPUT":
        return {
          ...state,
          type: action.payload,
        };
      case "ADD_VALIDATION":
        return {
          ...state,
          validation: action.payload,
        };
      case "REQUIRED":
        return {
          ...state,
          required: action.payload,
        };
      case "MAX_LENGTH":
        return {
          ...state,
          max: action.payload,
        };
      case "MIN_LENGTH":
        return {
          ...state,
          min: action.payload,
        };
      case "SET_TO_INITIAL":
        return {
          ...action.payload,
        };
      case "ADD_OPTIONS":
        return {
          ...state,
          options: action.payload,
        };

      default:
        return { state };
    }
  };

  const [state, dispatch] = useReducer(reducerFunc, initialState);

  return (
    <FormContext.Provider
      value={{
        state,
        dispatch,
        shouldGenerateForm,
        setShouldGenerateForm,
        newForm,
        setNewForm,
        initialState,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

const useForm = () => useContext(FormContext);
export { GetForm, useForm };
