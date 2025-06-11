import React from "react";

const Right = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <div style={{ padding: "1rem", backgroundColor: "pink", ...style }}>
      Right
    </div>
  );
};

export default Right;
