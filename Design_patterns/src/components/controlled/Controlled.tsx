import { useState, useEffect } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | string>("");
  const [hairColor, setHairColor] = useState("");
  const [nameInputError, setNameInputError] = useState("");

  useEffect(() => {
    if (name.length < 2) {
      setNameInputError("Name must be at least 2 characters or long");
    } else {
      setNameInputError("");
    }
  }, [name]);

  return (
    <form className="flex flex-col gap-2">
      {nameInputError && <p className="text-red-500">{nameInputError}</p>}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded-lg p-2"
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        className="border border-gray-300 rounded-lg p-2"
      />
      <input
        type="text"
        name="hairColor"
        placeholder="Hair Color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
        className="border border-gray-300 rounded-lg p-2"
      />

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
        Submit
      </button>
    </form>
  );
};

export default ControlledForm;
