import { useState } from "react";
import useFormStore from "../store/formStore";

const FormBuilder = () => {
  const { fields, addField, updateField, removeField, resetForm } =
    useFormStore();
  const [newFieldName, setNewFieldName] = useState(
    `Field ${fields.length + 1}`
  );
  const [newFieldType, setNewFieldType] = useState("text");

  const handleAddField = () => {
    if (!newFieldName.trim()) return;
    addField({
      name: newFieldName,
      value: "",
      type: newFieldType,
    });
    setNewFieldName(`Field ${fields.length + 2}`);
    setNewFieldType("text");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Form Builder</h1>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        {/* Add a new field */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
          <label className="flex-1">
            <span className="block text-sm font-medium text-gray-700 mb-1">
              Field Name:
            </span>
            <input
              type="text"
              value={newFieldName}
              onChange={(e) => setNewFieldName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <select
            value={newFieldType}
            onChange={(e) => setNewFieldType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="password">Password</option>
            <option value="textarea">Textarea</option>
            <option value="date">Date</option>
            <option value="file">File</option>
          </select>
          <button
            type="button"
            onClick={handleAddField}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Add Field
          </button>
        </div>

        <div className="space-y-4">
          {fields.map((field) => (
            <div
              key={field.name}
              className="flex flex-col md:flex-row items-center gap-4 bg-gray-50 p-4 rounded border"
            >
              <label className="flex-1">
                <span className="block text-gray-700 font-medium mb-1">
                  {field.name}
                </span>
                {field.type === "textarea" ? (
                  <textarea
                    value={field.value}
                    onChange={(e) => updateField(field.name, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                ) : (
                  <input
                    type={field.type}
                    value={field.value}
                    onChange={(e) => updateField(field.name, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                )}
              </label>
              <button
                type="button"
                onClick={() => removeField(field.name)}
                className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </form>
      <button
        type="button"
        onClick={resetForm}
        className="mt-6 w-full bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
      >
        Reset Form
      </button>
    </div>
  );
};

export default FormBuilder;
