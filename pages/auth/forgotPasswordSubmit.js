import { useEffect, Fragment } from "react";
import { Formik, Field, Form } from "formik";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import Head from "next/head";
import { forgotPasswordSubmitSchema } from "../../validation/auth/forgotPasswordSubmitSchema";

function ForgotPasswordSubmit() {
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

  const initialValues = {
    username: "",
    code: "",
    newPassword: "",
  };

  const onSubmit = async (values, actions) => {
    console.log("Values", values);
    const { username, code, newPassword } = values;
    const new_password = newPassword;
    try {
      await Auth.forgotPasswordSubmit(username, code, new_password);

      router.push("/auth/signIn");
    } catch (error) {
      console.log("error ConfirmUserg up:", error);
    }
  };
  return (
    <Fragment>
      <Head>
        <title>Change Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen w-full bg-[url('/architect.svg')]  flex  justify-between ">
        <div className="mt-[500px] flex -skew-y-12  flex-col ">
          <div className="h-10 w-2 bg-pink-500 mix-blend-multiply sm:w-12 md:w-24 lg:w-40"></div>
          <div className="-mt-4 h-10 w-4 bg-indigo-500 mix-blend-multiply sm:w-16 md:w-32 lg:w-48"></div>
        </div>
        <div className="w-full max-w-md lg:max-w-lg mt-16">
          <div className=" mt-4 rounded-sm bg-white px-12 py-8 shadow-md">
            <h3 className="text-xl font-semibold tracking-tight text-gray-600">
              Change Password
            </h3>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={forgotPasswordSubmitSchema}
            >
              {({ errors, isSubmitting, values }) => (
                <Form className="mt-6 ">
                  <label htmlFor="email w-full">
                    <span className="mb-2 block text-sm font-semibold text-gray-500">
                      Username
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
                  <label htmlFor="code ">
                    <span className="mb-2 mt-4 block text-sm font-semibold text-gray-500">
                      Verification Code
                    </span>
                    <Field
                      name="code"
                      type="text"
                      id="code"
                      className={`${
                        errors.code ? "field field-error" : "field"
                      }`}
                    />
                    <div className="mt-1 text-xs text-red-500">
                      {errors.code && errors.code}
                    </div>
                  </label>
                  <label htmlFor="newPassword w-full">
                    <span className="mb-2 mt-4 block text-sm font-semibold text-gray-500">
                      New Password
                    </span>
                    <Field
                      name="newPassword"
                      type="password"
                      id="newPassword"
                      className={`${
                        errors.newPassword ? "field field-error" : "field"
                      }`}
                    />
                    <div className="mt-1 text-xs text-red-500">
                      {errors.newPassword && errors.newPassword}
                    </div>
                  </label>

                  <div className="mt-6  text-right ">
                    <button
                      type="submit"
                      className="text-medium w-full rounded-md bg-pink-500 px-4 py-2 uppercase tracking-wide text-white hover:bg-pink-600 transition ease-in-out focus:outline-none"
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
    </Fragment>
  );
}

export default ForgotPasswordSubmit;
