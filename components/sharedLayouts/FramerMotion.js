import { motion } from "framer-motion";

const FramerMotion = ({ children }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
        }}
    >
        {children}
    </motion.div>
);
export default FramerMotion;