import React from "react";

interface ButtonProps {
  type: "primary" | "secondary" | "danger";
  label: string;
}

const ButtonFactory = ({ type, label }: ButtonProps) => {
  switch (type) {
    case "primary":
      return <PrimaryButton label={label} type={"primary"} />;
    case "secondary":
      return <SecondaryButton label={label} type={"secondary"} />;
    case "danger":
      return <DangerButton label={label} type={"danger"} />;
    default:
      return null;
  }
};

export default ButtonFactory;

const PrimaryButton = ({ label }: ButtonProps) => {
  return (
    <button className="bg-blue-500 text-white p-2 rounded">{label}</button>
  );
};

const SecondaryButton = ({ label }: ButtonProps) => {
  return (
    <button className="bg-gray-500 text-white p-2 rounded">{label}</button>
  );
};

const DangerButton = ({ label }: ButtonProps) => {
  return <button className="bg-red-500 text-white p-2 rounded">{label}</button>;
};
