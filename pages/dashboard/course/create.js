import { Fragment } from "react";
import Head from "next/head";
import { TemplateIcon } from "@heroicons/react/solid";
import SidebarLayout from "../../../components/dashboard/SidebarLayout";
import CreateCourse from "../../../components/dashboard/course/CreateCourse";

const Create = () => {
  return (
    <Fragment>
      <Head>
        <title>Create Course</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="flex  items-center justify-between bg-violet-600 px-4 py-3 rounded-md shadow">
          <h2 className="text-xl lg:text-3xl font-bold tracking-wider ">
            Create Course
          </h2>
          <TemplateIcon className="h-6 w-6 text-pink-700" />
        </div>
        <div className="">
          <CreateCourse />
        </div>
      </div>
    </Fragment>
  );
};

Create.PageLayout = SidebarLayout;
export default Create;