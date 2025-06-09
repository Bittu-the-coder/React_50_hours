import { useActionState } from "react";

const increament = (prev: number, formData) => {
  if (formData.name) {
    console.log(`Name entered: ${formData.name}`);
  }
  return prev + 1;
};

const Counter = () => {
  const [state, formAction] = useActionState(increament, 0);
  return (
    <div>
      <form>
        <h1 className="text-3xl">{state}</h1>
        <button className="bg-teal-300 p-2" formAction={formAction}>
          Increment
        </button>
        <br />
        <input
          placeholder="Please enter your name"
          type="text"
          className="border-2"
          name="name"
        />
      </form>
    </div>
  );
};

export default Counter;
