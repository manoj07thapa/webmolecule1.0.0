import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

export default function ProductCard({ courses }) {
  return (
    <Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-violet-100 rounded-md overflow-hidden"
          >
            <Image
              src={course.s3Images[0]}
              height={40}
              width={100}
              alt="course image"
              objectFit="cover"
              layout="responsive"
              objectPosition="center center"
              className="shadow-md "
              priority
            />
            <div className=" py-4 px-2 space-y-1">
              <p className="text-lg font-semibold text-gray-700">
                {course.title}
              </p>
              <p className="text-sm text-gray-700">
                {course.tutor}
                <span className="pl-1 text-gray-500 text-xs">
                  ({course.tutorWho})
                </span>
              </p>
              <div className="flex items-center justify-between">
                <p className="flex space-x-1 pt-1">
                  <StarIcon className="h-4 w-4 text-red-500" />
                  <StarIcon className="h-4 w-4 text-red-500" />
                  <StarIcon className="h-4 w-4 text-red-500" />
                  <StarIcon className="h-4 w-4 text-red-500" />
                </p>
                <p className="text-sm text-gray-700">Rs: {course.price}</p>
              </div>
              <div className="pt-4 text-right">
                <Link
                  href={`/course/${course.category}/${course.framework}/${course.id}`}
                >
                  <a className="bg-pink-500 px-4 py-2 text-white text-medium font-medium rounded-md shadow-sm hover:bg-pink-600 hover:shadow-lg transition ease-in-out ">
                    View Detail
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
