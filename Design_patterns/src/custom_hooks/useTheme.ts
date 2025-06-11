import { useEffect, useState } from "react";

interface UseTheme {
  theme: string;
  toggleTheme: () => void;
}

const useTheme = (): UseTheme => {
  const setThemeToLocalStorage = (theme: string) => {
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error("Failed to save theme to localStorage:", error);
    }
  };
  const getThemeFromLocalStorage = (): string => {
    try {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme ? savedTheme : "light";
    } catch (error) {
      console.error("Failed to retrieve theme from localStorage:", error);
      return "light";
    }
  };
  const [theme, setTheme] = useState<string>(getThemeFromLocalStorage());
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  if (theme !== getThemeFromLocalStorage()) setThemeToLocalStorage(theme);
  return { theme, toggleTheme };
};

export default useTheme;

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key “${key}”:`, error);
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const item = window.localStorage.getItem(key);
      item ? setStoredValue(JSON.parse(item)) : setStoredValue(initialValue);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key, initialValue]);

  return [storedValue, setValue] as const;
};

export { useLocalStorage };
