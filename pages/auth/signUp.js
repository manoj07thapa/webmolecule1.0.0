import { useEffect, Fragment } from "react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import Head from "next/head";
import SignUpForm from "../../components/auth/SignUpForm";

function SignUp() {
  const router = useRouter();

  useEffect(() => {
    async function onAppLoad() {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user);
      if (user) {
        router.push("/");
      }
    }
    onAppLoad();
  }, []);
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
