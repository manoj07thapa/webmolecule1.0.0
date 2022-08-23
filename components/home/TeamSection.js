import { BookOpenIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Member1 from "../../public/member1.jpg";
import Member2 from "../../public/member2.jpg";
import Member3 from "../../public/member3.jpg";

const TeamSection = ({ teamResources }) => {
  return (
    <div>
      {teamResources.map((item) => (
        <div key={item.id}>
          <BookOpenIcon className="h-24 w-24 text-pink-600 text-left" />
          <h1 className="text-2xl sm:text-4xl  font-extrabold pl-2">
            {item.title}
          </h1>
          <p className="text-medium font-medium text-gray-400  sm:text-left pt-1 pl-2">
            {item.subtitle}
          </p>
          <div className="mt-2 ml-2 flex ">
            <Image
              height={50}
              width={50}
              src={Member1}
              alt="team member 1"
              objectPosition="center center"
              className="shadow-md rounded-full "
              priority
              objectFit="cover"
            />
            <Image
              height={50}
              width={50}
              src={Member2}
              alt="team member 2"
              objectPosition="center center"
              className="shadow-md rounded-full "
              priority
              objectFit="cover"
            />
            <Image
              height={50}
              width={50}
              src={Member3}
              alt="team member3"
              objectPosition="center center"
              className="shadow-md rounded-full  "
              priority
              objectFit="cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default TeamSection;
