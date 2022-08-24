import { PlusCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import AwsImage from "../../public/aws-2.svg";
import NodeImage from "../../public/nodejs-1.svg";
import FirebaseImage from "../../public/firebase-1.svg";
import VuePng from "../../public/App.vue.png";
import RemixPng from "../../public/remix.js.png";
import NextPng from "../../public/Blog.jd.png";

const FrontEndSection = ({ beckendResources }) => {
  return (
    <div className="border-b border-gray-800 py-12">
      {beckendResources.map((item) => (
        <div key={item.id} className="space-y-4">
          <PlusCircleIcon className="h-16 w-16 text-indigo-700 text-left" />
          <h1 className="text-2xl sm:text-4xl  font-extrabold pl-2">
            {item.title}
          </h1>
          <p className="text-medium font-medium text-gray-300  sm:text-left pt-3 pl-2">
            {item.subtitle}
          </p>
          <div className="mt-7 ml-2 flex space-x-5 relative">
            <div>
              <Image
                height={50}
                width={50}
                src={AwsImage}
                alt="team member 1"
                objectPosition="center center"
                className="shadow-md rounded-full pr-12"
                priority
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                height={50}
                width={50}
                src={NodeImage}
                alt="team member 2"
                objectPosition="center center"
                className="shadow-md rounded-full "
                priority
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                height={50}
                width={50}
                src={FirebaseImage}
                alt="team member3"
                objectPosition="center center"
                className="shadow-md rounded-full  "
                priority
                objectFit="cover"
              />
            </div>
            <div className="absolute z-0 bg-gradient-to-r from-pink-800 to-pink-900 -bottom-48 -left-16 w-[100%] h-[50%] blur-3xl rounded-full -skew-y-12 "></div>
          </div>
        </div>
      ))}
      <div className="grid grid-cols-3 gap-0 mt-24 text-center justify-center">
        <div>
          <Image
            height={700}
            width={700}
            src={VuePng}
            alt="react code image"
            objectPosition="center center"
            className="shadow-md rounded-md  "
            priority
            objectFit="cover"
          />
        </div>
        <div className="-ml-24">
          <Image
            height={700}
            width={700}
            src={RemixPng}
            alt="react code image"
            objectPosition="center center"
            className="shadow-md rounded-md  "
            priority
            objectFit="cover"
          />
        </div>
        <div className="-ml-24">
          <Image
            height={700}
            width={700}
            src={NextPng}
            alt="react code image"
            objectPosition="center center"
            className="shadow-md rounded-md  "
            priority
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};
export default FrontEndSection;
