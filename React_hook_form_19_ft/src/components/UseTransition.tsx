import React, { useTransition, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center h-screen"
    >
      <h1 className="text-4xl font-bold">Welcome to UseTransition Example</h1>
    </motion.div>
  );
};

const PostData = Array.from(
  { length: 1000 },
  (_, index) => `Post ${index + 1}`
);

const Posts = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center h-[80%]"
    >
      <h1 className="text-4xl font-bold">Posts</h1>
      <ul className="list-disc pl-5">
        {PostData.map((post) => (
          <motion.li
            key={post}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg"
          >
            {post}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center h-screen"
    >
      <h1 className="text-4xl font-bold">Contact Us</h1>
    </motion.div>
  );
};

const UseTransition = () => {
  const [isPending, startTransition] = useTransition();
  const [isActive, setIsActive] = useState("home");

  const handleLinkClick = (link: string) => {
    startTransition(() => {
      setIsActive(link);
    });
  };

  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <ul className="flex justify-center items-center space-x-4">
          <li
            className={`px-4 py-2 rounded-md ${
              isActive === "home" ? "bg-blue-600" : "hover:bg-blue-500"
            }`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </li>
          <li
            className={`px-4 py-2 rounded-md ${
              isActive === "post" ? "bg-blue-600" : "hover:bg-blue-500"
            }`}
            onClick={() => handleLinkClick("post")}
          >
            Post
          </li>
          <li
            className={`px-4 py-2 rounded-md ${
              isActive === "contact" ? "bg-blue-600" : "hover:bg-blue-500"
            }`}
            onClick={() => handleLinkClick("contact")}
          >
            Contact Us
          </li>
        </ul>
      </nav>

      <AnimatePresence>
        {isPending && <p className="text-blue-500">Loading...</p>}
        {isActive === "home" && <Home />}
        {isActive === "post" && <Posts />}
        {isActive === "contact" && <Contact />}
      </AnimatePresence>
    </div>
  );
};

export default UseTransition;
