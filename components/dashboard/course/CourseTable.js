import Link from "next/link";
import { useState } from "react";
// import CourseDeleteModal from "./CourseDeleteModal";
const columns = [
  { header: "Title", accessor: "title" },
  { header: "Category", accessor: "category" },
  { header: "Framework", accessor: "framework" },
  { header: "Price", accessor: "price" },
  { header: "Duration", accessor: "duration" },
];
const CourseTable = ({ courses, removeCourse, username }) => {
  //   console.log("CoursesTeacher", courses);
  // let [isOpen, setIsOpen] = useState(false);

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // function openModal() {
  //   setIsOpen(true);
  // }
  // const [selectedRows, setSelectedRows] = useState([]);

  // const handleCheckboxChange = (e, row) => {
  //   if (e.target.checked) {
  //     setSelectedRows([...selectedRows, row]);
  //   } else {
  //     setSelectedRows(
  //       selectedRows.filter((selectedRow) => selectedRow !== row)
  //     );
  //   }
  // };

  // const isRowSelected = (row) => selectedRows.indexOf(row) > -1;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-100 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
          <tr>
            {/* <th className="px-4 py-2"></th> */}
            {columns.map((column) => (
              <th scope="col" className="px-6 py-3" key={column.header}>
                {column.header}
              </th>
            ))}
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {courses.map((row) => (
            <tr
              className=" text-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500 dark:hover:bg-gray-600"
              key={row.id}
            >
              {/* <td className="px-4 py-2">
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckboxChange(e, row)}
                />
              </td> */}
              {columns.map((column) => (
                <td className="px-6 py-4" key={`${row.id}-${column.accessor}`}>
                  {" "}
                  {row[column.accessor]}
                </td>
              ))}
              <td className="px-6 py-4 text-green-300 ">
                <Link href={`/dashboard/${username}/courses/${row.id}`}>
                  <a>view detail</a>
                </Link>
              </td>
              {/* <td className={`px-4 py-2 ${isRowSelected(row) ? "" : "hidden"}`}>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded-sm mr-2"
                  onClick={() => openModal()}
                >
                  Edit
                </button>
                {isOpen && (
                  <CourseDeleteModal
                    isOpen={isOpen}
                    closeModal={closeModal}
                    removeCourse={removeCourse}
                    courseId={row.id}
                  />
                )}
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-sm"
                  onClick={() => onDelete(row)}
                >
                  Delete
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CourseTable;
