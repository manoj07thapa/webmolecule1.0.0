import { useEffect, Fragment } from "react";
import { Formik, Field, Form } from "formik";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import Head from "next/head";
import { forgotPasswordSchema } from "../../validation/auth/forgotPasswordSchema";

function ForgotPassword() {
  const router = useRouter();

  useEffect(() => {
    async function onAppLoad() {
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
        router.push("/");
      }
    }
    onAppLoad();
  }, []);

  const initialValues = {
    username: "",
  };

  const onSubmit = async (values, actions) => {
    const { username } = values;

    try {
      await Auth.forgotPassword(username);

      router.push("/auth/forgotPasswordSubmit");
    } catch (error) {
      if (error) {
        actions.setErrors(error.message); //toDO: backend validation
      }
    }
  };
  return (
    <Fragment>
      <Head>
        <title>Forgot Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen w-full bg-[url('/architect.svg')]  ">
        <div className=" flex  justify-between  ">
          <div className="mt-[500px] flex -skew-y-12  flex-col ">
            <div className="h-10 w-2 bg-pink-500 mix-blend-multiply sm:w-12 md:w-24 lg:w-40"></div>
            <div className="-mt-4 h-10 w-4 bg-indigo-500 mix-blend-multiply sm:w-16 md:w-32 lg:w-48"></div>
          </div>
          <div className="w-full max-w-md lg:max-w-lg mt-24">
            <div className=" mt-4 rounded-sm bg-white px-7 py-10 shadow-md">
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={forgotPasswordSchema}
              >
                {({ errors }) => (
                  <Form>
                    <label htmlFor="username " className="">
                      <span className=" text-lg font-bold tracking-wide text-gray-600 mb-2">
                        Please enter your Username
                      </span>
                      <Field
                        name="username"
                        type="text"
                        id="username"
                        className={`${
                          errors.username ? "field field-error" : "field"
                        }`}
                      />
                      <div className="mt-1 text-xs text-red-500">
                        {errors.username && errors.username}
                      </div>
                    </label>
                    <div className="mt-6  text-right ">
                      <button
                        type="submit"
                        className="text-medium w-full rounded-md bg-pink-500 px-4 py-2  tracking-wide text-white hover:bg-pink-600 transition ease-in-out"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="mt-12 flex -skew-y-12  flex-col ">
            <div className="h-10 w-4 bg-indigo-500 sm:w-16 md:w-32 lg:w-48 "></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ForgotPassword;
