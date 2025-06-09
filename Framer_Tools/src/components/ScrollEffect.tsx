import { motion, useScroll, useTransform } from "framer-motion";

const ScrollEffect = () => {
  const { scrollYProgress } = useScroll();

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="h-[200vh] p-[20px]">
      {/* Scroll Progress Line */}
      <motion.div
        className="fixed top-0 left-0 h-[5px] bg-red-500"
        style={{
          width: lineWidth,
          transition: "width 0.1s ease",
        }}
      />

      {/* Random text  */}
      {Array.from({ length: 100 }, (_, i) => (
        <div key={i} className="text-gray-800 text-lg p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      ))}
    </div>
  );
};

export default ScrollEffect;
