import Link from "next/link";
import SolnPopoverMenu from "./SolnPopoverMenu";
import CoursePopoverMenu from "./CoursePopoverMenu";
import { Popover } from "@headlessui/react";
import MobileNav from "./MobileNav";
import { MenuIcon } from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <Popover className="bg-slate-900 relative">
      <div className="px-6 py-6 max-w-7xl mx-auto md:flex items-center justify-between text-white hidden">
        <div>
          <Link href="/">
            <a className="text-lg font-bold tracking-wide">
              <span className="text-2xl text-violet-500 font-extrabold leading-6">
                W
              </span>
              eb
              <span className="text-2xl text-violet-500 font-extrabold leading-6">
                M
              </span>
              olecule
            </a>
          </Link>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-100 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>

        <nav className="space-x-12 flex items-center justify-between">
          <div className="space-x-12 flex items-center">
            <SolnPopoverMenu />
            <CoursePopoverMenu />
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
          <div className="space-x-6">
            <Link href="/auth/signIn">
              <a>SignIn</a>
            </Link>
            <Link href="/auth/signUp">
              <a>SignUp</a>
            </Link>
          </div>
        </nav>
      </div>
      <MobileNav />
    </Popover>
  );
}
