import { courses } from "../../data/header/navData";
import Link from "next/link";
import { useRouter } from "next/router";
import { DotsHorizontalIcon } from "@heroicons/react/solid";

const CourseSidebar = ({}) => {
  const { query } = useRouter();
  return (
    <aside className="hidden sm:block">
      <nav className="flex sm:flex-col items-center sm:items-start  sm:space-y-6  border-dotted border-gray-800   sm:border-l  ">
        {courses.map((course) => (
          <ul key={course.href}>
            <li>
              <Link href={`/courses/${course.href}`}>
                <a
                  className={`${
                    query.param === course.href
                      ? "sm:border-l-2 border-b-2 sm:border-b-0 border-pink-500 px-2.5 text-white"
                      : ""
                  } px-3 py-2 text-sm lg:text-base font-medium transition ease-in-out hover:bg-indigo-600 text-gray-400 hover:text-white hover:shadow hover:rounded-md`}
                >
                  {course.name}
                </a>
              </Link>
            </li>
          </ul>
        ))}
      </nav>
    </aside>
  );
};
export default CourseSidebar;
