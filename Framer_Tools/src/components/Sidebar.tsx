import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const sidebarVariants = {
  open: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  closed: {
    x: "-100%",
    opacity: 0,
    scale: 0.95,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

const linkVariants = {
  open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300 } },
  closed: {
    opacity: 0,
    x: -20,
    transition: { type: "spring", stiffness: 300 },
  },
};

const links = [
  { label: "Home", href: "#" },
  { label: "Link 1", href: "#" },
  { label: "Link 2", href: "#" },
  { label: "Link 3", href: "#" },
  { label: "Link 4", href: "#" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => setIsOpen((open) => !open);

  return (
    <div className="relative">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            className="fixed top-0 left-0 w-72 h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white p-6 shadow-2xl z-40 flex flex-col"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
          >
            <button
              onClick={toggleSidebar}
              className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors focus:outline-none"
              aria-label="Close sidebar"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M6 6l12 12M6 18L18 6"
                />
              </svg>
            </button>
            <h1 className="text-3xl font-extrabold mb-8 tracking-tight">
              Sidebar
            </h1>
            <ul className="space-y-3 flex-1">
              {links.map((link, idx) => (
                <motion.li
                  key={link.label}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{ delay: 0.1 + idx * 0.07 }}
                >
                  <a
                    href={link.href}
                    className="block px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto text-xs text-gray-400 text-center">
              &copy; {new Date().getFullYear()} Sidebar UI
            </div>
          </motion.section>
        )}

        {!isOpen && (
          <button
            onClick={toggleSidebar}
            className="fixed top-6 left-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none"
            aria-label="Open sidebar"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <rect
                x="4"
                y="6"
                width="16"
                height="2"
                rx="1"
                fill="currentColor"
              />
              <rect
                x="4"
                y="11"
                width="16"
                height="2"
                rx="1"
                fill="currentColor"
              />
              <rect
                x="4"
                y="16"
                width="16"
                height="2"
                rx="1"
                fill="currentColor"
              />
            </svg>
          </button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
