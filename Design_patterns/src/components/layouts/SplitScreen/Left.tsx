const Left = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <div
      style={{
        padding: "1rem",
        borderRight: "1px solid black",
        backgroundColor: "lightblue",
        height: "800px",
        ...style,
      }}
    >
      Left
    </div>
  );
};

export default Left;
