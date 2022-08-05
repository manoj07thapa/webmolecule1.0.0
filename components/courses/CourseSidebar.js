import { courses } from "../../navData";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = ({}) => {
  const { query } = useRouter();
  return (
    <aside>
      <nav className=" flex flex-col  space-y-6  border-dotted border-gray-800  text-gray-300 lg:border-l">
        {courses.map((course) => (
          <Link key={course.key} href={`/courses/${course.key}`}>
            <a
              className={`${
                query.name === course.key
                  ? "border-l-2 border-pink-500 px-2.5 text-gray-100"
                  : ""
              }  px-3 py-2 text-base transition ease-in-out hover:bg-gray-800 hover:text-gray-200 hover:shadow`}
            >
              {course.name}
            </a>
          </Link>
        ))}
      </nav>
    </aside>
  );
};
export default Sidebar;
