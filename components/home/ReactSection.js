import { Fragment } from "react";
import Image from "next/image";
import ReactImage from "../../public/react.png";
import Member from "../../public/member1.jpg";

const ReactSection = ({ sectionSecond }) => {
  return (
    <Fragment>
      {sectionSecond.map((item) => (
        <div
          className="flex flex-col lg:flex-row items-center justify-between "
          key={item.id}
        >
          <div className="bg-slate-800 px-4 py-7 rounded-md shadow-md w-full flex items-center relative z-100 ">
            <Image
              height={700}
              width={700}
              src={Member}
              alt="react code image"
              objectPosition="center center"
              className="shadow-md rounded-md "
              priority
              objectFit="cover"
            />

            <div className="pl-4">
              <h1 className="text-lg lg:text-xl text-gray-400 font-extrabold ">
                {item.title}
              </h1>
              <p className="text-lg text-indigo-600 font-bold tracking-wide pt-1">
                {item.subtitle}
              </p>
              <p className="text-sm text-gray-500">{item.subtitle1}</p>
            </div>
            <div className="absolute z-0 bg-gradient-to-r from-slate-600 to-slate-800 -bottom-48 -left-16 w-[100%] h-[50%] blur-3xl rounded-full -skew-y-12 "></div>

            {/* <p className="text-medium text-gray-300 pt-2">
          React is a industry standard and long way forward from any other
          existing frontend frameworks. Learning react not only enhances your
          frontend abilities but also you will have an edge over other developer
          and maximizes your chances of getting a job.
        </p> */}
          </div>
          <div className="w-full">
            <Image
              height={700}
              width={700}
              src={ReactImage}
              alt="react code image"
              objectPosition="center center"
              className="shadow-md rounded-md  "
              priority
              objectFit="cover"
            />{" "}
          </div>
        </div>
      ))}
    </Fragment>
  );
};
export default ReactSection;
