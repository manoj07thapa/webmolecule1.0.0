import Link from "next/link";
import { useState } from "react";
import { API } from "aws-amplify";
import { motion } from "framer-motion";
import CourseDeleteModal from "./CourseDeleteModal";
import SlideOverPanel from "../../utils/SlideOverPanel";


const columns = [
    { header: "Username", accessor: "username" },
    { header: "Email", accessor: "email" },
    { header: "Phone Number", accessor: "phone_number" },

];
const EnrolledStudentTable = ({ enrollees, courseId, deleteUserCourse }) => {
    let [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false); //for slideover


    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [selectedData, setSelectedData] = useState({})

    const handleCheckboxChange = (index, row) => {
        if (selectedIndex === index) {
            setSelectedIndex(-1);
            setSelectedData(row)
        } else {
            setSelectedIndex(index);
            setSelectedData(row)

        }
    };

    return (
        <div>{enrollees.items.length ?
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                <h1 className="text-xl font-bold tracking-wider pb-2">Enrolled Students</h1>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-100 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                        <tr>
                            <th className="px-4 py-2"></th>
                            {columns.map((column) => (
                                <th scope="col" className="px-6 py-3" key={column.header}>
                                    {column.header}
                                </th>
                            ))}
                            <th className="px-4 py-2">Assigments</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {enrollees.items.map((row, index) => (
                            <motion.tr
                                key={row.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className=" text-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500 dark:hover:bg-gray-600 transition ease-in-out"
                            >
                                <td className="px-4 py-2">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handleCheckboxChange(index, row)}
                                        checked={selectedIndex === index}
                                    />
                                </td>
                                {columns.map((column) => (
                                    <td className="px-6 py-4" key={`${row.id}-${column.accessor}`}>
                                        {" "}
                                        {row.user[column.accessor]}
                                    </td>
                                ))}
                                <td className="px-4 py-2 ">Assignments</td>
                                <td className="px-4 py-2 ">
                                    {selectedIndex === index &&
                                        <motion.div className="flex space-x-2"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}>
                                            <button
                                                className="bg-red-500 text-white px-3 py-1 rounded-sm text-xs"
                                                onClick={() => {
                                                    openModal()
                                                }}
                                            >
                                                Delete
                                            </button>
                                            {isOpen && <CourseDeleteModal isOpen={isOpen} closeModal={closeModal} deleteUserCourse={deleteUserCourse} userId={row.userID} />}
                                        </motion.div>
                                    }
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
                {/* <SlideOverPanel open={open} setOpen={setOpen} userData={selectedData} /> */}
            </div>
            : <p className="">No enrollees</p>}
        </div>
    );
};
export default EnrolledStudentTable;
