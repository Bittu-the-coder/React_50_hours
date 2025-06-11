interface SplitScreenProps {
  leftWeight: number;
  rightWeight: number;
  children: [React.ReactElement, React.ReactElement];
}

const SplitScreen = ({
  children,
  leftWeight,
  rightWeight,
}: SplitScreenProps) => {
  const [left, right] = children as [React.ReactElement, React.ReactElement];
  const leftWidth = `${leftWeight}rem`;
  const rightWidth = `${rightWeight}rem`;
  return (
    <section style={{ display: "flex", width: "100%" }}>
      <div style={{ flex: leftWeight, width: leftWidth }}>{left}</div>
      <div style={{ flex: rightWeight, width: rightWidth }}>{right}</div>
    </section>
  );
};

export default SplitScreen;
