import { Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import SlideOverMenu from "./SlideOverMenu";

const SidebarLayout = ({ children }) => {
  const router = useRouter();
  return (
    <Fragment>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-7 md:mt-12 ">
        <div className="md:container md:relative flex flex-col md:flex-row md:space-x-32 ">
          <aside className=" md:sticky md:top-0 md:h-screen md:w-3/12 justify-center  pb-4 md:pb-0 md:overflow-auto hidden md:block ">
            <ul className="space-y-20 ">
              <div className="w-full">
                <div className="space-y-5">
                  <Disclosure
                    className="border-b border-gray-800 pb-4 md:border-none"
                    as="div"
                  >
                    {({ open }) => (
                      <>
                        <Disclosure.Button className=" flex w-full justify-between  px-4 py-2 text-left text-md  tracking-wide  hover:bg-indigo-600 focus:outline-none rounded-md ">
                          <span>Analytics</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
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
                          className=" mt-2 pl-2 md:pl-4 md:border-l md:border-gray-800 ml-4 space-y-4 text-sm md:text-gray-400"
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
                  <Disclosure
                    className="border-b border-gray-800 pb-4 md:border-none"
                    as="div"
                  >
                    {({ open }) => (
                      <>
                        <Disclosure.Button className=" flex w-full justify-between  px-4 py-2 text-left text-md  tracking-wide  hover:bg-indigo-600 focus:outline-none rounded-md ">
                          <span>Create</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
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
                          className="mt-2 pl-2 md:pl-4 md:border-l md:border-gray-800 ml-4 space-y-4 text-sm md:text-gray-400"
                        >
                          <Disclosure.Panel
                            className={`${
                              router.pathname === "/dashboard/course/create"
                                ? "md:text-indigo-400 font-bold"
                                : ""
                            } md:hover:text-gray-300`}
                          >
                            <Link href="/dashboard/course/create">
                              <a>Course</a>
                            </Link>
                          </Disclosure.Panel>
                          <Disclosure.Panel
                            className={`${
                              router.pathname === "/dashboard/resource/create"
                                ? "md:text-indigo-400 font-bold"
                                : ""
                            } md:hover:text-gray-300`}
                          >
                            <Link href="/dashboard/resource/create">
                              <a>Resource</a>
                            </Link>
                          </Disclosure.Panel>
                          <Disclosure.Panel className=" md:hover:text-gray-300  ">
                            Solution
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure
                    as="div"
                    className=" border-b border-gray-800 pb-4 md:border-none"
                  >
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between text-md  tracking-wide   px-4 py-2 text-left  hover:bg-indigo-600 focus:outline-none rounded-md transition ease-in-out duration-150">
                          <span>Courses</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
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
                          className="mt-2 pl-2 md:pl-4 md:border-l md:border-gray-800 ml-4 space-y-4 text-sm md:text-gray-400 "
                        >
                          <Disclosure.Panel className=" md:hover:text-gray-300 ">
                            View courses
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure
                    as="div"
                    className="border-b border-gray-800 pb-4 md:border-none"
                  >
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between text-md  tracking-wide   px-4 py-2 text-left  hover:bg-indigo-600 focus:outline-none rounded-md transition ease-in-out duration-150">
                          <span>Users</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
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
                          className="mt-2 pl-2 md:pl-4 md:border-l md:border-gray-800 ml-4 space-y-4 text-sm md:text-gray-400"
                        >
                          <Disclosure.Panel className=" md:hover:text-gray-300 ">
                            View users
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </ul>
          </aside>
          <div className="md:hidden sticky top-0">
            <SlideOverMenu />
          </div>
          <main className="h-full md:w-9/12 mt-12 md:mt-0">{children}</main>
        </div>
      </div>
    </Fragment>
  );
};
export default SidebarLayout;
