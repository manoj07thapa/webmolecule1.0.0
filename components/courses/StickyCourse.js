import { Fragment } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const StickyCourse = ({ course, image }) => {
  const router = useRouter();
  return (
    <Fragment>
      <aside className=" sticky top-0 xl:right-36 lg:right-6 md:h-2/3 border border-gray-800   w-1/3 hidden md:block col-span-3 shadow-xl">
        {image && (
          <Image
            src={image}
            height={234}
            width={300}
            alt="course image"
            objectFit="cover"
            layout="responsive"
            objectPosition="center center"
            className="shadow-md "
            priority
          />
        )}
        <div className="space-y-3 pb-5">
          <section className="lg:bg-gray-800 xl:bg-none px-4 py-2">
            <h3 className="text-medium tracking-wide">Required Knowledge</h3>
            <p className="text-sm text-gray-400">- {course.reqKnowledge}</p>
          </section>
          {/** course time section */}
          <section className="px-4 border-b border-gray-800 py-2">
            <h3 className="text-medium  tracking-wide">Duration </h3>
            <p className="text-sm text-gray-400">{course.duration}</p>
          </section>
          {/** course time section */}
          <section className="px-4 border-b border-gray-800 py-2">
            <h3 className="text-medium  tracking-wide">Time </h3>
            <p className="text-sm text-gray-400">{course.time}</p>
          </section>
          {/** course cost  section */}
          <section className="px-4 border-b border-gray-800 py-2">
            <h3 className="text-medium  tracking-wide">Total cost </h3>
            <p className="text-sm text-gray-400">Rs, {course.price}</p>
          </section>
          {/** course signup section */}
          <section className="px-4 py-2">
            <button
              type="submit"
              className="bg-pink-500 w-full rounded-md shadow-md px-4 py-2 hover:bg-pink-600 transition ease-in-out"
            >
              SignUp
            </button>
          </section>
        </div>
      </aside>
    </Fragment>
  );
};
export default StickyCourse;
