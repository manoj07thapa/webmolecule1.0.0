/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition, Disclosure } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SlideOverMenu() {
  const [open, setOpen] = useState(false);
  console.log("RenderSLIDEROVER MENU");
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="bg-gray-800 text-white px-5 py-3 rounded-md shadow flex items-center space-x-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
        </svg>
        <span>filters</span>
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          {" "}
                          WebMolecule{" "}
                        </Dialog.Title>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* Replace with your content */}
                        <div className="absolute inset-0 px-4 sm:px-6">
                          <aside className=" ">
                            <ul className="space-y-20 ">
                              <div className="w-full">
                                <div className="space-y-5">
                                  <Disclosure
                                    className="border-b border-gray-800 pb-4 border-none"
                                    as="div"
                                  >
                                    {({ open }) => (
                                      <>
                                        <Disclosure.Button className=" flex w-full justify-between  px-4 py-2 text-left text-md  tracking-wide  hover:bg-indigo-600 focus:outline-none rounded-md ">
                                          <span className="text-black">
                                            Analytics
                                          </span>
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
                                          className=" mt-2 pl-4 border-l md:border-gray-800 ml-4 space-y-4 text-sm text-gray-400"
                                        >
                                          <Disclosure.Panel className=" hover:text-gray-300 ">
                                            Courses
                                          </Disclosure.Panel>
                                          <Disclosure.Panel className="  hover:text-gray-300  ">
                                            Home Resource
                                          </Disclosure.Panel>
                                          <Disclosure.Panel className="   hover:text-gray-300  ">
                                            Users
                                          </Disclosure.Panel>
                                        </Transition>
                                      </>
                                    )}
                                  </Disclosure>
                                  <Disclosure
                                    className="border-b border-gray-800 pb-4 border-none"
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
                                          className="mt-2 pl-4 border-l border-gray-800 ml-4 space-y-4 text-sm text-gray-400"
                                        >
                                          <Disclosure.Panel
                                            className={`${
                                              router.pathname ===
                                              "/dashboard/course/create"
                                                ? "text-indigo-400 font-bold"
                                                : ""
                                            } hover:text-gray-300`}
                                          >
                                            <Link href="/dashboard/course/create">
                                              <a>Course</a>
                                            </Link>
                                          </Disclosure.Panel>
                                          <Disclosure.Panel className=" md:hover:text-gray-300  ">
                                            Home Resource
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
                        </div>
                        {/* /End replace */}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
