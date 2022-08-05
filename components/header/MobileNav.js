import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { courses } from "./CoursePopoverMenu";
import { solutions } from "./SolnPopoverMenu";
import Link from "next/link";
import { XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const MobileNav = () => {
  const router = useRouter();
  return (
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
              <Popover.Button as={Link} href="/">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
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
                  <Popover.Button key={item.name} href={item.href} as={Link}>
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
                  <Popover.Button key={item.name} href={item.href} as={Link}>
                    <span className="text-base font-medium text-gray-900">
                      {item.name}
                    </span>
                  </Popover.Button>
                ))}
              </div>
            </div>
            <Popover.Button href="/contact" as={Link}>
              <p
                className={`${
                  router.pathname === "/contact" ? "text-violet-600" : ""
                } group inline-flex items-center  text-xl font-bold tracking-wide  text-gray-900 transition ease-in-out hover:text-violet-500 focus:text-violet-400`}
              >
                Contact
              </p>
            </Popover.Button>

            <div>
              <Popover.Button href="/auth/signUp" as={Link}>
                <p className="flex w-full items-center justify-center rounded-md border border-transparent bg-violet-600 px-4 py-2 text-base font-medium text-white shadow-sm transition ease-in-out hover:bg-violet-700">
                  Sign up
                </p>
              </Popover.Button>
              <div className="mt-6 flex justify-center  text-center text-sm font-medium text-gray-500">
                <p>Existing customer?</p>
                {""}
                <Popover.Button href="/auth/signIn" as={Link}>
                  <p className="text-pink-600 hover:text-pink-700">SignIn</p>
                </Popover.Button>
              </div>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};
export default MobileNav;
