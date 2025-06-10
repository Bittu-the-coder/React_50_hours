import { create } from "zustand";
//------------- a Zustand store for make a form -------------//

interface FormField {
  name: string;
  value: string;
  type: "text" | "number" | "password" | "textarea" | "date" | "file";
}

interface FormState {
  fields: FormField[];
  addField: (field: FormField) => void;
  updateField: (name: string, value: string) => void;
  removeField: (name: string) => void;
  resetForm: () => void;
}

const useFormStore = create<FormState>((set) => ({
  fields: [],
  addField: (field: FormField) =>
    set((state) => ({ fields: [...state.fields, field] })),
  updateField: (name: string, value: string) =>
    set((state) => ({
      fields: state.fields.map((field) =>
        field.name === name ? { ...field, value } : field
      ),
    })),
  removeField: (name: string) =>
    set((state) => ({
      fields: state.fields.filter((field) => field.name !== name),
    })),
  resetForm: () => set({ fields: [] }),
}));

export default useFormStore;
