import { useState } from "react";
import { motion } from "framer-motion";
import CourseEditModal from "./CourseEditModal";


const CourseDetail = ({ course }) => {
    let [isOpen, setIsOpen] = useState(false);
    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }
    return (
        <motion.div className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <h1 className="text-xl font-bold tracking-wider">Course Detail</h1>
            <h3>{course.title}</h3>
            <h3>{course.subtitle}</h3>
            <div className="flex space-x-7">
                <button onClick={() => {
                    openModal()
                }} className="bg-indigo-700 px-4 py-2 rounded-md">Edit Course</button>
            </div>
            {isOpen && <CourseEditModal isOpen={isOpen} closeModal={closeModal} course={course} />}
        </motion.div>
    )
};
export default CourseDetail;