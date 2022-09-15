import { useState, useEffect } from "react";
import { API, Storage } from "aws-amplify";
import { listCourses } from "../../../src/graphql/queries";
import { deleteCourse, updateCourse } from "../../../src/graphql/mutations";
import CourseEditModal from "./CourseEditModal";
import CourseDeleteModal from "./CourseDeleteModal";
import RingSpinner from "../../loading/RingSpinner";

const CourseTable = () => {
  const [courses, setCourses] = useState([]);
  console.log("DATA", courses);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  let [isOpenDel, setIsOpenDel] = useState(false);

  function closeDelModal() {
    setIsOpenDel(false);
  }

  function openDelModal() {
    setIsOpenDel(true);
  }

  const fetchCourses = async () => {
    try {
      const res = await API.graphql({
        query: listCourses,
        // authMode: "AWS_IAM",
      });
      setCourses(res.data.listCourses.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const removeCourse = async (id) => {
    try {
      await API.graphql({
        query: deleteCourse,
        variables: { input: { id } },
      });
      fetchCourses();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="overflow-x-auto relative shadow-md rounded-md">
      {courses.length === 0 ? (
        <div className="grid place-content-center">
          <RingSpinner />
        </div>
      ) : (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="tracking-wider">
              <th scope="col" className="py-3 px-6">
                Course title
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Framework
              </th>
              <th scope="col" className="py-3 px-6">
                Tutor
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Duration
              </th>
              <th scope="col" className="py-3 px-6">
                Time
              </th>
              <th scope="col" className="py-3 px-6">
                <span className="">Actions</span>
              </th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course) => (
              <tr
                key={course.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {course.title}
                </th>
                <td className="py-4 px-6">{course.category}</td>
                <td className="py-4 px-6">{course.framework}</td>
                <td className="py-4 px-6">{course.tutor}</td>
                <td className="py-4 px-6">{course.price}</td>
                <td className="py-4 px-6">{course.duration}</td>
                <td className="py-4 px-6">{course.time}</td>
                <td className="py-4 px-6 text-right space-x-4 flex">
                  <div>
                    <button
                      className="font-medium text-green-600 dark:text-green-500 hover:underline"
                      onClick={openModal}
                    >
                      Edit
                    </button>
                    <CourseEditModal
                      isOpen={isOpen}
                      closeModal={closeModal}
                      id={course.id}
                    />
                  </div>
                  <div>
                    <button
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      onClick={() => removeCourse(course.id)}
                    >
                      Delete
                    </button>{" "}
                    {/* <CourseDeleteModal
                    isOpen={isOpenDel}
                    closeModal={closeDelModal}
                    removeCourse={removeCourse}
                    courseId={course.id}
                  /> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default CourseTable;
