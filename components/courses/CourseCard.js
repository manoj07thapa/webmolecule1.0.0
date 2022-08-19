import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
export default function ProductCard({ courses }) {
  return (
    <Fragment>
      <div className="grid gridcols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {courses.map((course) => (
          <Link
            key={course.id}
            href={`/course/${course.category}/${course.framework}/${course.id}`}
          >
            <a className="border-2 border-white rounded-md shadow-md relative mb-20">
              <Image
                src={course.s3Images[0]}
                height={30}
                width={35}
                alt="course image"
                objectFit="cover"
                layout="responsive"
                objectPosition="center center"
                className="rounded-md shadow-md text-red-500"
                priority
              />
              <p className="">{course.title}</p>
              <p>{course.subtitle}</p>
              <p>{course.price}</p>
            </a>
          </Link>
        ))}
      </div>
    </Fragment>
  );
}
