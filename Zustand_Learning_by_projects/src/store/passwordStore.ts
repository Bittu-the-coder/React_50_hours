import { create } from "zustand";

interface PasswordState {
  length: number;
  includeNumbers: boolean;
  includeSymbols: boolean;
  includeUppercase: boolean;
  includeLowercase: boolean;
  generatedPassword: string;
  setLength: (length: number) => void;
  toggleNumbers: () => void;
  toggleSymbols: () => void;
  toggleUppercase: () => void;
  toggleLowercase: () => void;
  generatePassword: () => void;
}

const usePasswordStore = create<PasswordState>((set) => ({
  length: 6,
  includeNumbers: true,
  includeSymbols: true,
  includeUppercase: true,
  includeLowercase: true,
  generatedPassword: "",
  setLength: (length) => set({ length }),
  toggleNumbers: () =>
    set((state) => ({ includeNumbers: !state.includeNumbers })),
  toggleSymbols: () =>
    set((state) => ({ includeSymbols: !state.includeSymbols })),
  toggleUppercase: () =>
    set((state) => ({ includeUppercase: !state.includeUppercase })),
  toggleLowercase: () =>
    set((state) => ({ includeLowercase: !state.includeLowercase })),
  generatePassword: () => {
    set((state) => {
      const {
        length,
        includeNumbers,
        includeSymbols,
        includeUppercase,
        includeLowercase,
      } = state;

      const lower = "abcdefghijklmnopqrstuvwxyz";
      const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numbers = "0123456789";
      const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
      let validChars = lower;

      if (includeUppercase) validChars += upper;
      if (includeLowercase) validChars += lower;
      if (includeNumbers) validChars += numbers;
      if (includeSymbols) validChars += symbols;

      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
      }

      return { generatedPassword: password };
    });
  },
}));

export default usePasswordStore;
