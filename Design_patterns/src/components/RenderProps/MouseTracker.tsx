import React from "react";

type MousePosition = { x: number; y: number };

type MouseTrackerProps = {
  render: (position: MousePosition) => React.ReactNode;
};

const MouseTracker: React.FC<MouseTrackerProps> = ({ render }) => {
  const [mousePosition, setMousePosition] = React.useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ width: "100vw", height: "100vh" }}
    >
      {render(mousePosition)}
    </div>
  );
};

export default MouseTracker;
