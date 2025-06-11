import React from "react";
import useForm from "./useForm";

const FormUse = () => {
  const initialValues = {
    title: "",
    description: "",
    price: 0,
  };
  const validate = {
    title: (value: string) => (value ? undefined : "Title is required"),
    description: (value: string) =>
      value ? undefined : "Description is required",
    price: (value: number) =>
      value > 0 ? undefined : "Price must be greater than 0",
  };
  const { formData, handleChange, handleSubmit } = useForm({
    initialValues,
    validate,
  });
  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit(() => console.log("Form submitted:", formData))}
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormUse;
