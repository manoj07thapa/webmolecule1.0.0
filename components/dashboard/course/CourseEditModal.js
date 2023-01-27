import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import CreateCourse from "./CreateCourse";
import EditCourse from "./multiStepCourseEdit/EditCourse";
import Home from "./multiStepCourseEdit/testStepper/Home";
import { TemplateIcon } from "@heroicons/react/solid";


export default function CourseEditModal({ isOpen, closeModal, id, course }) {
  console.log("courseEDITMODAL", id);
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-500"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-500"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-5xl  transform overflow-hidden rounded-md bg-slate-800 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6  "
                  >
                    <div className="flex  items-center justify-between bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-4 py-3 rounded-md shadow">
                      <h2 className="text-xl  font-bold tracking-wider ">Edit Course</h2>
                      <TemplateIcon className="h-6 w-6 text-pink-700" />
                    </div>
                  </Dialog.Title>
                  {/* <EditCourse /> */}
                  <Home />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
