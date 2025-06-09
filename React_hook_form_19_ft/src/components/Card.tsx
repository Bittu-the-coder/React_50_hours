import React from "react";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const Theme = () => {
  return (
    <ThemeProvider>
      <Card />
    </ThemeProvider>
  );
};

const Card = () => {
  const context = React.use(ThemeContext);
  if (!context) {
    throw new Error("Card must be used within a ThemeProvider");
  }
  const { theme, toggleTheme } = context;

  return (
    <div
      className={`max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold">Professional Card</h3>
        <p className="text-sm">
          This is a professional card component with theme support. Click the
          button to toggle theme.
        </p>
        <button
          onClick={toggleTheme}
          className="mt-4 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Card;
