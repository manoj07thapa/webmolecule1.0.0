import { Fragment } from "react";
import Head from "next/head";
import { withSSRContext } from "aws-amplify";
import SidebarLayout from "../../components/dashboard/SidebarLayout";
import UserTable from "../../components/user/UserTable";

const ViewUsers = () => {
  return (
    <Fragment>
      <Head>
        <title>Dashboard | Users</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
        <h1 className="text-center tracking-wider leading-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-xl font-bold rounded-md shadow-md px-4 py-3">
          User List
        </h1>
        <div className="mt-12">
          <UserTable />
        </div>
      </div>
    </Fragment>
  );
};
ViewUsers.PageLayout = SidebarLayout;

export default ViewUsers;

export async function getServerSideProps({ req }) {
  const SSR = withSSRContext({ req });

  try {
    const user = await SSR.Auth.currentAuthenticatedUser();
    const group =
      user?.signInUserSession?.accessToken?.payload["cognito:groups"];

    if (user && !group.includes("admin")) {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    if ((error = "The user is not authenticated")) {
      return {
        notFound: true,
      };
    }
  }

  return {
    props: {},
  };
}