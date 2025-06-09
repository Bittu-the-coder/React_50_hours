import "./App.css";
import ActionForm from "./components/ActionForm";
import { Theme } from "./components/Card";
import Counter from "./components/Counter";
import UseTransition from "./components/UseTransition";

function App() {
  return (
    <>
      <UseTransition />
      <hr />
      <h1 className="text-5xl">Hello</h1>
      <Theme />
      <ActionForm />
      <Counter />
    </>
  );
}

export default App;
