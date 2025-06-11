import React from "react";

const Default = ({ children }: { children: React.ReactNode }) => {
  return <div className="default bg-gray-200">{children}</div>;
};

export default Default;
