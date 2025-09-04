import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AccordionSection({ isOpen, children }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight); // measure natural height
    }
  }, [children]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <div ref={ref}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
