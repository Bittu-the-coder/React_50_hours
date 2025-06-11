import React, { type ReactNode } from "react";

const Name = ({
  title,
  content,
  button,
}: {
  title: ReactNode;
  content: ReactNode;
  button: ReactNode;
}) => {
  return (
    <div>
      {title}
      {content}
      {button}
    </div>
  );
};

export default Name;
