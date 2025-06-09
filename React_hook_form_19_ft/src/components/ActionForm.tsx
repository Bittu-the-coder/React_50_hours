import React from "react";
import { useFormStatus } from "react-dom";

const ActionForm = () => {
  const { pending } = useFormStatus();

  const formAction = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
    };
    console.log(userData);
  };

  return (
    <form
      onSubmit={formAction}
      className="max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow-md"
    >
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Name:
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Email:
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {pending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ActionForm;
