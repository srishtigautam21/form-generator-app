import { useContext, createContext } from "react";
import { useReducer } from "react";

let FormContext = createContext({});

const GetForm = ({ children }) => {
  let initialState = {
    name: "",
    type: "",
    validation: false,
    required: false,
    max: 0,
    min: 0,
  };

  const reducerFunc = (state, action) => {
    switch (action.type) {
    }
  };

  const [state, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};
const useForm = () => useContext(FormContext);
export { GetForm, useForm };
