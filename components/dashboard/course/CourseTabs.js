import { Tab } from '@headlessui/react'
import { motion } from "framer-motion";

import CourseDetail from './CourseDetail';
import EnrolledStudentTable from './EnrolledStudentTable';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CourseTabs({ course, enrollees }) {
    const tabList = ["Course Detail", "Enrollees"]

    return (
        <div className=" px-2 py-16 sm:px-0">
            <Tab.Group>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
                    <Tab.List className="flex space-x-1  bg-gray-900 p-1">
                        {tabList.map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-1/3 py-2.5 text-sm font-medium leading-5 text-blue-700',
                                        selected
                                            ? 'bg-gray-700 shadow'
                                            : 'text-blue-100  hover:text-white'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                </motion.div>
                <Tab.Panels className="mt-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <Tab.Panel>
                            <CourseDetail course={course} />
                        </Tab.Panel>
                        <Tab.Panel>
                            <EnrolledStudentTable enrollees={enrollees} />
                        </Tab.Panel>
                    </motion.div>

                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

