import { ReactNode } from "react";
const Compound = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default Compound;

const CardTitle = ({ children }: { children: ReactNode }) => {
  return <h2 className="text-lg font-semibold text-gray-800">{children}</h2>;
};

const CardContent = ({ children }: { children: ReactNode }) => {
  return <p className="text-gray-600">{children}</p>;
};

const CardButton = ({ children }: { children: ReactNode }) => {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      {children}
    </button>
  );
};

Compound.Title = CardTitle;
Compound.Content = CardContent;
Compound.Button = CardButton;
