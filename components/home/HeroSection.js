import Image from "next/image";
import ReactImage from "../../public/react-2.svg";
import TailwindImage from "../../public/tailwindcss.svg";
import NodeImage from "../../public/nodejs-1.svg";
const HeroSection = ({ heroResources }) => {
  return (
    <div className="pt-12 sm:pt-24">
      {heroResources.map((res) => (
        <div
          key={res.id}
          className=" sm:flex sm:items-center lg:items-start sm:justify-between sm:space-x-6 lg:space-x-24 "
        >
          <div className="">
            <p className="bg-gray-800 px-4 py-2  rounded-md shadow-md text-sm sm:leading-6 hidden sm:inline text-gray-200">
              {res.subtitle1}
            </p>
            <h1 className="text-4xl lg:text-7xl font-extrabold text-center sm:text-left sm:pt-4">
              <span className=" text-transparent  bg-clip-text bg-gradient-to-r from-green-600 via-purple-500  to-indigo-600">
                {res.title}
              </span>
              {""} <span>{res.subtitle}</span>
            </h1>
            <p className="text-lg font-medium text-gray-300 text-center sm:text-left pt-6">
              <span className=" ">{res.subtitle2}</span>
              {""} <span>{res.description}</span>
            </p>
            <button
              type="submit"
              className="bg-indigo-800 hover:bg-indigo-900 transition ease-in-out px-4 py-3 rounded-md shadow-md justify-center w-full sm:w-2/3 md:w-1/3 mt-6 text-medium font-semibold tracking-wide"
            >
              View courses
            </button>
          </div>
          <div className="sm:flex sm:flex-col items-center hidden relative">
            <div className="flex">
              <Image
                height={200}
                width={300}
                src={TailwindImage}
                alt="tailwindcss image"
                objectPosition="center center"
                className="shadow-md z-30 "
                priority
              />
              <Image
                height={200}
                width={300}
                src={NodeImage}
                alt="node image"
                objectPosition="center center"
                className="shadow-md z-30 "
                priority
              />
            </div>
            <Image
              height={200}
              width={300}
              src={ReactImage}
              alt="react image"
              objectPosition="center center"
              className="shadow-md z-30"
              priority
            />
            <div className="absolute z-0 bg-gradient-to-r from-indigo-900 to-green-900 top-0 left-0 w-[100%] h-[150%] blur-3xl rounded-full "></div>
            {/* <div className="absolute z-10 bg-gradient-to-r from-gray-900 to-gray-200 bottom-0  w-[300%] h-[100%] blur-3xl"></div> */}
            {/* <div className="absolute z-0 bg-gradient-to-r from-blue-800 to-blue-500 right-0  w-[300%] h-[100%] blur-3xl"></div> */}
          </div>
        </div>
      ))}
    </div>
  );
};
export default HeroSection;
