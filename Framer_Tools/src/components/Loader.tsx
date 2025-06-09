import { motion } from "framer-motion";
const Loader = () => {
  return (
    <div className="flex  items-center justify-center h-screen">
      <motion.div
        className="relative w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full "
        animate={{ rotate: 360 }}
        style={{ borderTopColor: "transparent" }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute inset-0 border-4 border-blue-300 border-solid rounded-full m-1"
          style={{ borderTopColor: "transparent" }}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0 border-1 border-blue-500 border-solid rounded-full m-1"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;
