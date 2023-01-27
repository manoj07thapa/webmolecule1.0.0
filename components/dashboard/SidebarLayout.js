import { Fragment, useContext, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon, ColorSwatchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import SlideOverMenu from "./SlideOverMenu";
import { UserContext } from "../../hooks/user/UserContext";

const SidebarLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  // console.log("USER", user);
  const group = user?.signInUserSession?.accessToken?.payload["cognito:groups"];

  return (
    <Fragment>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-7 md:mt-12">
        <div className="md:container md:relative flex flex-col lg:flex-row md:space-x-32 ">
          <aside className=" md:sticky md:top-0 md:h-screen md:w-3/12 justify-center  md:overflow-auto  pb-4 md:pb-0 hidden lg:block ">
            <ul className="space-y-20 ">
              <div className="w-full  ">
                <Link href="/dashboard">
                  <a className="flex space-x-6  border-b pb-2 border-gray-800 bg-indigo-500 hover:bg-indigo-600 transition ease-in-out px-2 py-2 rounded-md shadow-md">
                    <ColorSwatchIcon className="h-6 w-6 text-pink-600 " />
                    <p className="text-md  tracking-wide ">Dashboard</p>
                  </a>
                </Link>

                <div className="space-y-5 mt-12">
                  {user && !group && (
                    <Disclosure
                      className="border-b border-gray-800 pb-4 md:border-none"
                      as="div"
                    >
                      {({ open }) => (
                        <>
                          <Disclosure.Button className=" flex w-full justify-between   py-2 text-left text-md  tracking-wide   focus:outline-none rounded-md ">
                            <span>Profile</span>
                            <ChevronUpIcon
                              className={`${open ? "rotate-180 transform" : ""
                                } h-5 w-5 `}
                            />
                          </Disclosure.Button>
                          <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                            className=" mt-2 pl-2 md:pl-4 md:border-l md:border-gray-800  space-y-4 text-sm md:text-gray-400"
                          >
                            <Disclosure.Panel className="  md:hover:text-gray-300 ">
                              Your Information
                            </Disclosure.Panel>
                            <Disclosure.Panel className="  md:hover:text-gray-300  ">
                              <Link href={`/dashboard/profile/enrolledCourses`}>
                                <a>Enrolled Course</a>
                              </Link>
                            </Disclosure.Panel>
                            <Disclosure.Panel className="   md:hover:text-gray-300  ">
                              Assignments
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  )}
                  {group && group.includes("admin") && (
                    <Disclosure
                      className="border-b border-gray-800 pb-4 md:border-none"
                      as="div"
                    >
                      {({ open }) => (
                        <>
                          <Disclosure.Button className=" flex w-full justify-between   py-2 text-left text-md  tracking-wide   focus:outline-none rounded-md ">
                            <span>Analytics</span>
                            <ChevronUpIcon
                              className={`${open ? "rotate-180 transform" : ""
                                } h-5 w-5 `}
                            />
                          </Disclosure.Button>
                          <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                            className=" mt-2 pl-2 md:pl-4 md:border-l md:border-gray-800  space-y-4 text-sm md:text-gray-400"
                          >
                            <Disclosure.Panel className="  md:hover:text-gray-300 ">
                              Courses
                            </Disclosure.Panel>
                            <Disclosure.Panel className="  md:hover:text-gray-300  ">
                              Home Resource
                            </Disclosure.Panel>
                            <Disclosure.Panel className="   md:hover:text-gray-300  ">
                              Users
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  )}

                  {group &&
                    (group.includes("admin") || group.includes("teacher")) && (
                      <Disclosure
                        className="border-b border-gray-800 pb-4 md:border-none"
                        as="div"
                      >
                        {({ open }) => (
                          <>
                            <Disclosure.Button className=" flex w-full justify-between   py-2 text-left text-md  tracking-wide   focus:outline-none rounded-md ">
                              <span>Create</span>
                              <ChevronUpIcon
                                className={`${open ? "rotate-180 transform" : ""
                                  } h-5 w-5 `}
                              />
                            </Disclosure.Button>
                            <Transition
                              enter="transition duration-100 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-75 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                              className="mt-2 pl-2 md:pl-4 md:border-l md:border-gray-800  space-y-4 text-sm md:text-gray-400"
                            >
                              <Disclosure.Panel
                                className={`${router.pathname === "/dashboard/course/create"
                                  ? "md:text-indigo-400 font-bold"
                                  : ""
                                  } md:hover:text-gray-300`}
                              >
                                <Link href="/dashboard/course/create">
                                  <a>Course</a>
                                </Link>
                              </Disclosure.Panel>

                              {group && group.includes("admin") && (
                                <Disclosure.Panel
                                  className={`${router.pathname ===
                                    "/dashboard/resource/create"
                                    ? "md:text-indigo-400 font-bold"
                                    : ""
                                    } md:hover:text-gray-300`}
                                >
                                  <Link href="/dashboard/resource/create">
                                    <a>Resource</a>
                                  </Link>
                                </Disclosure.Panel>
                              )}
                              {group && group.includes("admin") && (
                                <Disclosure.Panel
                                  className={`${router.pathname ===
                                    "/dashboard/solution/create"
                                    ? "md:text-indigo-400 font-bold"
                                    : ""
                                    } md:hover:text-gray-300`}
                                >
                                  <Link href="/dashboard/resource/create">
                                    <a>Solution</a>
                                  </Link>
                                </Disclosure.Panel>
                              )}
                            </Transition>
                          </>
                        )}
                      </Disclosure>
                    )}

                  {group && group.includes("admin") && (
                    <Disclosure
                      as="div"
                      className=" border-b border-gray-800 pb-4 md:border-none"
                    >
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full justify-between text-md  tracking-wide  py-2 text-left    rounded-md transition ease-in-out duration-150">
                            <span>Courses</span>
                            <ChevronUpIcon
                              className={`${open ? "rotate-180 transform" : ""
                                } h-5 w-5 `}
                            />
                          </Disclosure.Button>
                          <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                            className="mt-2 pl-2 md:pl-4 md:border-l md:border-gray-800 space-y-4 text-sm md:text-gray-400 "
                          >
                            <Disclosure.Panel
                              className={`${router.pathname === "/dashboard/viewCourses"
                                ? "md:text-indigo-400 font-bold"
                                : ""
                                } md:hover:text-gray-300`}
                            >
                              <Link href="/dashboard/viewCourses">
                                <a>View courses</a>
                              </Link>
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  )}
                  {group && group.includes("teacher") && (
                    <Disclosure
                      as="div"
                      className=" border-b border-gray-800 pb-4 md:border-none"
                    >
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full justify-between text-md  tracking-wide  py-2 text-left    rounded-md transition ease-in-out duration-150">
                            <span>Courses</span>
                            <ChevronUpIcon
                              className={`${open ? "rotate-180 transform" : ""
                                } h-5 w-5 `}
                            />
                          </Disclosure.Button>
                          <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                            className="mt-2 pl-2 md:pl-4 md:border-l md:border-gray-800 space-y-4 text-sm md:text-gray-400 "
                          >
                            <Disclosure.Panel
                              className={`${router.pathname === "/dashboard/viewCourses"
                                ? "md:text-indigo-400 font-bold"
                                : ""
                                } md:hover:text-gray-300`}
                            >
                              <Link
                                href={`/dashboard/${user.username}/courses`}
                              >
                                <a>View courses</a>
                              </Link>
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  )}
                  {group && group.includes("admin") && (
                    <Disclosure
                      as="div"
                      className="border-b border-gray-800 pb-24 md:border-none"
                    >
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full justify-between text-md  tracking-wide   py-2 text-left   rounded-md transition ease-in-out duration-150">
                            <span>Users</span>
                            <ChevronUpIcon
                              className={`${open ? "rotate-180 transform" : ""
                                } h-5 w-5 `}
                            />
                          </Disclosure.Button>
                          <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                            className="mt-2 pl-2 md:pl-4 md:border-l md:border-gray-800  space-y-4 text-sm md:text-gray-400"
                          >
                            <Disclosure.Panel
                              className={`${router.pathname === "/dashboard/viewUsers"
                                ? "md:text-indigo-400 font-bold"
                                : ""
                                } md:hover:text-gray-300`}
                            >
                              <Link href="/dashboard/viewUsers">
                                <a>View Users</a>
                              </Link>
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  )}
                </div>
              </div>
            </ul>
          </aside>
          <div className="lg:hidden sticky top-0">
            <SlideOverMenu open={open} setOpen={setOpen} />

          </div>
          <main className="h-full md:w-9/12 mt-12 md:mt-0">{children}</main>
        </div>
      </div>
    </Fragment>
  );
};
export default SidebarLayout;
