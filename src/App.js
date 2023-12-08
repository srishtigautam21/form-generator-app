import "./App.css";
import UserInputsForForm from "./components/UserInputsForForm";
import { useForm } from "./context/formContext";
import GenerateForm from "./components/GenerateForm";

function App() {
  const { shouldGenerateForm, newForm } = useForm();
  return (
    <div className='App'>
      <div className='heading'>Form Generator</div>
      <div className='wrapper'>
        <UserInputsForForm />
      </div>
      {shouldGenerateForm && (
        <>
          <div className='heading'>Generated Form</div>
          <GenerateForm formInputs={newForm} />
        </>
      )}
    </div>
  );
}

export default App;
