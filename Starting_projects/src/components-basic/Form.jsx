import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const [firstNameColor, setFirstNameColor] = useState("black");
  const [lastNameColor, setLastNameColor] = useState("black");
  const [emailColor, setEmailColor] = useState("black");
  const [passwordColor, setPasswordColor] = useState("black");

  const [successMessage, setSuccessMessage] = useState("");
  const [successColor, setSuccessColor] = useState("green");

  const validateForm = () => {
    let isValid = true;

    if (!firstName) {
      setErrorFirstName("First name is required");
      setFirstNameColor("red");
      isValid = false;
    }

    if (!lastName) {
      setErrorLastName("Last name is required");
      setLastNameColor("red");
      isValid = false;
    }

    if (!email) {
      setErrorEmail("Email is required");
      setEmailColor("red");
      isValid = false;
    }

    if (!password) {
      setErrorPassword("Password is required");
      setPasswordColor("red");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log("Form submitted");
      setSuccessMessage("Form submitted successfully");
      setSuccessColor("green");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={`w-full p-2 border rounded ${
                firstNameColor === "red" ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="First Name"
            />
            {errorFirstName && (
              <p className="text-red-500 text-sm mt-1">{errorFirstName}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={`w-full p-2 border rounded ${
                lastNameColor === "red" ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Last Name"
            />
            {errorLastName && (
              <p className="text-red-500 text-sm mt-1">{errorLastName}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-2 border rounded ${
                emailColor === "red" ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Email"
            />
            {errorEmail && (
              <p className="text-red-500 text-sm mt-1">{errorEmail}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-2 border rounded ${
                passwordColor === "red" ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Password"
            />
            {errorPassword && (
              <p className="text-red-500 text-sm mt-1">{errorPassword}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </div>
          {successMessage && (
            <p className={`text-${successColor} text-sm mt-1`}>
              {successMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
