/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const courses = [
  {
    name: "All courses",
    description:
      "Get all of your questions answered in our forums or contact support.",
    icon: ViewGridIcon,
    key: "all",
  },
  {
    name: "Frontend",
    description:
      "Get all of your questions answered in our forums or contact support.",
    icon: SupportIcon,
    key: "frontend",
  },
  {
    name: "Backend",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    icon: BookmarkAltIcon,
    key: "backend",
  },
  {
    name: "Web Design",
    description:
      "See what meet-ups and other events we might be planning near you.",
    icon: CalendarIcon,
    key: "webDesign",
  },
  {
    name: "Full Stack ",
    description: "Understand how we take your privacy seriously.",
    icon: ShieldCheckIcon,
    key: "fullstack",
  },
  {
    name: "Database ",
    description: "Understand how we take your privacy seriously.",
    icon: ShieldCheckIcon,
    key: "database",
  },
  {
    name: "AWS Amplify",
    description: "Understand how we take your privacy seriously.",
    icon: ShieldCheckIcon,
    key: "awsAmplify",
  },
];

export const solutions = [
  {
    name: "View all solutions",
    description:
      "Get a better understanding of where your traffic is coming from.",
    icon: ViewGridIcon,
    key: "all",
  },
  {
    name: "Portfolio",
    description:
      "Get a better understanding of where your traffic is coming from.",
    icon: ChartBarIcon,
    key: "portfolio",
  },
  {
    name: "E-commerce Store",
    description: "Speak directly to your customers in a more meaningful way.",
    icon: CursorClickIcon,
    key: "ecommerce",
  },
  {
    name: "Student management system",
    description: "Your customers' data will be safe and secure.",
    icon: ShieldCheckIcon,
    key: "sms",
  },
  {
    name: "Account management system",
    description: "Connect with third-party tools that you're already using.",
    icon: ViewGridIcon,
    key: "ams",
  },
  {
    name: "Human resources management system",
    description:
      "Build strategic funnels that will drive your customers to convert",
    icon: RefreshIcon,
    key: "hrms",
  },
];

export default function Navbar() {
  const MyLink = React.forwardRef((props, ref) => {
    let { href, children, ...rest } = props;
    return (
      <Link href={href}>
        <a
          ref={ref}
          {...rest}
          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-100"
        >
          {children}
        </a>
      </Link>
    );
  });
  const router = useRouter();
  return (
    <Popover className="relative bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="text-white">Web Molecule</a>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden md:flex md:space-x-20">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-white" : "text-gray-200",
                      "group inline-flex items-center rounded-md text-sm font-semibold   tracking-wide transition ease-in-out hover:text-violet-500  "
                    )}
                  >
                    <span
                      className={`${
                        router.pathname === "/solutions"
                          ? "text-violet-700 "
                          : ""
                      }`}
                    >
                      Solutions
                    </span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <Popover.Button
                              key={item.key}
                              href={`/solutions/${item.key}`}
                              as={MyLink}
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-pink-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </Popover.Button>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-white" : "text-gray-200",
                      "group inline-flex items-center rounded-md text-sm font-semibold   tracking-wide transition ease-in-out hover:text-violet-500 "
                    )}
                  >
                    <span
                      className={`${
                        router.pathname === "/courses" ? "text-violet-700 " : ""
                      }`}
                    >
                      Courses
                    </span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {courses.map((item) => (
                            <Popover.Button
                              as={MyLink}
                              key={item.key}
                              href={`/courses/${item.key}`}
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-pink-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </Popover.Button>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Link href="/contact">
              <a
                className={`${
                  router.pathname === "/contact" ? "text-violet-700" : ""
                } group inline-flex items-center rounded-md text-sm font-semibold tracking-wide   text-white transition ease-in-out hover:text-violet-500 `}
              >
                Contact
              </a>
            </Link>
          </Popover.Group>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link href="/auth/signIn">
              <a
                className={`${
                  router.pathname === "/auth/signIn" ? "text-violet-700" : ""
                } group inline-flex items-center rounded-md text-sm font-semibold tracking-wide   text-white transition ease-in-out hover:text-violet-500 `}
              >
                Sign in
              </a>
            </Link>
            <Link href="/auth/signUp">
              <a
                className={`${
                  router.pathname === "/auth/signUp"
                    ? "bg-pink-600 text-white"
                    : ""
                } ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-violet-600 px-4 py-2 text-sm font-semibold tracking-wide text-white  shadow-sm transition ease-in-out hover:bg-white hover:text-violet-700 `}
              >
                Sign up
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <Popover.Button as={MyLink} href="/">
                  <span className="text-white">Webmolecule</span>
                </Popover.Button>

                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <h4
                  className={`${
                    router.pathname === "/solutions" ? "text-violet-600" : ""
                  } mb-4 text-xl font-bold tracking-wide text-gray-900`}
                >
                  Solutions
                </h4>
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <Popover.Button
                      key={item.key}
                      href={`/solutions/${item.key}`}
                      as={MyLink}
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-pink-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </Popover.Button>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="">
                <h4
                  className={`${
                    router.pathname === "/courses" ? "text-violet-600" : ""
                  } mb-4 text-xl font-bold tracking-wide text-gray-900`}
                >
                  Courses
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {courses.map((item) => (
                    <Popover.Button
                      key={item.key}
                      href={`/courses/${item.key}`}
                      as={MyLink}
                    >
                      <span className="text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </Popover.Button>
                  ))}
                </div>
              </div>
              <Popover.Button href="/contact" as={MyLink}>
                <p
                  className={`${
                    router.pathname === "/contact" ? "text-violet-600" : ""
                  } group inline-flex items-center  text-xl font-bold tracking-wide  text-gray-900 transition ease-in-out hover:text-violet-500 focus:text-violet-400`}
                >
                  Contact
                </p>
              </Popover.Button>

              <div>
                <Popover.Button href="/auth/signUp" as={MyLink}>
                  <p className="flex w-full items-center justify-center rounded-md border border-transparent bg-violet-600 px-4 py-2 text-base font-medium text-white shadow-sm transition ease-in-out hover:bg-violet-700">
                    Sign up
                  </p>
                </Popover.Button>
                <div className="mt-6 flex justify-center  text-center text-sm font-medium text-gray-500">
                  <p>Existing customer?</p>
                  {""}
                  <Popover.Button href="/auth/signIn" as={MyLink}>
                    <p className="text-pink-600 hover:text-pink-700">SignIn</p>
                  </Popover.Button>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
