import { BookOpenIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Member1 from "../../public/member1.jpg";
import Member2 from "../../public/member2.jpg";
import Member3 from "../../public/member3.jpg";

const TeamSection = ({ teamResources }) => {
  return (
    <div className=" py-12">
      {teamResources.map((item) => (
        <div key={item.id}>
          <div className="text-left sm:text-center sm:px-40 py-12">
            <h1 className="text-2xl sm:text-4xl  font-extrabold pl-2">
              {item.title}
            </h1>
            <p className="text-lg font-medium text-gray-300   pt-2 pl-2 sm:text-center leading-7 mt-2">
              {item.subtitle}
            </p>
            <div className="mt-12 ml-2  space-x-5 grid place-content-center grid-cols-3">
              <div className="">
                <Image
                  height={100}
                  width={100}
                  src={Member1}
                  alt="team member 1"
                  objectPosition="center center"
                  className="shadow-md rounded-full "
                  priority
                  objectFit="cover"
                />
                <p className="flex flex-col">
                  <span className="text-sm font-semibold leading-5 text-indigo-700">
                    Racheal green
                  </span>
                  <span className="text-gray-300">Sr.Frontend Developer</span>
                </p>
              </div>
              <div>
                <Image
                  height={100}
                  width={100}
                  src={Member2}
                  alt="team member 2"
                  objectPosition="center center"
                  className="shadow-md rounded-full "
                  priority
                  objectFit="cover"
                />
                <p className="flex flex-col">
                  <span className="text-sm font-semibold leading-5 text-indigo-700">
                    Joey Tribiyani
                  </span>
                  <span className="text-gray-300">Sr.Cloud Engineer</span>
                </p>
              </div>
              <div>
                <Image
                  height={100}
                  width={100}
                  src={Member3}
                  alt="team member3"
                  objectPosition="center center"
                  className="shadow-md rounded-full  "
                  priority
                  objectFit="cover"
                />
                <p className="flex flex-col">
                  <span className="text-sm font-semibold leading-5 text-indigo-700">
                    Mark Anthony
                  </span>
                  <span className="text-gray-300">Sr.Backend Developer</span>
                </p>
              </div>
            </div>{" "}
          </div>
        </div>
      ))}
    </div>
  );
};
export default TeamSection;
