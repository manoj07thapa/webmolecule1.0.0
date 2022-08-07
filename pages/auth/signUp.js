import { Fragment } from "react";
import Head from "next/head";
import SignUpForm from "../../components/auth/SignUpForm";

function SignUp() {
  return (
    <Fragment>
      <Head>
        <title>SignUp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen w-full bg-[url('/architect.svg')]  ">
        <SignUpForm />
      </div>
    </Fragment>
  );
}

export default SignUp;
