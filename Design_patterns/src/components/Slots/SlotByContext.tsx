import React from "react";

interface MyContextProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const MyContext = React.createContext<MyContextProps | undefined>(
  undefined
);

const MyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [value, setValue] = React.useState<string>("Initial Value");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = React.useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

const SlotByContext = () => {
  const { value, setValue } = useMyContext();

  return (
    <MyProvider>
      <div>
        <h2>SlotByContext</h2>
        <p>Current Value: {value}</p>
        <button onClick={() => setValue("New Value")}>Change Value</button>
      </div>
    </MyProvider>
  );
};

export default SlotByContext;
