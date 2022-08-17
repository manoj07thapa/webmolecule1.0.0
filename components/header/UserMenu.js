import { Menu, Transition } from "@headlessui/react";
import { UserIcon, BellIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import MyLink from "./MyLink";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UserMenu = () => {
  const router = useRouter();
  return (
    <div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button
          type="button"
          className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Profile dropdown */}
        <Menu as="div" className="ml-3 relative">
          <div>
            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open user menu</span>
              <UserIcon className="h-6 w-6" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-violet-100 ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <Menu.Item>
                {({ active }) => (
                  <MyLink href="/profile" active={active}>
                    Profile
                  </MyLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <MyLink href="/dashboard" active={active}>
                    Dashboard
                  </MyLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div>
                    <button
                      type="submit"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                      )}
                      onClick={() => {
                        Auth.signOut();
                      }}
                    >
                      Signout
                    </button>
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};
export default UserMenu;
